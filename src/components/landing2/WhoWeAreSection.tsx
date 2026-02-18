export function WhoWeAreSection() {
  return (
    <section className="relative bg-[#E4E2D8] text-[#111] py-16 md:py-20">
      {/* Outer grid rails */}
      <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none">
        <div className="absolute inset-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-black/[0.06] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:bg-black/[0.06]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-[32px] font-medium leading-tight lowercase mb-6">
          who we are
        </h2>
        <p className="text-lg md:text-xl leading-relaxed max-w-[700px] mx-auto">
          Vista is a research collective exploring blockchain and AI, finding signal in the noise.
        </p>
      </div>
    </section>
  );
}
