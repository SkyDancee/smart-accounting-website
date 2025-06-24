import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  // Static array of images
  const images = [
    '/slider/girl.webp',
    '/slider/laptop.webp',
    '/slider/uzbek.webp',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="min-h-screen bg-[#fcfcfc] flex items-center">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 lg:items-center">
          {/* Left side - Text content */}
          <div className="text-[#2e2e2e] space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Ваш бизнес — наша бухгалтерия
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-light">
              Профессиональные бухгалтерские услуги для вашего бизнеса. 
              Мы берем на себя все вопросы учета, чтобы вы могли сосредоточиться 
              на развитии своего дела.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="bg-[#c9a875] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#b8956a] transition-colors duration-300 shadow-lg hover:shadow-xl">
                Получить консультацию
              </button>
              <button className="border-2 border-[#c9a875] text-[#c9a875] px-8 py-4 rounded-lg font-semibold hover:bg-[#c9a875] hover:text-white transition-colors duration-300">
                Узнать цены
              </button>
            </div>
          </div>

          {/* Right side - Image slider */}
          <div className="relative w-full h-64 md:h-[400px] mt-12 lg:mt-0 lg:order-last">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:scale-[1.02] transition-transform duration-500 ease-out bg-white">
              {images.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
              
              {/* Slider indicators */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                      index === currentImage ? 'bg-[#c9a875] shadow-lg' : 'bg-gray-300 hover:bg-[#c9a875]/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 