'use client';
import Image, { StaticImageData } from "next/image";
import React from "react";

export type ImageInfo = {
  src: StaticImageData;
  title: string;
  width: number;
  height: number;
};

export type PhotoGridProps = {
  images: ImageInfo[];
  colSize: number;
};

export default function PhotoGrid({ images, colSize }: PhotoGridProps) {
  const colClassMap: Record<number, string> = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
  };

  const colClass = colClassMap[colSize] || 'md:grid-cols-3';

  return (
    <div className={`overflow-hidden px-4 py-6 max-w-screen-xl mx-auto`}>
      <div className={`grid grid-cols-1 ${colClass} gap-4 cursor-pointer`}>
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden pb-[100%] bg-gray-100 group"
          >
            <Image
              src={image.src}
              alt={image.title}
              width={image.width}
              height={image.height}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm uppercase tracking-wider p-2 text-center">
              {image.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
