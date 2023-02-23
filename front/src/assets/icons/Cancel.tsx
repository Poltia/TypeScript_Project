import React from "react";

interface Iprops {
  size?: number;
  color?: string;
  onClick?: () => void;
}

const Cancel: React.FC<Iprops> = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size || "24"}
    viewBox="0 0 24 24"
    fill={color || "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default Cancel;
