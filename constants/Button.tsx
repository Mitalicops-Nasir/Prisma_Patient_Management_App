"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: any;
}

export const CustomButton = ({
  children,
  className,
  onClick,
  href,
}: ButtonProps) => {
  const renderButton = () => (
    <button
      className={`bg-cyan-600 transition-all text-sm inline-flex py-[1rem] px-7 font-size-3 rounded-[2rem] hover:bg-gray-500 hover:text-cyan-400, ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={`text-center bg-red ${className}`}>
      {children}
    </a>
  );

  return href ? renderLink() : renderButton();
};
