import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlavorCards } from './components/FlavorCards';
import { KeyBenefits } from './components/KeyBenefits';
import { TasterReviews } from './components/TasterReviews';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WaitlistSuccessModal } from './components/WaitlistSuccessModal';
import { INITIAL_WAITLIST_COUNT } from './data/flavors';
import { WaitlistEntry } from './types';

export default function App() {
  const [waitlistCount, setWaitlistCount] = useState<number>(INITIAL_WAITLIST_COUNT);
  const [activeEntry, setActiveEntry] = useState<WaitlistEntry | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  // Load existing waitlist entry from localStorage if available
  useEffect(() => {
    try {
      const stored = localStorage.getItem('frydust_waitlist_entry');
      const storedCount = localStorage.getItem('frydust_waitlist_count');
      if (stored) {
        setActiveEntry(JSON.parse(stored));
      }
      if (storedCount) {
        setWaitlistCount(parseInt(storedCount, 10));
      }
    } catch {
      // ignore
    }
  }, []);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff5500', '#ffaa00', '#ffffff']
      });
    } catch {
      // ignore
    }
  };

  const handleJoinSuccess = (email: string) => {
    const newCount = waitlistCount + 1;
    setWaitlistCount(newCount);

    const refCode = 'FD-' + Math.random().toString(36).substring(2, 7).toUpperCase();
    const entry: WaitlistEntry = {
      email,
      queueNumber: newCount,
      referralCode: refCode,
      signedAt: new Date().toISOString()
    };

    setActiveEntry(entry);
    setShowModal(true);
    triggerConfetti();

    try {
      localStorage.setItem('frydust_waitlist_entry', JSON.stringify(entry));
      localStorage.setItem('frydust_waitlist_count', newCount.toString());
    } catch {
      // ignore
    }
  };

  const scrollToWaitlist = () => {
    if (activeEntry) {
      setShowModal(true);
      return;
    }
    const el = document.getElementById('waitlist-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const input = el.querySelector('input');
      if (input) input.focus();
    }
  };

  const handleSelectFlavor = (_flavorId: string) => {
    scrollToWaitlist();
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#f4f4f5] flex flex-col font-sans selection:bg-[#ff5500] selection:text-white">
      {/* Clean 3-zone Top Navigation */}
      <Navbar onJoinClick={scrollToWaitlist} />

      <main className="flex-1">
        {/* Simplified Hero Section */}
        <Hero onJoinSuccess={handleJoinSuccess} waitlistCount={waitlistCount} />

        {/* 4 Clean Flavor Cards */}
        <FlavorCards onSelectFlavor={handleSelectFlavor} />

        {/* 3 Core Value Pillars */}
        <KeyBenefits />

        {/* Short Customer Reviews & Guarantee */}
        <TasterReviews />

        {/* Fast Closing Call-to-Action */}
        <FinalCta onJoinSuccess={handleJoinSuccess} waitlistCount={waitlistCount} />
      </main>

      {/* Quiet Minimal Footer */}
      <Footer />

      {/* Simplified Discount Code Modal */}
      {showModal && (
        <WaitlistSuccessModal
          entry={activeEntry}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
