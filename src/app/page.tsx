import { ModeToggle } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col   px-10 py-8">
      <header className="flex justify-between border-b py-4">
        <Image
          className="dark:invert"
          src="/vercel.svg"
          height={25}
          width={100}
          alt="logo"
        />
        <ul className="flex items-center gap-2">
          <li>
            <Link href="#">Link1</Link>
          </li>
          <li>
            <Link href="#">Link2</Link>
          </li>
          <li>
            <Link href="#">Link3</Link>
          </li>
          <li>
            <Link href="#">Link4</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </header>

      <div className="mt-10 flex items-center gap-3">
        <Button variant={"secondary"}>Click me</Button>
        <Button className="hover:shadow-md">Click me</Button>
      </div>

      <div className="mt-10"></div>
    </main>
  );
}
