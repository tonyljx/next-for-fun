import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../theme-button";

export default function Header() {
  return (
    <div className="mb-3 flex items-center justify-between border-b px-10 py-4">
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
        <li>
          <Link href="/setting" className="hover:text-indigo-400">
            Setting
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-indigo-400">
            Link2
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-indigo-400">
            Link3
          </Link>
        </li>
        <li>
          <Link href="#" className="hover:text-indigo-400">
            Link4
          </Link>
        </li>

        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
}
