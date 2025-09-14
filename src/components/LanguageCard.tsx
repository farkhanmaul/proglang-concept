import { ProgrammingLanguage } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Calendar, User, Code, ExternalLink } from 'lucide-react';
import { LANGUAGE_CATEGORIES, LANGUAGE_STATUS } from '@/lib/constants';
import Link from 'next/link';

interface LanguageCardProps {
  language: ProgrammingLanguage;
  priority?: boolean;
}

export function LanguageCard({ language, priority = false }: LanguageCardProps) {
  const category = LANGUAGE_CATEGORIES[language.category];
  const status = LANGUAGE_STATUS[language.status];

  return (
    <Card className="group h-full transition-all duration-200 hover:shadow-lg">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
              {language.name}
            </CardTitle>
            <CardDescription className="mt-1 text-sm">
              {language.description.substring(0, 120)}...
            </CardDescription>
          </div>
          {language.logo && (
            <div className="ml-3 text-3xl" aria-hidden="true">
              {language.logo}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          <Badge
            variant="outline"
            className={`${category.color} text-white border-0`}
          >
            {category.name}
          </Badge>
          <Badge
            variant="outline"
            className={status.color}
          >
            {status.name}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Created in {language.year}</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="w-4 h-4" />
            <span>
              {Array.isArray(language.creator)
                ? language.creator.join(', ')
                : language.creator
              }
            </span>
          </div>

          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <Code className="w-4 h-4 mt-0.5" />
            <div className="flex flex-wrap gap-1">
              {language.paradigms.slice(0, 2).map((paradigm) => (
                <span key={paradigm.id} className="text-xs">
                  {paradigm.name}
                </span>
              ))}
            </div>
          </div>

          {language.companies && language.companies.length > 0 && (
            <div className="mt-3">
              <p className="text-xs text-muted-foreground mb-1">Used by:</p>
              <div className="flex flex-wrap gap-1">
                {language.companies.slice(0, 3).map((company) => (
                  <Badge key={company} variant="secondary" className="text-xs">
                    {company}
                  </Badge>
                ))}
                {language.companies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{language.companies.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between pt-3">
            <Link
              href={`/languages/${language.id}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              aria-label={`Learn more about ${language.name}`}
            >
              Learn More
              <ExternalLink className="w-3 h-3" />
            </Link>

            {language.popularity && (
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-xs text-muted-foreground capitalize">
                  {language.popularity.trend}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}