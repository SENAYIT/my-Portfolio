import React from "react";

export default function ContactIcon({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800 border border-cyan-900 p-4 rounded-xl">
      {children}
    </div>
  );
}
