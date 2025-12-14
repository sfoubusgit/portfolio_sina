import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'mint';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = 'inline-block px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-badge';
  
  const variantStyles = {
    default: 'bg-leaf-green text-deep-forest',
    mint: 'bg-soft-mint text-deep-forest',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}


