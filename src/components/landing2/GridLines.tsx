"use client";

export function GridLines() {
  return (
    <div className="grid-lines absolute inset-0 max-w-[1200px] mx-auto pointer-events-none">
      <style jsx>{`
        .grid-lines::before,
        .grid-lines::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(0, 0, 0, 0.06);
        }
        
        .grid-lines::before {
          left: 0;
        }
        
        .grid-lines::after {
          right: 0;
        }
        
        @media (max-width: 640px) {
          .grid-lines::before,
          .grid-lines::after {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
