import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export const TasterReviews: React.FC = () => {
  const reviews = [
    {
      quote: "The Tokyo Umami Smoke makes homemade air fryer fries taste like they came from a Michelin star pub. Unbelievable crunch.",
      author: "Marcus V.",
      location: "London, UK",
      favorite: "Tokyo Umami Smoke"
    },
    {
      quote: "I never thought citrus on fries would work so well until I tried Havana Mojo Lime. Tangy, spicy, and perfectly balanced.",
      author: "Elena R.",
      location: "Austin, TX",
      favorite: "Havana Mojo Lime"
    },
    {
      quote: "Ordinary seasonings always pool at the bottom of the plate. This stuff coats every fry evenly from top to bottom.",
      author: "Julian C.",
      location: "San Francisco, CA",
      favorite: "Truffle Masala Noir"
    }
  ];

  return (
    <section id="reviews" className="py-16 md:py-24 border-b border-zinc-800/80 bg-[#0a0a0c]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-wider uppercase text-[#ff5500] block mb-2">
            Early Feedback
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white mb-3">
            Loved by Fry Obsessives
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Tested across hundreds of home cooks and food pop-ups before launch.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#ffaa00] mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-[#ffaa00]" />
                  ))}
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 italic">
                  "{r.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">{r.author}</span>
                  <span className="text-zinc-500">{r.location}</span>
                </div>
                <span className="text-[#ffaa00] font-medium">{r.favorite}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust & Guarantee Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-zinc-900/30 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-zinc-300">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span><strong>Batch 01 Guarantee:</strong> If it's not the best fry seasoning you've ever tasted, 100% refund.</span>
          </div>
          <div className="text-zinc-500">
            Small-batch production · Limited launch inventory
          </div>
        </div>

      </div>
    </section>
  );
};
