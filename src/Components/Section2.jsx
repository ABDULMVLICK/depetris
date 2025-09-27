import React from 'react';
import IMG1 from '../assets/IMG1_SECTION2.jpg';
import IMG2 from '../assets/IMG2_SECTION2.jpg';
import FORMES from '../assets/forme-geo.png';

// Section 2 – mise en page fidèle à la capture fournie
// Texte et bouton à gauche, deux images à droite avec superposition et cadres
const Section2 = () => {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Colonne gauche – titres, texte, bouton */}
          <div>
            {/* Ligne décorative + titre principal multiline */}
            <div className="flex items-start gap-4 mb-6">
              <span className="mt-3 inline-block h-[6px] w-16 bg-black" />
              <h2 className="text-black font-inktrap-ultrabold text-2xl sm:text-3xl lg:text-4xl leading-snug">
                Créateur d’espaces d’exception La vraie beauté intérieure
              </h2>
            </div>

            <p className="text-black/80 text-sm sm:text-base leading-relaxed max-w-2xl">
              The Department of Computer Science was established in 1984. The Department aims at upholding the cognitive aspect of education by ensuring academic excellence and intellectual growth of its students.
            </p>

            {/* Encadré beige */}
            <div className="mt-10 bg-[#edebe8] p-6 sm:p-7 lg:p-8 max-w-xl">
              <h3 className="text-black font-inktrap-ultrabold text-lg sm:text-xl mb-3">
                Engagement, personnalisation et innovation
              </h3>
              <p className="text-black/80 text-sm leading-relaxed">
                The Department of Computer Science was established in 1984. The Department aims at upholding the
                cognitive aspect of education by ensuring academic excellence
                and intellectual growth of its students.
              </p>

              {/* coin décoratif en bas-gauche */}
              <div className="mt-8 flex items-end gap-2">
                <span className="inline-block h-8 w-[6px] bg-black" />
                <span className="inline-block h-[6px] w-8 bg-black" />
              </div>

              {/* Bouton */}
              <div className="mt-8">
                <button className="px-6 py-2 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition-colors">
                  Découvrir
                </button>
              </div>
            </div>
          </div>

          {/* Colonne droite – images superposées */}
          <div className="relative">
            {/* Image principale */}
            <div className="relative z-10">
              <img src={IMG1} alt="Section2 principale" className="w-full h-auto object-cover" />
            </div>

            {/* Cadre décoratif supérieur (visible à partir de md) */}
            <div className="hidden md:block absolute -top-10 right-6 w-40 lg:w-48 h-12 lg:h-16 bg-black/80" />

            {/* Image secondaire : empilée sur mobile, superposée à partir de md */}
            <div className="mt-4 mx-auto w-3/4 sm:w-2/3 md:mt-0 md:mx-0 md:absolute md:top-8 md:-right-6 lg:-right-10 md:w-56 lg:w-72">
              <img src={IMG2} alt="Section2 secondaire" className="w-full h-auto object-cover shadow-xl" />
            </div>

            {/* Image décorative officielle : centrée sur mobile, à droite en desktop */}
            <div className="mt-8 lg:mt-12 flex justify-center md:justify-end">
              <img src={FORMES} alt="Formes géométriques" className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;


