import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { supabase } from '../supabaseClient';

interface Partner {
  id: string;
  name: string;
  logo_url: string;
  created_at: string;
}

interface PartnersMarqueeProps {
  className?: string;
}

const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({ className = '' }) => {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPartners();
  }, []);

  const fetchPartners = async () => {
    try {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .order('name');
        
      if (error) {
        console.error('Error fetching partners:', error);
      } else {
        setPartners(data as Partner[]);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fallback partners for demo - using placeholder design instead of missing images
  const fallbackPartners = [
    { id: '1', name: 'Didox', logo_url: 'placeholder', created_at: '' },
    { id: '2', name: 'ARTEL', logo_url: 'placeholder', created_at: '' },
    { id: '3', name: 'UzPharma', logo_url: 'placeholder', created_at: '' },
    { id: '4', name: 'TrackBox', logo_url: 'placeholder', created_at: '' },
    { id: '5', name: '1C', logo_url: 'placeholder', created_at: '' },
    { id: '6', name: 'Onecoin', logo_url: 'placeholder', created_at: '' },
    { id: '7', name: 'VIKO', logo_url: 'placeholder', created_at: '' },
    { id: '8', name: 'ODD', logo_url: 'placeholder', created_at: '' },
    { id: '9', name: 'Extel', logo_url: 'placeholder', created_at: '' },
    { id: '10', name: 'Samarkand', logo_url: 'placeholder', created_at: '' },
    { id: '11', name: 'TechCorp', logo_url: 'placeholder', created_at: '' },
    { id: '12', name: 'InnovateLab', logo_url: 'placeholder', created_at: '' },
  ];

  const displayPartners = partners.length > 0 ? partners : fallbackPartners;

  // Create multiple copies for seamless looping (minimum 4 sets for perfect continuity)
  const createLoopingPartners = (partnersArray: Partner[]) => {
    const copies = Math.max(4, Math.ceil(32 / partnersArray.length)); // Ensure at least 32 items total
    return Array(copies).fill(partnersArray).flat();
  };

  const loopingPartners = createLoopingPartners(displayPartners);
  const reversedLoopingPartners = createLoopingPartners([...displayPartners].reverse());

  if (loading) {
    return (
      <section className={`py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden ${className}`}>
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Наши партнёры</h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              ООО "Smart Accounting" гордится сотрудничеством с ведущими компаниями и организациями
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center py-32">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#c9a875]"></div>
        </div>
      </section>
    );
  }

  const PartnerCard: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => (
    <div 
      className="flex-shrink-0 mx-4 hover:opacity-75 transition-all duration-500 transform hover:scale-105 group"
    >
      <div className="p-4 flex items-center justify-center">
        <div className="w-28 h-28 relative flex items-center justify-center">
          {partner.logo_url === 'placeholder' ? (
            // Show stylish placeholder directly
            <div className="w-28 h-28 bg-gradient-to-br from-[#c9a875] to-[#b8956a] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-inner">
              {partner.name.substring(0, 2).toUpperCase()}
            </div>
          ) : (
            <Image
              src={partner.logo_url}
              alt={`${partner.name} logo`}
              width={112}
              height={112}
              className="object-contain transition-all duration-300"
              onError={(e) => {
                // Fallback placeholder with brand colors
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
                if (target.parentElement) {
                  target.parentElement.innerHTML = `<div class="w-28 h-28 bg-gradient-to-br from-[#c9a875] to-[#b8956a] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-inner">${partner.name.substring(0, 2).toUpperCase()}</div>`;
                }
              }}
            />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Наши партнёры</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            ООО "Smart Accounting" гордится сотрудничеством с ведущими компаниями и организациями
          </p>
        </div>
      </div>

      {/* Desktop and Tablet View - Two Infinite Rows */}
      <div className="hidden md:block relative">
        {/* Top Row - Scrolling Left to Right */}
        <div className="relative overflow-hidden mb-8">
          {/* Gradient overlays for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-left-to-right">
            {loopingPartners.map((partner, index) => (
              <PartnerCard key={`top-${partner.id}-${index}`} partner={partner} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolling Right to Left */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays for seamless fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll-right-to-left">
            {reversedLoopingPartners.map((partner, index) => (
              <PartnerCard key={`bottom-${partner.id}-${index}`} partner={partner} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View - Horizontal Swipeable Scroll */}
      <div className="md:hidden relative">
        <div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-6 px-4" style={{ scrollBehavior: 'smooth' }}>
          {displayPartners.map((partner, index) => (
            <div 
              key={`mobile-${partner.id}-${index}`} 
              className="flex-shrink-0 mx-3 snap-center"
            >
              <div className="hover:opacity-75 transition-all duration-300 transform hover:scale-105">
                <div className="p-3 flex flex-col items-center justify-center text-center min-w-[120px]">
                  <div className="w-24 h-24 relative flex items-center justify-center mb-2">
                    {partner.logo_url === 'placeholder' ? (
                      // Show stylish placeholder directly
                      <div className="w-24 h-24 bg-gradient-to-br from-[#c9a875] to-[#b8956a] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-inner">
                        {partner.name.substring(0, 2).toUpperCase()}
                      </div>
                    ) : (
                      <Image
                        src={partner.logo_url}
                        alt={`${partner.name} logo`}
                        width={96}
                        height={96}
                        className="object-contain"
                        onError={(e) => {
                          // Fallback placeholder with brand colors
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.innerHTML = `<div class="w-24 h-24 bg-gradient-to-br from-[#c9a875] to-[#b8956a] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-inner">${partner.name.substring(0, 2).toUpperCase()}</div>`;
                          }
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile scroll indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {displayPartners.slice(0, Math.min(displayPartners.length, 6)).map((_, index) => (
            <div 
              key={`indicator-${index}`}
              className="w-2 h-2 bg-gray-300 rounded-full transition-colors duration-300"
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Станьте нашим партнером</h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Присоединяйтесь к сообществу успешных компаний, которые доверяют нам свой бухгалтерский учет и получают качественные профессиональные услуги
          </p>
          <div className="inline-block">
            <button className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              Стать партнером
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll-left-to-right {
          animation: scroll-left-to-right 30s linear infinite;
          will-change: transform;
        }
        
        .animate-scroll-right-to-left {
          animation: scroll-right-to-left 30s linear infinite;
          will-change: transform;
        }
        
        /* Pause animation on hover for better UX */
        .animate-scroll-left-to-right:hover,
        .animate-scroll-right-to-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default PartnersMarquee; 
