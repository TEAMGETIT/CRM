/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Icon.scss';

function Icon({ name, color, className, help, onClick }) {
  const iconPath = `${window.location.origin}/images/Icon/${name}.svg`;
  return (
    <div
      className={`icon ${className || ''}`}
      title={help || ''}
      onClick={onClick}
    >
      <span
        className={`icon__elem ${color || 'icon__elem--color'}`}
        style={{
          WebkitMaskImage: `url(${iconPath})`,
          maskImage: `url(${iconPath})`,
        }}
      />
    </div>
  );
}

export default Icon;
