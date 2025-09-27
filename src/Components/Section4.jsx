import React, { useRef } from 'react';

// Section Services avec carrousel contrôlé et overlay au survol
// - Le conteneur est scrollable horizontalement
// - Les flèches déclenchent un scroll lisse par éléments
// - Chaque carte affiche un voile blanc léger avec titre + texte uniquement au survol
const Section4 = () => {
  const list_ref = useRef(null);

  const handle_scroll_next = () => {
    const container = list_ref.current;
    if (!container) return;
    const scroll_amount = Math.max(container.clientWidth * 0.8, 320);
    container.scrollBy({ left: scroll_amount, behavior: 'smooth' });
  };

  const handle_scroll_prev = () => {
    const container = list_ref.current;
    if (!container) return;
    const scroll_amount = Math.max(container.clientWidth * 0.8, 320);
    container.scrollBy({ left: -scroll_amount, behavior: 'smooth' });
  };

  const services_items = [
    {
      image: new URL('../assets/servicesImages/service-image1.jpg', import.meta.url).href,
      title: 'cuisine',
      text: "The Department of Computer Science was established in 1984. The Department aims at upholding",
    },
    {
      image: new URL('../assets/servicesImages/service-image2.jpg', import.meta.url).href,
      title: 'salon',
      text: "Interior concepts tailored to contemporary living with timeless materials.",
    },
    {
      image: new URL('../assets/servicesImages/service-image3.jpg', import.meta.url).href,
      title: 'lounge',
      text: "Spaces designed for comfort, balance and warm aesthetics.",
    },
    {
      image: new URL('../assets/servicesImages/service-image4.jpg', import.meta.url).href,
      title: 'suite',
      text: "Refined details and crafted finishes for premium ambiences.",
    },
    {
      image: new URL('../assets/servicesImages/service-image5.jpg', import.meta.url).href,
      title: 'bibliothèque',
      text: "Calm, minimalist palettes to elevate daily rituals.",
    },
    {
      image: new URL('../assets/servicesImages/service-image6.jpg', import.meta.url).href,
      title: 'hall',
      text: "Functional circulation areas with sculptural lighting.",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8 sm:mb-10 lg:mb-12">
          <span className="block h-10 w-px bg-black"></span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-wide">SERVICES</h2>
        </div>

        <div className="relative">
          <div
            ref={list_ref}
            className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          >
            {services_items.map((item, index) => (
              <div
                key={index}
                className="group relative snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]"
              >
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Overlay blanc léger au survol */}
                <div className="pointer-events-none absolute inset-0 flex items-end bg-white/0 group-hover:bg-white/60 transition-colors duration-300">
                  <div className="w-full p-4 sm:p-5 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-white/80 backdrop-blur-sm px-4 py-3 sm:px-5 sm:py-4">
                      <h3 className="text-xl sm:text-2xl font-inktrap-ultrabold capitalize">{item.title}</h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-black/80">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contrôles flèches */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              aria-label="Précédent"
              onClick={handle_scroll_prev}
              className="h-10 w-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <span className="text-lg">‹</span>
            </button>
            <button
              type="button"
              aria-label="Suivant"
              onClick={handle_scroll_next}
              className="h-10 w-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <span className="text-lg">›</span>
            </button>
          </div>
          {/* Formes géométriques en bas */}
          <div className="mt-10 sm:mt-12 flex">
            <img
              src={new URL('../assets/forme-geo.png', import.meta.url).href}
              alt="formes géométriques décoratives"
              className="h-10 sm:h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;


