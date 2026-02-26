export function GridLines() {
  return (
    <div className="absolute inset-0 max-w-[1200px] mx-auto pointer-events-none" aria-hidden="true">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-black/[0.06] max-sm:opacity-0" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-black/[0.06] max-sm:opacity-0" />
    </div>
  );
}
