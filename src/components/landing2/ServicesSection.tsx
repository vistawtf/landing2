"use client";

import { Brain, Megaphone, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { GridLines } from './GridLines';

const services = [
  {
    icon: Brain,
    number: "01",
    title: "AI Training",
    description: "Custom AI models trained on your data. From fine-tuning LLMs to building agent systems.",
    link: "/landing2/services#ai-training"
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Marketing Campaigns",
    description: "Research-backed marketing strategies that cut through the noise and reach your audience.",
    link: "/landing2/services#marketing"
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Protocol Growth",
    description: "Growth strategies for blockchain protocols. Community building, tokenomics, and ecosystem expansion.",
    link: "/landing2/services#protocol-growth"
  }
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;

  return (
    <div className="relative p-8 border border-black/[0.08] rounded-[2px] bg-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#FF5233] transition-all duration-300">
      {/* Number watermark */}
      <div className="absolute top-8 right-8 text-5xl font-semibold text-black/[0.08] font-mono">
        {service.number}
      </div>

      {/* Icon */}
      <Icon className="w-12 h-12 text-[#FF5233] mb-4" strokeWidth={1.5} />

      {/* Title */}
      <h3 className="text-[32px] font-medium text-[#111] mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-lg text-[#575757] leading-relaxed mb-4">
        {service.description}
      </p>

      {/* CTA */}
      <Link
        href={service.link}
        className="inline-block text-base text-[#575757] hover:text-[#FF5233] transition-colors"
      >
        Learn more →
      </Link>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="relative landing2-section-spacing bg-[#FFFFFF]">
      <GridLines />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16">
        <h2 className="text-[36px] md:text-[48px] font-semibold text-[#111] lowercase mb-12">
          what we do
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/landing2/services"
            className="inline-block text-base font-medium text-[#575757] hover:text-[#FF5233] hover:underline hover:underline-offset-4 transition-all"
          >
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
