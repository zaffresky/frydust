import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onJoinSuccess: (email: string) => void;
  waitlistCount: number;
}

export const Hero: React.FC<HeroProps> = ({ onJoinSuccess, waitlistCount }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onJoinSuccess(email);
      setEmail('');
    }, 350);
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-zinc-800/60">
      {/* Subtle radial ambient warmth */}
      <div 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#ff5500]/12 via-transparent to-transparent blur-[120px] -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct Pitch & Fast Waitlist Form */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#ff5500] mb-3">
              Batch 01 Launching Soon
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-5 text-balance">
              Exotic French Fry Seasoning That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ffaa00]">Actually Sticks</span>.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-8 max-w-lg">
              Transform plain homemade, air-fried, or takeout fries into gourmet street-food masterpieces. Handcrafted with single-origin spices and zero filler salt.
            </p>

            {/* Clean Email Capture Form */}
            <div id="waitlist-form" className="w-full max-w-lg mb-4">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="Enter your email..."
                    aria-label="Email address for waitlist"
                    className="w-full h-14 px-5 text-base text-white bg-zinc-900 border border-zinc-700 rounded-xl focus:outline-none focus:border-[#ff5500] focus:ring-2 focus:ring-[#ff5500]/30 transition-all placeholder:text-zinc-500"
                    disabled={isSubmitting}
                  />
                  {error && (
                    <p className="absolute -bottom-6 left-1 text-xs font-medium text-rose-400">
                      {error}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 px-7 font-display text-base font-bold text-white bg-[#ff5500] hover:bg-[#e04b00] rounded-xl transition-all shadow-[0_0_25px_rgba(255,85,0,0.35)] hover:shadow-[0_0_35px_rgba(255,85,0,0.55)] active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Reserving...</span>
                  ) : (
                    <>
                      <span>Get 25% Off</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Concise Proof Notes */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-400">
                <div className="flex items-center gap-1.5 text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Instant 25% launch discount code</span>
                </div>
                <div>
                  <span className="font-mono font-semibold text-white tabular-nums">
                    {waitlistCount.toLocaleString()}
                  </span>
                  {' '}food lovers in line
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative">
              <img
                src="/src/assets/images/hero_exotic_fries_1792168145643.jpg"
                alt="Golden crispy french fries sprinkled with exotic spice seasoning"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] lg:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-xs uppercase tracking-wider text-[#ffaa00] font-mono font-semibold block">
                  Batch 01 Signature
                </span>
                <p className="text-sm font-semibold text-white mt-0.5">
                  Micro-milled to coat every ridge without clumping.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
