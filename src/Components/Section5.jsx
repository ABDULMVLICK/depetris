import React from 'react';

// Section5 avec vidéo à gauche et boîte de texte "VIDEO" à droite
// Reproduit exactement la mise en page de la capture d'écran
const Section5 = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 bg-beige-site">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Vidéo à gauche - 2/3 de la largeur */}
          <div className="lg:col-span-2">
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <video
                src={new URL('../assets/video-depetris.mp4', import.meta.url).href}
                className="w-full h-full object-cover"
                controls
                muted
                loop
                playsInline
              >
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>
            </div>
          </div>

          {/* Boîte de texte à droite - 1/3 de la largeur */}
          <div className="lg:col-span-1">
            <div className="bg-beige-site border border-black rounded-lg p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inktrap-ultrabold text-black mb-4">
                VIDEO
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-black">
                The Department of Computer Science was established in 1984. The Department aims at upholding the highest standards of excellence in teaching, research and service to the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
