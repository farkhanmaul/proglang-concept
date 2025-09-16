"use client";

import { useState, useMemo } from 'react';
import { programmingLanguages } from '@/data/languages';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Calendar, Code, Users, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

interface TimelineEvent {
  year: number;
  languages: typeof programmingLanguages;
}

export function Timeline() {
  const [expandedDecade, setExpandedDecade] = useState<number | null>(null);

  const timelineData = useMemo(() => {
    const sortedLanguages = [...programmingLanguages].sort((a, b) => a.year - b.year);
    const decades: { [key: number]: typeof programmingLanguages } = {};

    sortedLanguages.forEach(language => {
      const decade = Math.floor(language.year / 10) * 10;
      if (!decades[decade]) {
        decades[decade] = [];
      }
      decades[decade].push(language);
    });

    return Object.entries(decades)
      .map(([decade, languages]) => ({
        decade: parseInt(decade),
        languages
      }))
      .sort((a, b) => b.decade - a.decade);
  }, []);

  const toggleDecade = (decade: number) => {
    setExpandedDecade(expandedDecade === decade ? null : decade);
  };

  const getDecadeDescription = (decade: number) => {
    switch (decade) {
      case 1950:
        return "The dawn of programming languages with FORTRAN and other early pioneers";
      case 1960:
        return "Structured programming emerges with ALGOL, COBOL, and BASIC";
      case 1970:
        return "The foundation of modern programming with C, Pascal, and Smalltalk";
      case 1980:
        return "Object-oriented programming takes hold with C++ and emergence of scripting languages";
      case 1990:
        return "The web revolution brings JavaScript, Java, Python, and PHP";
      case 2000:
        return "Enterprise and modern languages like C#, Scala, and functional programming revival";
      case 2010:
        return "Systems programming renaissance with Go, Rust, and mobile development";
      case 2020:
        return "AI and quantum computing languages emerge";
      default:
        return "Innovation continues in programming language design";
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Programming Language Timeline</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore the evolution of programming languages through the decades
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

        {timelineData.map((period) => (
          <div key={period.decade} className="relative mb-8">
            {/* Decade header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="hidden md:flex w-16 h-16 bg-primary rounded-full items-center justify-center text-primary-foreground font-bold relative z-10">
                {period.decade}s
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {period.decade}s ({period.languages.length} languages)
                </h3>
                <p className="text-muted-foreground mb-4">
                  {getDecadeDescription(period.decade)}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => toggleDecade(period.decade)}
                  className="gap-2"
                >
                  {expandedDecade === period.decade ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Show Details
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Languages preview */}
            <div className="md:ml-20 mb-6">
              <div className="flex flex-wrap gap-2">
                {period.languages.slice(0, 6).map((language) => (
                  <Link key={language.id} href={`/language/${language.id}`}>
                    <Badge
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {language.name} ({language.year})
                    </Badge>
                  </Link>
                ))}
                {period.languages.length > 6 && (
                  <Badge variant="outline">
                    +{period.languages.length - 6} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Expanded details */}
            {expandedDecade === period.decade && (
              <div className="md:ml-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {period.languages.map((language) => (
                    <Card key={language.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <Link href={`/language/${language.id}`}>
                                <h4 className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                                  {language.name}
                                </h4>
                              </Link>
                              <p className="text-sm text-muted-foreground">
                                {language.description.substring(0, 100)}...
                              </p>
                            </div>
                          </div>

                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              <span>{language.year}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Users className="w-3 h-3" />
                              <span className="truncate">{language.creator}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Code className="w-3 h-3" />
                              <span className="truncate">
                                {language.paradigms[0]?.name || 'Various'}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline" className="text-xs">
                              {language.category.charAt(0).toUpperCase() + language.category.slice(1).replace('-', ' ')}
                            </Badge>
                            {language.popularity && (
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  language.popularity.trend === 'rising'
                                    ? 'text-green-600 border-green-200'
                                    : language.popularity.trend === 'declining'
                                    ? 'text-red-600 border-red-200'
                                    : 'text-yellow-600 border-yellow-200'
                                }`}
                              >
                                {language.popularity.trend}
                              </Badge>
                            )}
                          </div>

                          {language.companies && language.companies.length > 0 && (
                            <div>
                              <p className="text-xs text-muted-foreground mb-1">Used by:</p>
                              <p className="text-xs text-muted-foreground truncate">
                                {language.companies.slice(0, 3).join(', ')}
                                {language.companies.length > 3 && ` +${language.companies.length - 3} more`}
                              </p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}