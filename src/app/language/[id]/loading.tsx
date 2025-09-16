import { LoadingSpinner } from '@/components/LoadingSpinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function LanguageLoading() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-8 pb-16">
        <div className="container">
          <div className="animate-pulse space-y-8">
            {/* Breadcrumb skeleton */}
            <div className="h-4 bg-muted rounded w-48"></div>

            {/* Back button skeleton */}
            <div className="h-6 bg-muted rounded w-32"></div>

            {/* Header skeleton */}
            <div className="space-y-4">
              <div className="h-12 bg-muted rounded w-3/4"></div>
              <div className="h-6 bg-muted rounded w-full"></div>
              <div className="flex gap-3">
                <div className="h-10 bg-muted rounded w-32"></div>
                <div className="h-10 bg-muted rounded w-28"></div>
              </div>
            </div>

            {/* Content skeleton */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Cards skeleton */}
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border border-border rounded-lg p-6">
                    <div className="h-6 bg-muted rounded w-32 mb-4"></div>
                    <div className="space-y-3">
                      <div className="h-4 bg-muted rounded w-full"></div>
                      <div className="h-4 bg-muted rounded w-5/6"></div>
                      <div className="h-4 bg-muted rounded w-4/6"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sidebar skeleton */}
              <div className="space-y-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="border border-border rounded-lg p-4">
                    <div className="h-5 bg-muted rounded w-24 mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-muted rounded w-full"></div>
                      <div className="h-4 bg-muted rounded w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}