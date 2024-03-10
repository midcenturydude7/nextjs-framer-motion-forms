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
      path: "/radiobtns",
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
      <ul className="flex items-center justify-center gap-8">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              className={cn(
                "rounded-lg px-2 py-2 pl-4 pr-4 text-slate-600 transition-all duration-200 hover:bg-slate-700 hover:text-slate-300",
                pathname === link.path
                  ? "cursor-default bg-slate-700 text-slate-300"
                  : "",
              )}
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
