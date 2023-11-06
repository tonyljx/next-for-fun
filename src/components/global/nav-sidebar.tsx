"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  User2,
  MonitorCheck,
  BellDot,
  FileBarChart2,
  Coffee,
} from "lucide-react";

type Props = {
  items: {
    name: string;
    href: string;
  }[];
} & React.HTMLAttributes<HTMLElement>;

export default function SideBarNav({ items, className, ...props }: Props) {
  const pathName = usePathname();
  console.log(pathName);

  const icons = [
    <User2 key="profile" />,
    <Coffee key="account" />,
    <MonitorCheck key="appearance" />,
    <BellDot key="notification" />,
    <FileBarChart2 key="display" />,
  ];

  return (
    <nav
      className={cn("hidden py-2 md:block md:w-[200px]", className)}
      {...props}
    >
      <div className="flex flex-col space-y-3 ">
        {items.map((item, index) => (
          <Link
            className={cn(
              "flex items-center gap-2 rounded-md px-[10px] py-2 hover:bg-slate-100",
              {
                "bg-slate-100 text-blue-500": item.href === pathName,
              },
            )}
            key={item.name}
            href={item.href}
          >
            {icons[index % icons.length]}
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
