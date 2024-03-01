"use client";

import { Card } from "@nextui-org/react";
import Image from "next/image";

type Props = {
  onOpen: () => void;
  backgroundUrl: string;
  title: string;
}

export function ShowcaseCard({onOpen, backgroundUrl, title}: Props) {
  return (
    <Card
      isPressable
      onPress={onOpen}
      className="aspect-video overflow-hidden hover:scale-105"
      radius="md"
    >
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="overflow-hidden object-cover object-center"
        alt="renovation image"
        src={backgroundUrl}
      />
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="absolute flex h-full w-full items-center justify-center text-center text-xl text-white">
        {title}
      </div>
    </Card>
  );
}
