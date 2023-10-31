import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div>
      <Skeleton className="h-[100px] w-[100px] rounded-full" />
    </div>
  );
}
