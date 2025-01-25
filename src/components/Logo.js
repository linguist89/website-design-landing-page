import React from 'react';

const Logo = ({ className }) => {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 20C12 15.5817 15.5817 12 20 12C24.4183 12 28 15.5817 28 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="4" fill="currentColor" />
    </svg>
  );
};

export default Logo; 