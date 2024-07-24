import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string; // Define bgColor prop
}

export const Section = ({
  children,
  className,
  bgColor = "bg-slate-200",
}: SectionProps) => {
  // Define an array of allowed background color classes
  const allowedBgColors = ["bg-slate-200", "bg-slate-900", "bg-sky-700"];

  // Check if the specified bgColor is one of the allowed options
  const bgClass = allowedBgColors.includes(bgColor) ? bgColor : "bg-slate-200";

  return <section className={`p-[5%] w-full ${bgClass}`}>{children}</section>;
};
