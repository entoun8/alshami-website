import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`max-w-[144rem] mx-auto px-[1.6rem] md:px-[2.4rem] lg:px-[4.0rem] ${className}`}
    >
      {children}
    </div>
  );
}
