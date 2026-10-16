import React from 'react';
import { Sparkles, Utensils, HeartHandshake } from 'lucide-react';

export const KeyBenefits: React.FC = () => {
  return (
    <section id="why-it-works" className="py-16 md:py-24 border-b border-zinc-800/80 bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#ff5500] block mb-2">
            Why It Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
            Designed for the Perfect Bite
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Most fry seasonings fail because coarse granules slide right off. We engineered ours to stick and coat evenly.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-[#ff5500]/10 border border-[#ff5500]/20 flex items-center justify-center text-[#ff5500] mb-5">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Clings to Every Ridge
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Milled to bond instantly with steam and hot surface oils. No more salty dust pools left behind in your bowl.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              Any Fry, Any Time
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Toss right out of the air fryer, deep fryer, or oven. Even revives plain fast food or delivery fries in seconds.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-white mb-2">
              100% Clean Ingredients
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Real spices, herbs, and sea salts. Certified gluten-free, 100% vegan, non-GMO, and free of artificial additives or MSG.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
