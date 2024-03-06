"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import React from "react";

export default function Nav() {
  const pathname = usePathname();

  const links = [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/inputs",
      name: "inputs",
    },
    {
      path: "/textareas",
      name: "textareas",
    },
    {
      path: "/radiobuttons",
      name: "radio buttons",
    },
    {
      path: "/checkboxes",
      name: "checkboxes",
    },
    {
      path: "/select",
      name: "select",
    },
    {
      path: "/specialty-inputs",
      name: "specialty inputs",
    },
  ];

  return (
    <nav className="p-8">
      <ul className="flex items-center justify-center gap-12">
        {links.map((link) => (
          <li key={link.path}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
