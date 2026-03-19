'use client';
import Image from 'next/image';
import { useState } from 'react';

interface ResponsiveHeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function ResponsiveHeroImage({ src, alt, priority = true }: ResponsiveHeroImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">⚾</div>
          <p className="text-gray-500 text-sm">Portrait Coming Soon</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Responsive Image */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
        onError={() => setImageError(true)}
      />
      
      {/* Gradual overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      {/* Optional vintage effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/10 via-transparent to-amber-900/20 mix-blend-overlay" />
    </div>
  );
}