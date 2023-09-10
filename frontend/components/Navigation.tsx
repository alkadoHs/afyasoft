"use client";
interface Props {
  href: string;
  name: string;
  children: ReactNode;
  alt?: string;
}

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ReactNode } from "react";

export function Navigation({ href, name, children }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        className={
          isActive
            ? "text-green-700 flex gap-2 items-center p-3 bg-green-100 rounded-md hover:bg-slate-50"
            : "p-3 flex gap-2 items-center rounded-md hover:bg-slate-50"
        }
        href={href}
      >
        {children}
        <span>{name}</span>
      </Link>
    </li>
  );
}
