import styles from "./ContentButton.module.css";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  Icon: React.ElementType;
  className?: string;
};

export default function ContentButton({ children, className, Icon }: Props) {
  const [isTilted, setIsTilted] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsTilted(true);
    setIsActive(!isActive);
    setTimeout(() => {
      setIsTilted(false);
    }, 200);
  };

  return (
    <div className={cn("flex items-center gap-3 text-slate-400", className)}>
      <Icon
        className={cn(" w-5 cursor-pointer transition hover:scale-110 ", {
          [styles["rotate-on-click"]]: isTilted,
          "text-red-400": isActive,
        })}
        onClick={handleClick}
      />
      {children}
    </div>
  );
}
