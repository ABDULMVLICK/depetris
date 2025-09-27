import React, { useState } from 'react';

// Section6 - Formulaire de contact avec design minimaliste strict
// Respecte exactement la structure décrite : fond beige, bordures fines, alignement centré
const Section6 = () => {
  const [form_data, set_form_data] = useState({
    email: '',
    numero: '',
    cuisine: ''
  });

  const handle_input_change = (e) => {
    const { name, value } = e.target;
    set_form_data(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handle_submit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', form_data);
  };

  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#f8f2eb' }}>
      <div className="max-w-4xl mx-auto">
        {/* Logo géométrique en haut à droite */}
        <div className="flex justify-end mb-8">
          <img
            src={new URL('../assets/forme-geo.png', import.meta.url).href}
            alt="formes géométriques décoratives"
            className="h-12 sm:h-16 object-contain"
          />
        </div>

        {/* Container principal beige avec bordure noire fine - rectangle aux coins droits */}
        <div style={{ backgroundColor: '#f8f2eb', border: '1px solid #000000' }} className="p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl mx-auto">
            {/* Bloc du titre "NOUS CONTACTER" - rectangle avec bordure fine */}
            <div className="border border-black mb-6 p-4" style={{ height: '60px', display: 'flex', alignItems: 'center' }}>
              <h2 className="font-bold text-black uppercase" style={{ fontSize: '24px', fontFamily: 'Inter, Helvetica, Arial, sans-serif' }}>
                NOUS CONTACTER
              </h2>
            </div>
            
            {/* Texte descriptif */}
            <p className="mb-8 leading-relaxed" style={{ fontSize: '14px', color: '#333333', fontFamily: 'Inter, Helvetica, Arial, sans-serif', maxWidth: '70%' }}>
              The Department of Computer Science was established in 1984. The Department aims at upholding the highest standards of excellence in teaching, research and service to the community.
            </p>

            {/* Formulaire */}
            <form onSubmit={handle_submit} className="space-y-4">
              {/* Champ Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={form_data.email}
                  onChange={handle_input_change}
                  className="w-full px-4 bg-white text-black placeholder-gray-400 focus:outline-none transition-colors"
                  style={{ height: '45px', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '4px' }}
                  required
                />
              </div>

              {/* Champ Numéro */}
              <div>
                <input
                  type="tel"
                  name="numero"
                  placeholder="numero"
                  value={form_data.numero}
                  onChange={handle_input_change}
                  className="w-full px-4 bg-white text-black placeholder-gray-400 focus:outline-none transition-colors"
                  style={{ height: '45px', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '4px' }}
                  required
                />
              </div>

              {/* Champ Cuisine (select) */}
              <div className="relative">
                <select
                  name="cuisine"
                  value={form_data.cuisine}
                  onChange={handle_input_change}
                  className="w-full px-4 bg-white text-black focus:outline-none transition-colors appearance-none cursor-pointer"
                  style={{ height: '45px', border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '4px' }}
                  required
                >
                  <option value="" disabled>cuisine</option>
                  <option value="moderne">Moderne</option>
                  <option value="classique">Classique</option>
                  <option value="contemporaine">Contemporaine</option>
                  <option value="minimaliste">Minimaliste</option>
                </select>
                {/* Icône flèche pour le select */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Bouton "Envoyer" en forme de pilule */}
              <div className="flex justify-start pt-6">
                <button
                  type="submit"
                  className="px-6 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300"
                  style={{ 
                    height: '40px', 
                    backgroundColor: '#f8f2eb', 
                    fontSize: '16px',
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    borderRadius: '9999px'
                  }}
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
