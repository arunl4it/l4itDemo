// app/BodyWrapper.jsx
"use client";

import { usePathname } from "next/navigation";

export default function BodyWrapper({ children, fontClass }) {
  const pathname = usePathname();

  const isHome = pathname === "/";
  const bgClass = isHome ? "bg-black" : "bg-white"; // Or any default

  return (
    <body className={`${fontClass} antialiased ${bgClass}`}>
      {children}
    </body>
  );
}
