"use client";

import FlashCard from "@/components/ui-tony/FlashCard";
import { useEffect, useState } from "react";

type imageProps = {
  total: number;
  total_pages: number;
  results: {
    // [key: string]: string;
    alt_description: string;
    urls: {
      regular: string;
      small: string;
    };
  }[];
};

type cardProps = {
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
};

export default function Home() {
  const [photos, setPhotos] = useState<cardProps[] | undefined>();
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=office`,
        {
          headers: {
            Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH}`,
          },
        },
      );
      const resJson = (await res.json()) as imageProps;
      // if (photos) {
      //   setPhotos([...photos, ...resJson?.results]);
      // } else {
      //   setPhotos(resJson?.results);
      // }
      setPhotos((prev) => [...(prev || []), ...resJson?.results]);
    };
    fetchPhotos();
  }, [page]);

  console.log(photos);

  return (
    <main className="flex min-h-screen flex-col space-y-3 bg-slate-100 px-1 py-3">
      {/* 包在一个块中去看效果 */}

      <section className="grid grid-cols-2 gap-3 px-[10rem] md:grid-cols-3">
        {photos?.map((item, index) => (
          <FlashCard
            image_url={item.urls["regular"]}
            key={item.alt_description + index}
            title={item.alt_description}
            isLast={index === photos.length - 1}
            newLimit={() => setPage(page + 1)}
          />
        ))}
      </section>
    </main>
  );
}
