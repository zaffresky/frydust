import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, X } from 'lucide-react';
import { WaitlistEntry } from '../types';

interface WaitlistSuccessModalProps {
  entry: WaitlistEntry | null;
  onClose: () => void;
}

export const WaitlistSuccessModal: React.FC<WaitlistSuccessModalProps> = ({
  entry,
  onClose
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!entry) return null;

  const promoCode = 'FRYVIP25';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-md bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-left"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon & Header */}
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <h2 className="font-display text-2xl font-bold text-white mb-1">
          You're on the Early Access List
        </h2>
        <p className="text-sm text-zinc-400 mb-6">
          We saved your spot for <span className="text-zinc-200 font-medium">{entry.email}</span>. You'll receive priority access the second Batch 01 goes live.
        </p>

        {/* Promo Code Box */}
        <div className="p-4 rounded-xl bg-black/60 border border-zinc-800 mb-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#ff5500] block mb-1">
            Your 25% Off Launch Code
          </span>
          <div className="flex items-center justify-between gap-3 mt-1">
            <code className="font-mono text-xl font-black text-white tracking-wider">
              {promoCode}
            </code>
            <button
              onClick={handleCopyCode}
              className="py-1.5 px-3 rounded-lg text-xs font-bold text-white bg-zinc-800 hover:bg-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedCode ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Done Button */}
        <button
          onClick={onClose}
          className="w-full py-3 text-sm font-bold text-white bg-[#ff5500] hover:bg-[#e04b00] rounded-xl transition-colors cursor-pointer text-center"
        >
          Explore the Flavors
        </button>
      </div>
    </div>
  );
};
