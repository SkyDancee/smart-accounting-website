import React from 'react';

interface PartnersMarqueeProps {
  className?: string;
}

const PartnersMarquee: React.FC<PartnersMarqueeProps> = ({ className = '' }) => {
  const partners = [
    { id: '1', name: 'Didox' },
    { id: '2', name: 'ARTEL' },
    { id: '3', name: 'UzPharma' },
    { id: '4', name: 'TrackBox' },
    { id: '5', name: '1C' },
    { id: '6', name: 'Onecoin' },
    { id: '7', name: 'VIKO' },
    { id: '8', name: 'ODD' },
    { id: '9', name: 'Extel' },
    { id: '10', name: 'Samarkand' },
    { id: '11', name: 'TechCorp' },
    { id: '12', name: 'InnovateLab' },
  ];

  return (
    <section className={`py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Наши партнёры</h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            ООО "Smart Accounting" гордится сотрудничеством с ведущими компаниями и организациями
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div 
              key={partner.id}
              className="flex items-center justify-center p-4"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#c9a875] to-[#b8956a] rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                {partner.name.substring(0, 2).toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="container mx-auto px-4 mt-20">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Станьте нашим партнером</h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mb-10">
            Присоединяйтесь к сообществу успешных компаний, которые доверяют нам свой бухгалтерский учет
          </p>
          <button className="bg-[#c9a875] hover:bg-[#b8956a] text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            Стать партнером
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee; 
