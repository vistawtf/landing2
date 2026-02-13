import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container pt-32 pb-20">
        <div className="max-w-2xl mx-auto">
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

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-label text-ultra-orange mb-4 block">About Vista</span>
              <h1 className="text-h1 text-foreground mb-6">
                Research for the future of the internet
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-body text-muted leading-relaxed">
                Vista is a research and execution team working across blockchain,
                AI, and emerging internet infrastructure. We treat information as a
                core strategic asset and turn technical change into clear signals,
                practical strategy, and production-ready products.
              </p>

              <div className="mt-12 pt-12 border-t border-border">
                <p className="text-body-sm text-muted">
                  We are currently expanding this section with deeper detail on our methodology,
                  collaborations, and active initiatives.
                </p>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="mt-16 p-8 bg-surface border border-border rounded-lg">
              <h3 className="text-h3 text-foreground mb-3">Stay updated</h3>
              <p className="text-body-sm text-muted mb-6">
                Get our analysis delivered to your inbox every week.
              </p>
              <Link
                href="/#newsletter"
                className="inline-flex items-center gap-1.5 px-6 py-3 text-xs font-medium uppercase tracking-wide border border-ultra-orange text-ultra-orange hover:bg-ultra-orange hover:text-white transition-all duration-200"
              >
                Subscribe
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
