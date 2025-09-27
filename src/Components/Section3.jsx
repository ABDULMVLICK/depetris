import React, { useMemo, useRef, useEffect } from 'react';
import FORMES2 from '../assets/forme-geo2.png';

// Carrousel défilant en continu (marquee-like) sans lib externe
// Complexe: on clone la liste pour créer une boucle fluide
function ScrollingCarousel({ images, speed_px_s = 30, height_cls = "h-28" }) {
  const track_ref = useRef(null);

  useEffect(() => {
    const track = track_ref.current;
    if (!track) return;

    let animation_frame;
    let last_ts = performance.now();
    let offset = 0;

    const step = (now) => {
      const dt = (now - last_ts) / 1000;
      last_ts = now;
      offset -= speed_px_s * dt;

      const track_width = track.scrollWidth / 2; // deux blocs identiques collés
      if (Math.abs(offset) >= track_width) {
        offset += track_width * Math.sign(offset);
      }
      track.style.transform = `translateX(${offset}px)`;
      animation_frame = requestAnimationFrame(step);
    };

    animation_frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation_frame);
  }, [speed_px_s]);

  const doubled = useMemo(() => [...images, ...images], [images]);

  return (
    <div className={`overflow-hidden ${height_cls}`}>
      <div ref={track_ref} className="flex gap-4 will-change-transform">
        {doubled.map((src, idx) => (
          <img key={idx} src={src} alt="collection" className={`object-cover ${height_cls} w-auto rounded-sm`} />)
        )}
      </div>
    </div>
  );
}

const Section3 = () => {
  // Import dynamique de toutes les images du dossier
  const all_images = useMemo(() => {
    const modules = import.meta.glob('../assets/collectionsImage/*.{png,jpg,jpeg,webp}', { eager: true });
    return Object.values(modules).map((m) => m.default).sort();
  }, []);

  // Séparation: 3 images pour le rang supérieur (à côté du texte), le reste pour le bandeau
  const top_images = all_images.slice(0, 3);
  const bottom_images = all_images;

  return (
    <section className="relative bg-[#edebe8] border-t border-black/20 py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* En-tête titre + ligne */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center gap-4">
            <h2 className="text-black font-inktrap-ultrabold text-2xl sm:text-3xl">COLECTION</h2>
            <span className="h-[3px] flex-1 bg-black" />
          </div>
          {/* Zone principale: texte/bouton à gauche, carrousel de 3 images à droite */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Colonne gauche: texte + bouton */}
            <div>
              <p className="text-black/80 text-sm sm:text-base max-w-md">
                The Department of Computer Science was established in 1984. The Department aims at upholding the
                cognitive aspect of education by ensuring academic excellence
              </p>
              <div className="mt-5">
                <button className="px-5 py-2 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition-colors">Découvrire</button>
              </div>
            </div>
            {/* Colonne droite: carrousel de 3 images */}
            <div>
              <ScrollingCarousel images={top_images} speed_px_s={20} height_cls="h-36" />
            </div>
          </div>
        </div>

        {/* Bandeau de vignettes multiple – carrousel lent */}
        <div className="mb-10">
          <ScrollingCarousel images={bottom_images} speed_px_s={35} height_cls="h-28" />
        </div>

        {/* Bas de section avec logo et texte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start border-t border-black/20 pt-8">
          <div>
            
            <div className="mt-4 flex items-center gap-6">
              <img src={FORMES2} alt="Formes géo" className="h-15 w-auto" />
            </div>
          </div>
          <div>
            <p className="text-black/80 text-sm sm:text-base leading-relaxed">
              The Department of Computer Science was established in 1984. The Department aims at upholding the cognitive
              aspect of education by ensuring academic excellence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;


