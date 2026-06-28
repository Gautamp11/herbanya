import React from "react";

const MeeshoIcon = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      className={className}
      fill="none"
      xmlns="http://w3.org"
    >
      {/* Official Meesho Brand Color Background Gradient */}
      <defs>
        <linearGradient id="meeshoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9F2282" />
          <stop offset="100%" stopColor="#FF416C" />
        </linearGradient>
      </defs>

      {/* Rounded App Icon Base */}
      <rect width="512" height="512" rx="112" fill="url(#meeshoGradient)" />

      {/* The Iconic 'M' Monogram */}
      <path
        d="M130 160 H200 V270 L256 210 L312 270 V160 H382 V362 H315 L256 295 L197 362 H130 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

export default MeeshoIcon;
