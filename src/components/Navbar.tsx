import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NavbarProps {
  onJoinClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onJoinClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/80 bg-[#0c0d0e]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-6 py-4">
        {/* Brand Wordmark */}
        <a 
          href="#" 
          className="font-display text-xl font-black tracking-tight text-white flex items-center gap-2 group whitespace-nowrap shrink-0"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-[#ff5500] rotate-45 transform group-hover:scale-110 transition-transform"></span>
          <span>FRYDUST</span>
        </a>

        {/* Concise Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#flavors" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            The Flavors
          </a>
          <a href="#why-it-works" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Why It Works
          </a>
          <a href="#reviews" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
            Taster Reviews
          </a>
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center shrink-0">
          <button
            onClick={onJoinClick}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#ff5500] hover:bg-[#e04b00] rounded-xl transition-all shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_28px_rgba(255,85,0,0.5)] active:scale-[0.98] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Get 25% Off</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
