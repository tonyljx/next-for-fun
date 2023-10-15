import SideBarNav from "@/components/global/nav-sidebar";
import React from "react";

type SettingProps = {
  children: React.ReactNode;
};

const navItems = [
  {
    name: "Profile",
    href: "/setting",
  },
  {
    name: "Account",
    href: "/setting/account",
  },
  {
    name: "Appearance",
    href: "/setting/appearance",
  },
  {
    name: "Notification",
    href: "/setting/notification",
  },
  {
    name: "Display",
    href: "/setting/display",
  },
];

export default function Layout({ children }: SettingProps) {
  return (
    <div className="flex space-x-2 ">
      <SideBarNav items={navItems} />
      {children}
    </div>
  );
}
