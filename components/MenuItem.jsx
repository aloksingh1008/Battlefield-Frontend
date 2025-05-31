import React from 'react';
import Icon from './Icon'; // Make sure this path is correct if MenuItem is a separate file

// Helper component for individual menu items
// Added 'direction' prop, defaulting to 'col'
const MenuItem = ({ icon, text, isActive, direction = 'col' }) => (
  <div
    className={`flex ${direction === 'row' ? 'flex-row items-center space-x-2' : 'flex-col items-center space-y-1'}
      cursor-pointer transition-colors duration-200
      ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`}
  >
    {/* The 'icon' prop here is the string name (e.g., 'FaHome') */}
    <Icon icon={icon} size={direction === 'row' ? 16 : 24} /> {/* Adjust icon size for row direction if needed */}
    <span className={`${direction === 'row' ? 'text-sm' : 'text-xs font-semibold'}`}>{text}</span> {/* Adjust text size for row */}
  </div>
);