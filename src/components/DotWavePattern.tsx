import React from 'react';

interface DotWavePatternProps {
  variant?: 'blue' | 'white' | 'gray';
  className?: string;
}

/**
 * Subtle SVG Dot Matrix Wave Pattern
 * Creates a static or subtly animated vector graphic representing the brand's wave motif
 * for section dividers, transitions, or watermarks.
 */
export const DotWavePattern: React.FC<DotWavePatternProps> = ({
  variant = 'blue',
  className = '',
}) => {
  const color =
    variant === 'white'
      ? 'rgba(255, 255, 255, 0.18)'
      : variant === 'gray'
      ? 'rgba(104, 116, 129, 0.14)'
      : 'rgba(6, 59, 104, 0.12)';

  // Static rhythmic matrix of curved dots
  const points = React.useMemo(() => {
    const pts = [];
    const cols = 24;
    const rows = 6;
    for (let c = 0; c < cols; c++) {
      const u = c / (cols - 1);
      const x = 20 + u * 460;
      const baseY = 50 + Math.sin(u * Math.PI) * -30;
      for (let r = 0; r < rows; r++) {
        const v = (r / (rows - 1)) - 0.5;
        const y = baseY + v * 28 + Math.cos(u * 3) * 6;
        const radius = 1.2 + Math.sin(u * Math.PI) * 1.6;
        pts.push({ x: Number(x.toFixed(1)), y: Number(y.toFixed(1)), r: Number(radius.toFixed(1)) });
      }
    }
    return pts;
  }, []);

  return (
    <div className={`overflow-hidden pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 500 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-24 opacity-80"
      >
        {points.map((p, idx) => (
          <circle key={idx} cx={p.x} cy={p.y} r={p.r} fill={color} />
        ))}
      </svg>
    </div>
  );
};
