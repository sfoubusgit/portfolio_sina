'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductImageGallery({ images, productName }: ProductImageGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  return (
    <div>
      {/* Main Image */}
      <div className="relative w-full h-96 md:h-[500px] bg-off-white rounded-eco border border-gray-low overflow-hidden mb-4">
        <Image
          src={images[selectedImageIndex]}
          alt={productName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`relative w-full h-20 md:h-24 rounded-eco border-2 overflow-hidden transition-all ${
                selectedImageIndex === index
                  ? 'border-leaf-green ring-2 ring-leaf-green'
                  : 'border-gray-low hover:border-gray-mid'
              }`}
            >
              <Image
                src={img}
                alt={`${productName} - Bild ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 12.5vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


