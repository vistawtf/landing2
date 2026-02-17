"use client";

export function HeroLatestDivider() {
  return (
    <div className="section-divider relative z-20 w-full" aria-hidden="true">
      <style jsx>{`
        .section-divider::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

export function SectionDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div className="section-divider relative z-20 w-full" aria-hidden="true">
      <style jsx>{`
        .section-divider::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 1px;
          background: ${dark ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)'};
        }
      `}</style>
    </div>
  );
}
