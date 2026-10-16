import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] py-10 text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-zinc-800/80">
          
          {/* Wordmark & Quick Mission */}
          <div>
            <div className="font-display text-base font-black tracking-tight text-white flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-sm bg-[#ff5500] rotate-45"></span>
              <span>FRYDUST CO.</span>
            </div>
            <p className="text-zinc-400 text-xs">
              Artisanal small-batch spice blends crafted for extraordinary French fries.
            </p>
          </div>

          {/* Clean Links */}
          <div className="flex flex-wrap gap-6 text-zinc-400 font-medium text-xs">
            <a href="#flavors" className="hover:text-white transition-colors">The Flavors</a>
            <a href="#why-it-works" className="hover:text-white transition-colors">Why It Works</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#waitlist-form" className="hover:text-white transition-colors text-[#ffaa00]">Join Waitlist (25% Off)</a>
          </div>
        </div>

        {/* Legal & Dietary Badges */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} FRYDUST Co. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Non-GMO</span>
            <span>·</span>
            <span>Certified Gluten-Free</span>
            <span>·</span>
            <span>100% Plant-Based</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
