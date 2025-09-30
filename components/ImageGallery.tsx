'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: ImageItem[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative aspect-[4/3] bg-gray-200">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {image.caption && (
              <div className="p-4">
                <p className="text-gray-700 text-sm">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex flex-col">
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300 z-10"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <div className="relative flex-1">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
            {selectedImage.caption && (
              <div className="text-white text-center p-4 bg-black bg-opacity-50">
                <p>{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}