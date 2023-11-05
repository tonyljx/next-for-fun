"use client";
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

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-3 bg-slate-100 px-1 py-3">
      {/* 包在一个块中去看效果 */}

      <section className="content mx-auto w-[450px] max-w-2xl bg-slate-50">
        <Card>
          <CardHeader>
            <CardTitle>McCoffeeTalker</CardTitle>
            <CardDescription>3小时前</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
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
      </section>

      <Button className="self-start">Hi</Button>
    </main>
  );
}
