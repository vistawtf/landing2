"use client";

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const BREVO_FORM_URL =
  'https://d446b27f.sibforms.com/serve/MUIFAJiVPTBT8leGERph_rvrbdhDyJNavvKaUhEvOrpjis1ck-tVsBOk0q9nyU4A2tyyneGktdIDWo4b4NBzhcv5uWnCwG6DBQWRRkS3QpWIbjujNS-TytOEhRaQb6l4Y1stsHs-KW9Ee6UJys7Wj_jB-vDV7l9SIM7PCVrZLR_iu2XNjRZZ-wEdCSVdEd7iu8P0KFDL7WioPpKC';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('email_address_check', '');
      formData.append('locale', 'es');

      await fetch(BREVO_FORM_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section
      id="newsletter"
      className="relative w-full h-screen mt-[-10px] pt-12 pb-6 md:pt-20 md:pb-24 bg-[#111] text-[#E4E2D8] overflow-hidden flex items-center z-10"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#111]" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[url('/frame-110.svg')] bg-no-repeat bg-[length:auto_125%] bg-[position:120%_center] md:bg-[length:auto_108%] md:bg-[position:100%_center] lg:bg-[length:auto_112%] lg:bg-[position:100%_center] opacity-40 md:opacity-100 lg:opacity-75"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#111] via-[rgba(17,17,17,0.9)] to-[rgba(17,17,17,0.58)] md:via-[rgba(17,17,17,0.72)] md:to-[rgba(17,17,17,0.16)] lg:via-[rgba(17,17,17,0.66)] lg:to-[rgba(17,17,17,0.1)]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 md:px-16">
        <div className="flex flex-col gap-5 max-w-[700px]">
          {/* Kicker + Badge */}
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#999999] font-mono">
              EMERGENT STACK BY ETH LATAM
            </p>
            <div className="bg-white/[0.08] border border-white/[0.15] rounded-2xl px-3 py-1 text-sm md:text-base font-semibold text-[#E4E2D8]">
              10k+ subscribers
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-[clamp(1.2rem,5vw,1.4rem)] md:text-4xl font-medium text-[#E4E2D8] leading-tight max-w-[26ch] md:max-w-none mb-4">
            Less scrolling & more insights:
            <br />
            The blockchain + AI newsletter for builders shaping the future
          </h2>

          {/* Bullets */}
          <ul className="mt-3 mb-5 space-y-1 text-lg md:text-base text-[#E4E2D8] leading-relaxed">
            <li className="relative pl-5">
              <span className="absolute left-0 text-[#999999]">›</span>
              Curated signals, without the noise.
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 text-[#999999]">›</span>
              Built for operators shipping across LatAm.
            </li>
            <li className="relative pl-5">
              <span className="absolute left-0 text-[#999999]">›</span>
              Read in minutes, relevant all week.
            </li>
          </ul>

          {/* Form */}
          {status === 'success' ? (
            <div className="flex items-center gap-3 mt-5 text-[#E4E2D8] text-lg">
              <span className="text-[#FF5233] font-bold text-2xl">✓</span>
              <span>You&apos;re in! Check your inbox.</span>
            </div>
          ) : (
            <form
              className="flex flex-col md:flex-row gap-3 w-full max-w-[620px] mt-5"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-h-[60px] md:min-h-[56px] px-5 py-4 md:py-0 bg-white/[0.08] border border-white/[0.15] rounded-[2px] md:rounded-r-none text-[#EDEDED] text-[17px] md:text-base placeholder:text-[#999999] focus:outline-none focus:border-[#FF5233] transition-colors"
                placeholder="you@company.com"
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="h-14 md:h-14 px-6 md:px-6 bg-[#FF5233] text-white rounded-[3px] md:rounded-l-none text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#E64A2E] focus:outline focus:outline-2 focus:outline-white focus:outline-offset-2 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <span>Subscribing...</span>
                ) : (
                  <>
                    <span>SUBSCRIBE</span>
                    <ChevronRight className="w-[18px] h-[18px]" strokeWidth={2.2} />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="w-full text-sm text-red-400 mt-1">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}

          {/* Authorship */}
          <p className="text-sm text-white/60 mt-3">
            a collaboration between <span className="text-[#FF5233] font-semibold">vista</span> and arco.lat
          </p>

          {/* Partner Logos */}
          <div className="flex gap-6 items-center mt-8">
            <a
              href="https://ethlatam.org"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/partners/eth-latam-white.svg"
                alt="ETH Latam"
                width={120}
                height={32}
                className="h-10 md:h-12 w-auto"
              />
            </a>
            <a
              href="https://arco.lat"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/partners/arco-white.png"
                alt="Arco"
                width={120}
                height={32}
                className="h-10 md:h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
