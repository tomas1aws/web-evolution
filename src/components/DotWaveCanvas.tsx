import React, { useEffect, useRef } from 'react';

interface DotWaveCanvasProps {
  variant?: 'light-on-dark' | 'dark-on-light';
  density?: 'sparse' | 'normal' | 'rich';
  className?: string;
  speed?: number;
  interactive?: boolean;
}

/**
 * Animated Dot Wave Canvas
 * Translates the brand's iconic dot-matrix canopy into a subtle, living architectural graphic.
 * Simulates a continuous undulating wave/surface in 3D perspective.
 */
export const DotWaveCanvas: React.FC<DotWaveCanvasProps> = ({
  variant = 'light-on-dark',
  density = 'normal',
  className = '',
  speed = 0.0006,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio || 800);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio || 600);

    const resizeObserver = new ResizeObserver(() => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      height = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    });

    resizeObserver.observe(canvas);

    // Reduced motion detection
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Grid configuration
    const cols = density === 'sparse' ? 24 : density === 'rich' ? 44 : 32;
    const rows = density === 'sparse' ? 14 : density === 'rich' ? 26 : 20;

    const baseColor = variant === 'light-on-dark' ? '255, 255, 255' : '6, 59, 104';
    const baseAlpha = variant === 'light-on-dark' ? 0.45 : 0.22;

    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5;
      const ny = (e.clientY - rect.top) / rect.height - 0.5;
      mouseRef.current.targetX = nx * 50;
      mouseRef.current.targetY = ny * 35;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    const render = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (!prefersReducedMotion) {
        time += speed;
      }

      // Render 3D undulating dot wave
      const centerX = width * 0.52 + mouseRef.current.x;
      const centerY = height * 0.5 + mouseRef.current.y;
      const spreadX = width * 0.9;
      const spreadY = height * 0.55;

      for (let r = 0; r < rows; r++) {
        const rowNorm = r / (rows - 1); // 0 (front) to 1 (back)
        const depth = 0.55 + rowNorm * 0.7; // perspective scaling

        for (let c = 0; c < cols; c++) {
          const colNorm = c / (cols - 1); // 0 to 1

          // Dual sine wave formulation reflecting the evolution canopy
          const wave1 = Math.sin(colNorm * Math.PI * 2.2 + time * 14 + rowNorm * 2.5);
          const wave2 = Math.cos(colNorm * Math.PI * 1.5 - time * 9 + rowNorm * 3.2);
          const archShape = Math.sin(Math.pow(colNorm, 0.75) * Math.PI);

          const elevation = (wave1 * 32 + wave2 * 20) * archShape;

          // Projected 2D coordinates with gentle perspective tilt
          const x = centerX + (colNorm - 0.5) * spreadX * depth;
          const y = centerY + (rowNorm - 0.5) * spreadY + elevation * depth;

          // Dot size based on depth and wave crest
          const crestFactor = (wave1 + 1) * 0.5;
          const radius = (1.1 + crestFactor * 1.6) * (window.devicePixelRatio || 1) * (0.8 + rowNorm * 0.4);

          // Alpha fade at perimeter
          const edgeFadeX = Math.sin(colNorm * Math.PI);
          const edgeFadeY = Math.sin(rowNorm * Math.PI);
          const alpha = baseAlpha * edgeFadeX * edgeFadeY * (0.4 + crestFactor * 0.6);

          if (alpha > 0.01) {
            ctx.beginPath();
            ctx.arc(x, y, Math.max(0.6, radius), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${baseColor}, ${alpha.toFixed(3)})`;
            ctx.fill();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      resizeObserver.disconnect();
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [variant, density, speed, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
};
