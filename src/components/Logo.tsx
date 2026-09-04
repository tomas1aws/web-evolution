import React from 'react';

interface LogoProps {
  variant?: 'white' | 'blue';
  className?: string;
  markOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

/**
 * Brand Logo component for Evolution Investment Life.
 * Renders the authentic dot-wave canopy mark and clean typography
 * in either white (#FFFFFF) or deep primary navy (#063B68).
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'blue',
  className = '',
  markOnly = false,
  size = 'md',
}) => {
  const color = variant === 'white' ? '#FFFFFF' : '#063B68';
  
  // Height sizing mapping
  const heightClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    hero: 'h-24 sm:h-28 md:h-36',
  }[size];

  // Mathematical dot canopy representing the authentic wave structure
  const dots = React.useMemo(() => {
    const list: Array<{ x: number; y: number; rx: number; ry: number; rot: number }> = [];
    const cols = 28;
    const rows = 12;

    for (let c = 0; c < cols; c++) {
      const u = c / (cols - 1);
      const spineX = 52 + u * 316;
      const spineY = 175 - Math.sin(Math.pow(u, 0.72) * Math.PI) * 130 + (u > 0.6 ? Math.pow(u - 0.6, 1.4) * 55 : 0);
      const width = 88 * Math.sin(Math.pow(u, 0.58) * Math.PI) * (1 - u * 0.42);
      const normalAngle = -0.78 + u * 1.05;
      const count = Math.max(3, Math.round(rows * (0.35 + 0.65 * Math.sin(Math.pow(u, 0.65) * Math.PI))));

      for (let r = 0; r < count; r++) {
        const v = (r / (count - 1)) - 0.5;
        const px = spineX + Math.sin(normalAngle) * (v * width);
        const py = spineY + Math.cos(normalAngle) * (v * width) * 0.78;
        const crestDist = Math.sin(u * Math.PI);
        const crossDist = 1 - Math.abs(v) * 1.3;
        const sizeFactor = Math.max(0.3, crestDist * (0.4 + 0.6 * Math.max(0, crossDist)));

        const rx = 1.4 + sizeFactor * 2.5;
        const ry = 1.1 + sizeFactor * 1.9;
        const rot = Math.round(normalAngle * 57.3);

        list.push({ x: Number(px.toFixed(1)), y: Number(py.toFixed(1)), rx: Number(rx.toFixed(2)), ry: Number(ry.toFixed(2)), rot });
      }
    }
    return list;
  }, []);

  if (markOnly) {
    return (
      <svg
        viewBox="30 25 350 170"
        className={`${heightClasses} w-auto max-w-full inline-block ${className}`}
        fill="none"
        aria-label="Evolution Investment Life Isotipo"
        role="img"
      >
        <g id="isotipo-dots">
          {dots.map((dot, idx) => (
            <ellipse
              key={idx}
              cx={dot.x}
              cy={dot.y}
              rx={dot.rx}
              ry={dot.ry}
              transform={`rotate(${dot.rot} ${dot.x} ${dot.y})`}
              fill={color}
            />
          ))}
        </g>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 500 310"
      className={`${heightClasses} w-auto max-w-full inline-block ${className}`}
      fill="none"
      aria-label="Evolution Investment Life Logo"
      role="img"
    >
      <g id="isotipo-dots">
        {dots.map((dot, idx) => (
          <ellipse
            key={idx}
            cx={dot.x}
            cy={dot.y}
            rx={dot.rx}
            ry={dot.ry}
            transform={`rotate(${dot.rot} ${dot.x} ${dot.y})`}
            fill={color}
          />
        ))}
      </g>
      <g id="wordmark" transform="translate(250, 240)" textAnchor="middle">
        <text
          y="0"
          fontFamily="'Plus Jakarta Sans', Montserrat, 'Segoe UI', sans-serif"
          fontSize="33"
          fontWeight="800"
          letterSpacing="0.25em"
          fill={color}
        >
          EVOLUTION
        </text>
        <text
          y="31"
          fontFamily="'Plus Jakarta Sans', Montserrat, 'Segoe UI', sans-serif"
          fontSize="14"
          fontWeight="600"
          letterSpacing="0.48em"
          fill={color}
        >
          INVESTMENT LIFE
        </text>
      </g>
    </svg>
  );
};
