"use client";
import { Code, BookOpen, Users, Globe, Calendar, Cpu, Zap, Star, ArrowRight, Terminal } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageCard } from "@/components/LanguageCard";
import { SearchFilter, FilterState } from "@/components/SearchFilter";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { PWAInstall } from "@/components/PWAInstall";
import dynamic from 'next/dynamic';

const Timeline = dynamic(() => import("@/components/Timeline").then(mod => ({ default: mod.Timeline })), {
  loading: () => (
    <div className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-64 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-96 mx-auto"></div>
          </div>
        </div>
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-muted rounded-full"></div>
                <div className="flex-1">
                  <div className="h-6 bg-muted rounded w-48 mb-2"></div>
                  <div className="h-4 bg-muted rounded w-96"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: false
});
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { programmingLanguages } from "@/data/languages";
import { useState, useMemo } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    paradigms: [],
    yearRange: [1950, 2024],
    trend: []
  });

  const categories = useMemo(() => {
    const categorySet = new Set(programmingLanguages.map(lang => lang.category));
    return Array.from(categorySet);
  }, []);

  const paradigms = useMemo(() => {
    const paradigmSet = new Set(programmingLanguages.flatMap(lang =>
      lang.paradigms.flatMap(p => p.characteristics)
    ));
    return Array.from(paradigmSet);
  }, []);

  const filteredLanguages = useMemo(() => {
    return programmingLanguages.filter(language => {
      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const creatorText = Array.isArray(language.creator)
          ? language.creator.join(' ').toLowerCase()
          : language.creator.toLowerCase();

        if (!language.name.toLowerCase().includes(query) &&
            !language.description.toLowerCase().includes(query) &&
            !creatorText.includes(query)) {
          return false;
        }
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(language.category)) {
        return false;
      }

      // Paradigm filter
      if (filters.paradigms.length > 0) {
        const hasMatchingParadigm = language.paradigms.some(paradigm =>
          paradigm.characteristics.some(char => filters.paradigms.includes(char))
        );
        if (!hasMatchingParadigm) return false;
      }

      // Trend filter
      if (filters.trend.length > 0 && !filters.trend.includes(language.popularity.trend)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, filters]);

  const featuredLanguages = filteredLanguages.slice(0, 6);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="py-20 lg:py-32">
          <div className="container">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg">
                  <Code className="h-10 w-10 text-primary-foreground" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Programming Language
                <span className="block text-primary">Concepts</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover the fascinating evolution of programming languages, from their historical origins
                to modern innovations. Explore concepts, meet the creators, and understand the paradigms
                that shape software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Explore Languages
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Calendar className="h-5 w-5 mr-2" />
                  View Timeline
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">50+</div>
                <p className="text-sm text-muted-foreground">Programming Languages</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">70+</div>
                <p className="text-sm text-muted-foreground">Years of History</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">15+</div>
                <p className="text-sm text-muted-foreground">Programming Paradigms</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">100+</div>
                <p className="text-sm text-muted-foreground">Influential Creators</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Languages */}
        <section id="languages" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Programming Languages</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore programming languages that have shaped modern software development
              </p>
            </div>

            {/* Search and Filter */}
            <div className="mb-12">
              <SearchFilter
                onSearch={setSearchQuery}
                onFilter={setFilters}
                categories={categories}
                paradigms={paradigms}
              />
            </div>

            {/* Results */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {filteredLanguages.length} of {programmingLanguages.length} languages
                {searchQuery && <span> for &ldquo;{searchQuery}&rdquo;</span>}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLanguages.length > 0 ? (
                filteredLanguages.map((language) => (
                  <LanguageCard key={language.id} language={language} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-muted-foreground text-lg">No languages match your search criteria.</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery('');
                      setFilters({
                        categories: [],
                        paradigms: [],
                        yearRange: [1950, 2024],
                        trend: []
                      });
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <ErrorBoundary>
          <section id="timeline" className="py-20">
            <div className="container">
              <Timeline />
            </div>
          </section>
        </ErrorBoundary>

        {/* Core Concepts */}
        <section id="concepts" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Core Concepts</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the fundamental concepts that drive programming language design and evolution
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-lg">Language Design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Explore syntax design, grammar rules, and the principles behind creating readable and efficient programming languages.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Cpu className="h-8 w-8 text-green-600" />
                    <CardTitle className="text-lg">Paradigms</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Understand object-oriented, functional, procedural, and other programming paradigms that shape how we write code.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-purple-600" />
                    <CardTitle className="text-lg">Creators & History</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Meet the visionaries behind programming languages and learn about the historical context of their innovations.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-yellow-100/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-8 w-8 text-yellow-600" />
                    <CardTitle className="text-lg">Performance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Learn about compilation vs interpretation, memory management, and optimization techniques in different languages.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-gradient-to-br from-red-50 to-red-100/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-8 w-8 text-red-600" />
                    <CardTitle className="text-lg">Evolution</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Trace the evolution of programming languages from early assembly to modern high-level languages.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100/50">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Terminal className="h-8 w-8 text-indigo-600" />
                    <CardTitle className="text-lg">Modern Trends</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
                    Discover emerging languages, WebAssembly, quantum computing languages, and the future of programming.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Explore?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Start your journey through the fascinating world of programming languages. From FORTRAN to Rust,
              discover the stories, concepts, and innovations that power our digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="px-8">
                <Star className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
              <Button variant="outline" size="lg" className="px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <BookOpen className="h-5 w-5 mr-2" />
                Browse Database
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <PWAInstall />
    </>
  );
}