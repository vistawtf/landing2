export function HeroLatestDivider() {
  return (
    <div className="section-divider relative z-20 w-full" aria-hidden="true">
      <div className="absolute left-0 right-0 h-px bg-black/[0.06]" />
    </div>
  );
}

export function SectionDivider({ dark = false }: { dark?: boolean }) {
  return (
    <div className="section-divider relative z-20 w-full" aria-hidden="true">
      <div
        className="absolute left-0 right-0 h-px"
        style={{ background: dark ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.06)' }}
      />
    </div>
  );
}
