import React from "react";

export default function Main({ children }) {
  return (
    <div>
      <main className="main">{children}</main>
    </div>
  );
}
