import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCtaProps {
  onJoinSuccess: (email: string) => void;
  waitlistCount: number;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onJoinSuccess, waitlistCount }) => {
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
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0a0c] to-[#0c0d0e]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        
        <span className="text-xs font-semibold tracking-wider uppercase text-[#ff5500] block mb-3">
          Early Access Reservation
        </span>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 text-balance">
          Never Eat Boring Fries Again.
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base mb-8 max-w-lg mx-auto">
          Get 25% off your first order plus 48-hour priority access when Batch 01 drops.
        </p>

        {/* Clean Email Input Form */}
        <div className="max-w-md mx-auto mb-5">
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

          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Instant launch code · No spam · Unsubscribe anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
};
