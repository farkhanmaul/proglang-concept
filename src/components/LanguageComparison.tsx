"use client";

import { useState } from 'react';
import { ProgrammingLanguage } from '@/types';
import { programmingLanguages } from '@/data/languages';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { X, Plus, ArrowUpDown, Calendar, User, Code, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

interface LanguageComparisonProps {
  initialLanguages?: ProgrammingLanguage[];
  maxLanguages?: number;
}

export function LanguageComparison({
  initialLanguages = [],
  maxLanguages = 3
}: LanguageComparisonProps) {
  const [selectedLanguages, setSelectedLanguages] = useState<ProgrammingLanguage[]>(initialLanguages);
  const [showSelector, setShowSelector] = useState(false);

  const addLanguage = (language: ProgrammingLanguage) => {
    if (selectedLanguages.length < maxLanguages && !selectedLanguages.find(l => l.id === language.id)) {
      setSelectedLanguages([...selectedLanguages, language]);
    }
    setShowSelector(false);
  };

  const removeLanguage = (languageId: string) => {
    setSelectedLanguages(selectedLanguages.filter(l => l.id !== languageId));
  };

  const availableLanguages = programmingLanguages.filter(
    lang => !selectedLanguages.find(selected => selected.id === lang.id)
  );

  if (selectedLanguages.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="space-y-4">
          <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
            <ArrowUpDown className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-semibold text-foreground">Compare Programming Languages</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Select up to {maxLanguages} programming languages to compare their features, popularity, and characteristics side by side.
          </p>
          <Button onClick={() => setShowSelector(true)} className="gap-2">
            <Plus className="h-4 w-4" />
            Add Language to Compare
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Language Comparison</h2>
          <p className="text-muted-foreground">
            Comparing {selectedLanguages.length} of {maxLanguages} languages
          </p>
        </div>
        {selectedLanguages.length < maxLanguages && (
          <Button
            variant="outline"
            onClick={() => setShowSelector(true)}
            className="gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Language
          </Button>
        )}
      </div>

      {/* Language Selector Modal */}
      {showSelector && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Select a Language to Compare</CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSelector(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="overflow-y-auto">
              <div className="grid gap-3">
                {availableLanguages.map((language) => (
                  <Button
                    key={language.id}
                    variant="outline"
                    className="justify-start h-auto p-4"
                    onClick={() => addLanguage(language)}
                  >
                    <div className="text-left">
                      <div className="font-medium">{language.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {language.year} • {language.creator}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Comparison Table */}
      <div className="space-y-6">
        {/* Language Names */}
        <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedLanguages.length}, 1fr)` }}>
          <div className="font-semibold text-foreground">Language</div>
          {selectedLanguages.map((language) => (
            <Card key={language.id} className="relative">
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 h-6 w-6 p-0"
                  onClick={() => removeLanguage(language.id)}
                >
                  <X className="h-3 w-3" />
                </Button>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{language.name}</h3>
                  <Link
                    href={`/language/${language.id}`}
                    className="text-xs text-primary hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Rows */}
        <div className="space-y-4">
          {/* Year Created */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedLanguages.length}, 1fr)` }}>
            <div className="flex items-center gap-2 font-medium text-foreground">
              <Calendar className="h-4 w-4" />
              Year Created
            </div>
            {selectedLanguages.map((language) => (
              <Card key={language.id}>
                <CardContent className="p-3 text-center">
                  <span className="font-semibold">{language.year}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Creator */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedLanguages.length}, 1fr)` }}>
            <div className="flex items-center gap-2 font-medium text-foreground">
              <User className="h-4 w-4" />
              Creator
            </div>
            {selectedLanguages.map((language) => (
              <Card key={language.id}>
                <CardContent className="p-3 text-center">
                  <span className="text-sm">{language.creator}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Category */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedLanguages.length}, 1fr)` }}>
            <div className="flex items-center gap-2 font-medium text-foreground">
              <Code className="h-4 w-4" />
              Category
            </div>
            {selectedLanguages.map((language) => (
              <Card key={language.id}>
                <CardContent className="p-3 text-center">
                  <Badge variant="secondary">
                    {language.category.charAt(0).toUpperCase() + language.category.slice(1).replace('-', ' ')}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Paradigms */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedLanguages.length}, 1fr)` }}>
            <div className="font-medium text-foreground">Paradigms</div>
            {selectedLanguages.map((language) => (
              <Card key={language.id}>
                <CardContent className="p-3">
                  <div className="flex flex-wrap gap-1 justify-center">
                    {language.paradigms.slice(0, 2).map((paradigm) => (
                      <Badge key={paradigm.id} variant="outline" className="text-xs">
                        {paradigm.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popularity Trend */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedLanguages.length}, 1fr)` }}>
            <div className="flex items-center gap-2 font-medium text-foreground">
              <TrendingUp className="h-4 w-4" />
              Trend
            </div>
            {selectedLanguages.map((language) => (
              <Card key={language.id}>
                <CardContent className="p-3 text-center">
                  <Badge
                    variant="outline"
                    className={
                      language.popularity.trend === 'rising'
                        ? 'text-green-600 border-green-200'
                        : language.popularity.trend === 'declining'
                        ? 'text-red-600 border-red-200'
                        : 'text-yellow-600 border-yellow-200'
                    }
                  >
                    {language.popularity.trend}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub Ranking */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedLanguages.length}, 1fr)` }}>
            <div className="font-medium text-foreground">GitHub Rank</div>
            {selectedLanguages.map((language) => (
              <Card key={language.id}>
                <CardContent className="p-3 text-center">
                  <span className="font-semibold">#{language.popularity.github}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Popular Companies */}
          <div className="grid gap-4" style={{ gridTemplateColumns: `200px repeat(${selectedLanguages.length}, 1fr)` }}>
            <div className="flex items-center gap-2 font-medium text-foreground">
              <Users className="h-4 w-4" />
              Used By
            </div>
            {selectedLanguages.map((language) => (
              <Card key={language.id}>
                <CardContent className="p-3">
                  <div className="text-center space-y-1">
                    {language.companies.slice(0, 3).map((company) => (
                      <div key={company} className="text-xs text-muted-foreground">
                        {company}
                      </div>
                    ))}
                    {language.companies.length > 3 && (
                      <div className="text-xs text-muted-foreground">
                        +{language.companies.length - 3} more
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}