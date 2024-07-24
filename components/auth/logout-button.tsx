"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const LogoutButton = ({ children, className }: LogoutButtonProps) => {
  const onClick = () => {
    logout();
  };

  return (
    <span className={`cursor-pointer ${className}`} onClick={onClick}>
      {children}
    </span>
  );
};
