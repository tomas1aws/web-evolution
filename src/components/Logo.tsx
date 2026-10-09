import React from 'react';

interface LogoProps {
  variant?: 'white' | 'blue';
  className?: string;
  markOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

/**
 * Logotipo oficial everlife vectorizado a partir de los originales suministrados.
 * El isotipo y la tipografía forman parte de un único asset, no se recrean con CSS.
 */
export const Logo: React.FC<LogoProps> = ({
  variant = 'blue',
  className = '',
  markOnly = false,
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-8',
    md: 'h-11',
    lg: 'h-16',
    hero: 'h-24 sm:h-28 md:h-36',
  }[size];

  // Mantener los tamaños explícitos de los componentes que ya usan el logo.
  const hasHeight = /(?:^|\s)(?:(?:sm|md|lg|xl):)?h-/.test(className);
  const dimensions = hasHeight ? className : `${heightClasses} ${className}`;

  return (
    <img
      src={markOnly ? '/brand/everlife-icon.svg' : '/brand/everlife-logo.svg'}
      width={markOnly ? 424 : 559}
      height={markOnly ? 321 : 605}
      alt={markOnly ? 'Símbolo de everlife' : 'everlife — Evolución permanente'}
      draggable={false}
      className={`${dimensions} w-auto max-w-full object-contain ${variant === 'white' ? 'brightness-0 invert' : ''}`}
    />
  );
};
