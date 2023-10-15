"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  items: {
    name: string;
    href: string;
  }[];
} & React.HTMLAttributes<HTMLElement>;

export default function SideBarNav({ items, className, ...props }: Props) {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav
      className={cn("  hidden py-2 md:block md:w-1/5", className)}
      {...props}
    >
      <div className="flex flex-col space-y-3 ">
        {items.map((item) => (
          <Link
            className={cn("rounded-md px-[10px] py-2 hover:bg-slate-100", {
              "bg-slate-100": item.href === pathName,
            })}
            key={item.name}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
