//  note : i used for the service ,project
import React from "react";

export default function ProjectCardUI({
  children,
  className = "",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`p-2 border border-cyan-800 rounded-lg hover:shadow-cyan-900 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
