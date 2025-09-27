import React, { useRef } from 'react';

// Section7 - Actualités avec carrousel d'images
// Reproduit exactement la capture d'écran avec titre "ACTUALITÉ" et carrousel contrôlé
const Section7 = () => {
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

  const actualites_items = [
    {
      image: new URL('../assets/collectionsImage/collection-image1.jpg', import.meta.url).href,
      title: "The Department of Computer Science was established",
    },
    {
      image: new URL('../assets/collectionsImage/collection-image2.jpg', import.meta.url).href,
      title: "The Department of Computer Science was established",
    },
    {
      image: new URL('../assets/collectionsImage/collection-image3.jpg', import.meta.url).href,
      title: "The Department of Computer Science was established",
    },
    {
      image: new URL('../assets/collectionsImage/collection-image4.jpg', import.meta.url).href,
      title: "The Department of Computer Science was established",
    },
    {
      image: new URL('../assets/collectionsImage/collection-image5.jpg', import.meta.url).href,
      title: "The Department of Computer Science was established",
    },
    {
      image: new URL('../assets/collectionsImage/collection-image6.jpg', import.meta.url).href,
      title: "The Department of Computer Science was established",
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Titre "ACTUALITÉ" */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black uppercase tracking-wide">
            ACTUALITÉ
          </h2>
        </div>

        <div className="relative">
          {/* Carrousel d'images */}
          <div
            ref={list_ref}
            className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          >
            {actualites_items.map((item, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[360px]"
              >
                <div className="aspect-[4/3] w-full overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-sm sm:text-base text-black leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Contrôles de navigation - boutons carrés avec bordures */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              aria-label="Précédent"
              onClick={handle_scroll_prev}
              className="h-10 w-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <span className="text-lg font-bold">‹</span>
            </button>
            <button
              type="button"
              aria-label="Suivant"
              onClick={handle_scroll_next}
              className="h-10 w-10 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            >
              <span className="text-lg font-bold">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
