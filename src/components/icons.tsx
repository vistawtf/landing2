// ========================================
// ICONS
// ========================================

export function ArrowRightIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SunIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function MoonIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export function TwitterIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LinkedInIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ========================================
// DECORATIVE SVG ICONS
// ========================================

export function PlusIcon({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 372 381" fill="currentColor">
      <path d="M149.875 380.34V226.26H0V154.079H149.875V0H222.037V154.079H371.912V226.26H222.037V380.34H149.875Z" />
    </svg>
  );
}

export function RingIcon({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 266 264" fill="currentColor">
      <path d="M133.222 263.739C95.29 263.739 63.373 251.246 37.468 226.26C12.489 200.349 0 168.885 0 131.869C0 94.853 12.489 63.852 37.468 38.867C63.373 12.956 95.29 0 133.222 0C171.153 0 202.608 12.493 227.587 37.479C252.567 62.464 265.056 93.928 265.056 131.869C265.056 168.885 252.567 200.349 227.587 226.26C202.608 251.246 171.153 263.739 133.222 263.739ZM133.222 188.781C148.949 188.781 161.901 183.229 172.078 172.124C183.18 161.019 188.731 147.601 188.731 131.869C188.731 116.138 183.18 103.182 172.078 93.002C161.901 81.898 148.949 76.345 133.222 76.345C117.494 76.345 104.079 81.898 92.978 93.002C81.876 103.182 76.325 116.138 76.325 131.869C76.325 147.601 81.876 161.019 92.978 172.124C104.079 183.229 117.494 188.781 133.222 188.781Z" />
    </svg>
  );
}

export function GridIcon({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 653 671" fill="currentColor">
      <path d="M274.77 213.767V0H373.303V213.767H274.77ZM0 385.89V287.336H213.71V385.89H0ZM438.523 385.89V287.336H652.233V385.89H438.523ZM274.77 670.45V456.683H373.303V670.45H274.77Z" />
    </svg>
  );
}
