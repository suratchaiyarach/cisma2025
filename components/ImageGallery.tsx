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
            className="group cursor-pointer glass-card rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl neon-border"
            onClick={() => setSelectedImage(image)}
          >
            {/* Image Container */}
            <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/50 z-10"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400/50 z-10"></div>

              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <div className="flex items-center gap-2 text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  <span className="text-sm font-medium">Click to expand</span>
                </div>
              </div>
            </div>

            {/* Caption Section */}
            {image.caption && (
              <div className="p-4 relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
                <p className="text-gray-300 text-sm leading-relaxed">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex flex-col">
            {/* Close Button */}
            <button
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 transition-colors z-20 flex items-center gap-2 glass-card px-4 py-2 rounded-lg"
              onClick={() => setSelectedImage(null)}
            >
              <span className="text-sm font-medium">Close</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container with Decorative Frame */}
            <div className="relative flex-1 glass-card rounded-2xl overflow-hidden p-4">
              {/* Decorative Corners */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-cyan-400/50 z-10"></div>
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-purple-400/50 z-10"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-purple-400/50 z-10"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-cyan-400/50 z-10"></div>

              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
            </div>

            {/* Caption */}
            {selectedImage.caption && (
              <div className="mt-4 glass-card rounded-xl p-4 text-center">
                <p className="text-white text-lg">{selectedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}