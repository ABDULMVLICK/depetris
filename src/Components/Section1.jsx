import React from 'react';

const Section1 = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Vidéo de fond */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={new URL('../assets/video-depetris.mp4', import.meta.url).href} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
      
      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen">
        
        {/* Le header est maintenant géré par la page d'accueil */}
        
        {/* Contenu principal centré, responsive */}
        <div className="flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]">
          <div className="text-center text-white px-4">
            {/* Logo répété sous le titre */}
            <div className="flex justify-center mb-10 sm:mb-12 md:mb-16">
              <img 
                src="/logoDepetris.png" 
                alt="DEPETRIS DESIGN Logo" 
                className="h-20 w-auto sm:h-28 md:h-36 lg:h-48" 
              />
            </div>
          </div>
        </div>
        
        {/* Bloc descriptif responsive */}
        <div className="absolute inset-x-0 bottom-0 px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="bg-[#EFE3D085] bg-opacity-60 backdrop-blur-[1px] p-4 sm:p-5 md:p-6 lg:p-7 rounded-none md:rounded">
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed">
                The Department of Computer Science was established in 1984. The Department aims at upholding the cognitive aspect of education by ensuring academic excellence through innovative teaching methods and cutting-edge research initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
