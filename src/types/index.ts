export interface ProgrammingLanguage {
  id: string;
  name: string;
  year: number;
  creator: string | string[];
  paradigms: ProgrammingParadigm[];
  description: string;
  website?: string;
  documentation?: string;
  repository?: string;
  useCases: UseCase[];
  companies: string[];
  fileExtensions: string[];
  influenced: string[];
  influencedBy: string[];
  logo?: string;
  popularity: PopularityMetrics;
  features: LanguageFeature[];
  syntax: SyntaxExample;
  category: LanguageCategory;
  status: LanguageStatus;
  license?: string;
}

export interface ProgrammingParadigm {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
}

export interface UseCase {
  domain: string;
  description: string;
  examples: string[];
}

export interface PopularityMetrics {
  tiobe?: number;
  github?: number;
  stackOverflow?: number;
  redmonk?: number;
  trend: 'rising' | 'stable' | 'declining';
}

export interface LanguageFeature {
  name: string;
  description: string;
  supported: boolean;
}

export interface SyntaxExample {
  helloWorld: string;
  variables: string;
  functions: string;
  classes?: string;
}

export type LanguageCategory =
  | 'web'
  | 'systems'
  | 'mobile'
  | 'data-science'
  | 'enterprise'
  | 'functional'
  | 'scripting'
  | 'embedded'
  | 'academic';

export type LanguageStatus =
  | 'active'
  | 'maintained'
  | 'legacy'
  | 'experimental'
  | 'deprecated';

export interface LanguageTimeline {
  year: number;
  event: string;
  description: string;
  languages: string[];
}

export interface Creator {
  id: string;
  name: string;
  bio: string;
  languages: string[];
  awards?: string[];
  website?: string;
  company?: string;
}

export interface SearchFilters {
  category?: LanguageCategory;
  paradigm?: string;
  year?: {
    min: number;
    max: number;
  };
  status?: LanguageStatus;
  popularity?: 'high' | 'medium' | 'low';
}