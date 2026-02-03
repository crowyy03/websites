import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-4 uppercase font-display text-xs tracking-[0.15em] transition-all duration-500 ease-out relative overflow-hidden group";
  
  const variants = {
    primary: "bg-transparent text-alabaster border border-amber-500/30 hover:border-amber-500/60 shadow-[0_0_25px_rgba(255,191,0,0.05)] hover:shadow-[0_0_35px_rgba(255,191,0,0.15)]",
    secondary: "bg-raisin/50 text-alabaster/80 hover:text-alabaster hover:bg-raisin border border-transparent hover:border-white/10",
    outline: "border border-white/10 text-alabaster/60 hover:text-alabaster hover:border-white/30"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {/* Subtle light reflection effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
    </button>
  );
};