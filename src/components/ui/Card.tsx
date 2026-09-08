import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isHoverable?: boolean;
}

const Card = ({ children, className, isHoverable = true }: CardProps) => {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 transition-all duration-300',
        isHoverable && 'hover:bg-card/80 hover:border-white/20 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  );
};

export { Card };
