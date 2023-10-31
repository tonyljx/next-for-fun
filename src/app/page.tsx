"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(false);
  return (
    <main className="flex min-h-screen flex-col px-1 py-3">
      {/* 包在一个块中去看效果 */}
      <section>
        <div className="relative">
          <Button
            data-state={active ? "open" : "closed"}
            onClick={() => setActive(!active)}
          >
            Click Me
          </Button>
          {active && (
            <div
              className={`  absolute top-12   h-[250px] w-[150px] rounded 
        bg-slate-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 `}
            ></div>
          )}
          {/* <div
            className={`transition-visibility absolute top-12   h-[250px] w-[150px] rounded 
        bg-slate-100 transition-opacity duration-500
        ${active ? "visible opacity-100" : "invisible opacity-0"}`}
          ></div> */}
        </div>
      </section>
    </main>
  );
}
