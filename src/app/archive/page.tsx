import Link from "next/link";

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none">
              <path d="M9.5 6H2.5M2.5 6L6 2.5M2.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to home
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className="text-label text-ultra-orange mb-4 block">Archive</span>
            <h1 className="text-h1 text-foreground mb-4">All articles</h1>
            <p className="text-body text-muted">
              Deep research on blockchain, AI, and the future of technology.
            </p>
          </div>

          {/* Placeholder content */}
          <div className="space-y-8">
            <div className="p-12 bg-surface border border-border rounded-lg text-center">
              <div className="max-w-md mx-auto">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-ultra-orange/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-ultra-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-h3 text-foreground mb-3">Archive coming soon</h3>
                <p className="text-body-sm text-muted mb-8">
                  We're building a comprehensive archive with filtering by category, 
                  date, and author. Check back soon.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-medium uppercase tracking-wide border border-ultra-orange text-ultra-orange hover:bg-ultra-orange hover:text-white transition-all duration-200"
                >
                  Back to latest
                  <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Future features preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="p-6 bg-background border border-border/50 rounded-lg">
                <h4 className="text-sm font-medium text-foreground mb-2">Filter by category</h4>
                <p className="text-caption text-muted">Research, Analysis, Deep Dive, Framework</p>
              </div>
              <div className="p-6 bg-background border border-border/50 rounded-lg">
                <h4 className="text-sm font-medium text-foreground mb-2">Search articles</h4>
                <p className="text-caption text-muted">Full-text search across all content</p>
              </div>
              <div className="p-6 bg-background border border-border/50 rounded-lg">
                <h4 className="text-sm font-medium text-foreground mb-2">Sort & filter</h4>
                <p className="text-caption text-muted">By date, author, or reading time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
