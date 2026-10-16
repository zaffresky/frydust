import React from 'react';
import { FLAVORS } from '../data/flavors';
import { Flame } from 'lucide-react';

interface FlavorCardsProps {
  onSelectFlavor: (flavorId: string) => void;
}

export const FlavorCards: React.FC<FlavorCardsProps> = ({ onSelectFlavor }) => {
  return (
    <section id="flavors" className="py-16 md:py-24 border-b border-zinc-800/80 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#ff5500] block mb-2">
            The Launch Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
            Four Addictive Exotic Blends
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Each blend is crafted with real ingredients from around the world. No artificial flavors, preservatives, or MSG.
          </p>
        </div>

        {/* 4 Clean Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {FLAVORS.map((flavor) => {
            const heatText = flavor.heatLevel <= 2 ? 'Mild Heat' : flavor.heatLevel === 3 ? 'Medium Heat' : 'Fiery Kick';

            return (
              <div
                key={flavor.id}
                className="group flex flex-col justify-between rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all overflow-hidden"
              >
                <div>
                  {/* Photo */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                    <img
                      src={flavor.image}
                      alt={`${flavor.name} seasoned fries`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-[11px] font-medium text-zinc-300">
                      {flavor.regionInspiration.split(',')[0]}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs text-[#ffaa00] font-medium mb-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#ff5500]" />
                      <span>{heatText}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                      {flavor.name}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                      {flavor.description}
                    </p>

                    <div className="border-t border-zinc-800/80 pt-3">
                      <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold block mb-1">
                        Key Ingredients
                      </span>
                      <p className="text-xs text-zinc-300 font-medium">
                        {flavor.keyNotes.slice(0, 3).join(' · ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectFlavor(flavor.id)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-zinc-800 hover:bg-[#ff5500] transition-colors cursor-pointer text-center"
                  >
                    Select This Blend (25% Off)
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
