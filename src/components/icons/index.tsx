import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const LeetCodeIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    role="img"
    aria-hidden="true"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.98 2.977c-.6.596-1.57.596-2.166 0l-5.602-5.602c-.596-.596-.596-1.57 0-2.166l5.602-5.602c.596-.596 1.57-.596 2.166 0l2.976 2.977a1.374 1.374 0 0 0 1.952 0 1.374 1.374 0 0 0 0-1.951L14.444.438A1.374 1.374 0 0 0 13.483 0z" />
    <path d="M9.833 12.875h6.334c.46 0 .833-.373.833-.833 0-.46-.373-.834-.833-.834H9.833c-.46 0-.833.374-.833.834 0 .46.373.833.833.833z" />
  </svg>
);

export const HackerRankIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    role="img"
    aria-hidden="true"
  >
    <path d="M14.634 0H9.366L0 9.366v5.268L9.366 24h5.268L24 14.634V9.366L14.634 0zm-1.008 15.65h-1.87v-2.738h-3.51v2.738h-1.87V8.35h1.87v2.737h3.51V8.35h1.87v7.3z" />
  </svg>
);
