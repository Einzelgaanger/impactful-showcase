import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left square (navy blue, smaller) - outer solid ring */}
        <rect
          x="6"
          y="34"
          width="32"
          height="32"
          fill="#1e3a8a"
          transform="rotate(45 22 50)"
        />
        {/* Left square inner empty space - creates the margin/ring effect */}
        <rect
          x="13"
          y="41"
          width="18"
          height="18"
          fill="#f5f5dc"
          transform="rotate(45 22 50)"
        />
        
        {/* Center square (dark orange, larger) - outer solid ring */}
        <rect
          x="30"
          y="30"
          width="40"
          height="40"
          fill="#ffb300"
          transform="rotate(45 50 50)"
        />
        {/* Center square inner empty space - creates the margin/ring effect */}
        <rect
          x="37"
          y="37"
          width="26"
          height="26"
          fill="#f5f5dc"
          transform="rotate(45 50 50)"
        />
        
        {/* Right square (navy blue, smaller) - outer solid ring */}
        <rect
          x="62"
          y="34"
          width="32"
          height="32"
          fill="#1e3a8a"
          transform="rotate(45 78 50)"
        />
        {/* Right square inner empty space - creates the margin/ring effect */}
        <rect
          x="69"
          y="41"
          width="18"
          height="18"
          fill="#f5f5dc"
          transform="rotate(45 78 50)"
        />
      </svg>
    </div>
  );
};

export default Logo;
