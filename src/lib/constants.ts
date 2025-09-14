import { LanguageCategory, LanguageStatus } from '@/types';

export const SITE_CONFIG = {
  name: 'Programming Language Concepts',
  description: 'Discover the fascinating evolution of programming languages, their origins, creators, and fundamental concepts that shape software development.',
  url: 'https://farkhanmaul.github.io/proglang-concept',
  ogImage: '/og-image.png',
  author: {
    name: 'Programming Language Concepts',
    email: 'contact@proglangconcepts.dev',
    twitter: '@proglangconcepts',
  },
} as const;

export const LANGUAGE_CATEGORIES: Record<LanguageCategory, { name: string; description: string; color: string }> = {
  web: {
    name: 'Web Development',
    description: 'Languages primarily used for web applications',
    color: 'bg-blue-500'
  },
  systems: {
    name: 'Systems Programming',
    description: 'Low-level languages for system software',
    color: 'bg-red-500'
  },
  mobile: {
    name: 'Mobile Development',
    description: 'Languages for mobile app development',
    color: 'bg-green-500'
  },
  'data-science': {
    name: 'Data Science',
    description: 'Languages for data analysis and machine learning',
    color: 'bg-purple-500'
  },
  enterprise: {
    name: 'Enterprise',
    description: 'Languages for large-scale business applications',
    color: 'bg-indigo-500'
  },
  functional: {
    name: 'Functional',
    description: 'Languages emphasizing functional programming',
    color: 'bg-yellow-500'
  },
  scripting: {
    name: 'Scripting',
    description: 'Languages for automation and scripting',
    color: 'bg-pink-500'
  },
  embedded: {
    name: 'Embedded',
    description: 'Languages for embedded systems',
    color: 'bg-gray-500'
  },
  academic: {
    name: 'Academic',
    description: 'Languages primarily used in research and education',
    color: 'bg-orange-500'
  }
} as const;

export const LANGUAGE_STATUS: Record<LanguageStatus, { name: string; description: string; color: string }> = {
  active: {
    name: 'Active',
    description: 'Actively developed and widely used',
    color: 'bg-green-100 text-green-800'
  },
  maintained: {
    name: 'Maintained',
    description: 'Maintained but not actively developed',
    color: 'bg-blue-100 text-blue-800'
  },
  legacy: {
    name: 'Legacy',
    description: 'Still used but considered outdated',
    color: 'bg-yellow-100 text-yellow-800'
  },
  experimental: {
    name: 'Experimental',
    description: 'In development or research phase',
    color: 'bg-purple-100 text-purple-800'
  },
  deprecated: {
    name: 'Deprecated',
    description: 'No longer recommended for use',
    color: 'bg-red-100 text-red-800'
  }
} as const;

export const PARADIGMS = {
  'object-oriented': {
    name: 'Object-Oriented',
    description: 'Programming based on objects and classes',
    characteristics: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction']
  },
  functional: {
    name: 'Functional',
    description: 'Programming based on mathematical functions',
    characteristics: ['Immutability', 'Pure Functions', 'Higher-Order Functions', 'Recursion']
  },
  procedural: {
    name: 'Procedural',
    description: 'Programming based on procedures or functions',
    characteristics: ['Sequential Execution', 'Modularity', 'Local Variables', 'Parameter Passing']
  },
  declarative: {
    name: 'Declarative',
    description: 'Programming that describes what should be computed',
    characteristics: ['High-Level Abstractions', 'Logic-Based', 'Pattern Matching', 'Constraint-Based']
  },
  'event-driven': {
    name: 'Event-Driven',
    description: 'Programming based on events and event handlers',
    characteristics: ['Event Loop', 'Callbacks', 'Asynchronous', 'Reactive']
  }
} as const;

export const SEO_KEYWORDS = [
  'programming languages',
  'software development',
  'coding',
  'programming concepts',
  'language history',
  'programming paradigms',
  'software engineering',
  'computer science',
  'development tools',
  'programming education'
] as const;