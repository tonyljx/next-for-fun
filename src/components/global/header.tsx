"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../theme-button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import LoginButton from "../ui-tony/LoginButton";

const headerItems = [
  {
    href: "/setting",
    label: "Setting",
  },
];

export default function Header() {
  const pathName = usePathname();

  // 提取第一级的路由
  const firstPathName = pathName.substring(0, pathName.indexOf("/", 1));

  console.log(firstPathName);

  return (
    <div className=" flex items-center justify-between border-b px-4 py-2">
      <Link href="/">
        <Image
          className="dark:invert"
          src="/vercel.svg"
          height={25}
          width={100}
          alt="logo"
        />
      </Link>

      <ul className="flex items-center gap-3">
        {headerItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className={cn("hover:text-indigo-400", {
                "text-indigo-400": item.href === firstPathName,
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <ModeToggle />
        </li>
        <li>
          <LoginButton />
        </li>
      </ul>
    </div>
  );
}
