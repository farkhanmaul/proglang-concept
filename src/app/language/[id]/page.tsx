"use client";

import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Github, Users, Calendar, Code, Cpu, Zap, Globe, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import Link from 'next/link';
import { programmingLanguages } from '@/data/languages';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { LanguageBreadcrumb } from '@/components/Breadcrumb';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface LanguageDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}


export default async function LanguageDetailPage({ params }: LanguageDetailPageProps) {
  const { id } = await params;
  const language = programmingLanguages.find(lang => lang.id === id);

  if (!language) {
    notFound();
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'rising':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'declining':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-yellow-600" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'rising':
        return 'text-green-600';
      case 'declining':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-8 pb-16">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-6">
            <LanguageBreadcrumb languageName={language.name} />
          </div>

          {/* Back Button */}
          <Link href="/#languages" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to languages
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{language.name}</h1>
                <p className="text-xl text-muted-foreground max-w-3xl">{language.description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild>
                  <a href={language.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Official Website
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={language.documentation} target="_blank" rel="noopener noreferrer">
                    Documentation
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Created</p>
                      <p className="font-semibold">{language.year}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Creator</p>
                      <p className="font-semibold">{language.creator}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">License</p>
                      <p className="font-semibold">{language.license}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <Badge variant="secondary">
                        {language.category.charAt(0).toUpperCase() + language.category.slice(1).replace('-', ' ')}
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">File Extensions</p>
                    <div className="flex flex-wrap gap-2">
                      {language.fileExtensions.map(ext => (
                        <Badge key={ext} variant="outline">{ext}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Paradigms */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5" />
                    Programming Paradigms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {language.paradigms.map(paradigm => (
                      <div key={paradigm.id} className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">{paradigm.name}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{paradigm.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {paradigm.characteristics.map(char => (
                            <Badge key={char} variant="secondary" className="text-xs">
                              {char.charAt(0).toUpperCase() + char.slice(1).replace('-', ' ')}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Syntax Examples */}
              <Card>
                <CardHeader>
                  <CardTitle>Syntax Examples</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Hello World</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{language.syntax.helloWorld}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Variables</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{language.syntax.variables}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Functions</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{language.syntax.functions}</code>
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Classes</h4>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      <code>{language.syntax.classes}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Use Cases */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Use Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    {language.useCases.map((useCase, index) => (
                      <div key={index} className="border border-border rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">{useCase.domain}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{useCase.description}</p>
                        <div>
                          <p className="text-sm font-medium text-foreground mb-2">Examples:</p>
                          <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                            {useCase.examples.map((example, idx) => (
                              <li key={idx}>{example}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Popularity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Popularity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">TIOBE Index</span>
                      <Badge variant="outline">#{language.popularity.tiobe}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">GitHub</span>
                      <Badge variant="outline">#{language.popularity.github}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Stack Overflow</span>
                      <Badge variant="outline">#{language.popularity.stackOverflow}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">RedMonk</span>
                      <Badge variant="outline">#{language.popularity.redmonk}</Badge>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <span className="text-sm text-muted-foreground">Trend</span>
                      <div className={`flex items-center gap-1 ${getTrendColor(language.popularity.trend)}`}>
                        {getTrendIcon(language.popularity.trend)}
                        <span className="text-sm font-medium capitalize">{language.popularity.trend}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Features */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {language.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className={`mt-1 h-2 w-2 rounded-full ${feature.supported ? 'bg-green-500' : 'bg-gray-300'}`} />
                        <div>
                          <p className="text-sm font-medium text-foreground">{feature.name}</p>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Companies */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Used By
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {language.companies.map(company => (
                      <Badge key={company} variant="secondary">{company}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Influence */}
              <Card>
                <CardHeader>
                  <CardTitle>Language Relations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Influenced by</p>
                    <div className="flex flex-wrap gap-2">
                      {language.influencedBy.map(lang => (
                        <Badge key={lang} variant="outline" className="text-xs">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Influenced</p>
                    <div className="flex flex-wrap gap-2">
                      {language.influenced.map(lang => (
                        <Badge key={lang} variant="outline" className="text-xs">{lang}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href={language.repository} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                    <a href={language.documentation} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Documentation
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}