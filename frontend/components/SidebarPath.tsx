"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  pathName: string;
  name: string;
}

function SidebarPath({ pathName, name }: Props) {
  const currentPath = usePathname();
  return (
    <li
      className={
        currentPath == pathName
          ? "marker:text-lg marker:text-sky-400 font-semibold text-green-700"
          : ""
      }
    >
      <Link href={pathName}>{name}</Link>
    </li>
  );
}

export default SidebarPath;
