import Link from 'next/link';
import { ArrowLeft, Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-2xl">
          {/* 404 Visual */}
          <div className="space-y-4">
            <div className="text-8xl font-bold text-primary/20">404</div>
            <h1 className="text-4xl font-bold text-foreground">Page Not Found</h1>
            <p className="text-xl text-muted-foreground">
              The programming language or page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Suggestions */}
          <Card className="text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                What you can do:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Check the URL for any typos or errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Browse our collection of programming languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Use the search functionality to find specific languages</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Explore the timeline to discover languages by era</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/" className="gap-2">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#languages" className="gap-2">
                <Search className="h-4 w-4" />
                Browse Languages
              </Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/#timeline" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                View Timeline
              </Link>
            </Button>
          </div>

          {/* Popular Languages Quick Links */}
          <div className="pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Popular Programming Languages:
            </h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/language/javascript">
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                  JavaScript
                </Button>
              </Link>
              <Link href="/language/python">
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                  Python
                </Button>
              </Link>
              <Link href="/language/typescript">
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                  TypeScript
                </Button>
              </Link>
              <Link href="/language/java">
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                  Java
                </Button>
              </Link>
              <Link href="/language/rust">
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                  Rust
                </Button>
              </Link>
              <Link href="/language/go">
                <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground">
                  Go
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}