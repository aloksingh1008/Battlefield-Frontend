import React from 'react';

// Example: pass icon component and size as props
export default function Icon({ icon: IconComponent, size = 24, color = 'currentColor', className = '' }) {
  return (
    <IconComponent size={size} color={color} className={className} />
  );
}
