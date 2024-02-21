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
    <Card isPressable onPress={onOpen} className="hover:scale-105 max-h-[200px]" radius="md">
      <Image
        width={400}
        height={200}
        objectFit='cover'
        className="object-cover overflow-hidden"
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
