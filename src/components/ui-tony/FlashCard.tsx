import React, { useEffect, useRef } from "react";
import ContentButton from "@/components/ui-tony/ContentButton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  MessageSquareIcon,
  Share2Icon,
  ThumbsUp,
  ThumbsUpIcon,
} from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  image_url?: string;
  newLimit: () => void;
  isLast: boolean;
};

export default function FlashCard({
  title,
  image_url,
  isLast,
  newLimit,
}: Props) {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (isLast && entry.isIntersecting) {
          console.log("加载!!!!");

          newLimit();
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 1.0,
      },
    );
    observer.observe(cardRef.current);
  });

  return (
    <Card ref={cardRef}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>3小时前</CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        {image_url ? (
          <Image
            alt="image"
            height={200}
            width={200}
            src={image_url}
            className="h-auto w-auto"
          />
        ) : (
          "hi"
        )}
      </CardContent>

      <CardFooter className="flex justify-between gap-3">
        <ContentButton Icon={ThumbsUpIcon}>
          <span>5</span>
        </ContentButton>

        <div className="flex gap-3 text-slate-400">
          <MessageSquareIcon className="w-5 " />
          <span>3</span>
        </div>

        <div className="flex gap-3 text-slate-400">
          <Share2Icon className="w-5" />
          <span>3</span>
        </div>
      </CardFooter>
    </Card>
  );
}
