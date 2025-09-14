import { ProgrammingLanguage } from '@/types';

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    year: 1995,
    creator: 'Brendan Eich',
    paradigms: [
      {
        id: 'multiparadigm',
        name: 'Multi-paradigm',
        description: 'Supports multiple programming paradigms',
        characteristics: ['functional', 'object-oriented', 'procedural', 'event-driven']
      }
    ],
    description: 'A high-level, interpreted programming language that conforms to the ECMAScript specification. Originally created to make web pages alive, it is now used for web development, mobile apps, desktop applications, and server-side development.',
    website: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
    repository: 'https://github.com/tc39/ecma262',
    useCases: [
      {
        domain: 'Web Development',
        description: 'Frontend and backend web applications',
        examples: ['React applications', 'Node.js servers', 'Progressive Web Apps']
      },
      {
        domain: 'Mobile Development',
        description: 'Cross-platform mobile applications',
        examples: ['React Native apps', 'Ionic applications', 'PhoneGap apps']
      }
    ],
    companies: ['Google', 'Facebook', 'Netflix', 'Uber', 'Airbnb', 'Microsoft'],
    fileExtensions: ['.js', '.mjs', '.jsx'],
    influenced: ['TypeScript', 'CoffeeScript', 'Dart'],
    influencedBy: ['C', 'Java', 'Scheme', 'Self'],
    popularity: {
      tiobe: 7,
      github: 1,
      stackOverflow: 1,
      redmonk: 1,
      trend: 'stable'
    },
    features: [
      { name: 'Dynamic Typing', description: 'Variables can hold values of any type', supported: true },
      { name: 'First-class Functions', description: 'Functions are treated as values', supported: true },
      { name: 'Closures', description: 'Inner functions have access to outer function scope', supported: true },
      { name: 'Prototypal Inheritance', description: 'Objects can inherit directly from other objects', supported: true }
    ],
    syntax: {
      helloWorld: 'console.log("Hello, World!");',
      variables: 'const message = "Hello"; let count = 42; var isActive = true;',
      functions: 'function greet(name) { return `Hello, ${name}!`; }',
      classes: 'class Person { constructor(name) { this.name = name; } }'
    },
    category: 'web',
    status: 'active',
    license: 'Open Source'
  },
  {
    id: 'python',
    name: 'Python',
    year: 1991,
    creator: 'Guido van Rossum',
    paradigms: [
      {
        id: 'multiparadigm',
        name: 'Multi-paradigm',
        description: 'Supports multiple programming paradigms',
        characteristics: ['object-oriented', 'procedural', 'functional']
      }
    ],
    description: 'A high-level, interpreted programming language with dynamic semantics. Its high-level built-in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development.',
    website: 'https://www.python.org/',
    documentation: 'https://docs.python.org/3/',
    repository: 'https://github.com/python/cpython',
    useCases: [
      {
        domain: 'Data Science',
        description: 'Data analysis, machine learning, and scientific computing',
        examples: ['NumPy', 'Pandas', 'TensorFlow', 'PyTorch']
      },
      {
        domain: 'Web Development',
        description: 'Backend web applications and APIs',
        examples: ['Django', 'Flask', 'FastAPI']
      },
      {
        domain: 'Automation',
        description: 'Scripting and automation tasks',
        examples: ['Web scraping', 'System administration', 'CI/CD scripts']
      }
    ],
    companies: ['Google', 'Instagram', 'Spotify', 'Dropbox', 'Reddit', 'YouTube'],
    fileExtensions: ['.py', '.pyw', '.pyi'],
    influenced: ['Swift', 'Go', 'CoffeeScript'],
    influencedBy: ['ABC', 'Modula-3', 'C', 'Perl'],
    popularity: {
      tiobe: 1,
      github: 2,
      stackOverflow: 3,
      redmonk: 2,
      trend: 'rising'
    },
    features: [
      { name: 'Dynamic Typing', description: 'Variables can hold values of any type', supported: true },
      { name: 'Garbage Collection', description: 'Automatic memory management', supported: true },
      { name: 'Interpreted', description: 'Code is executed line by line', supported: true },
      { name: 'Extensive Standard Library', description: 'Rich collection of built-in modules', supported: true }
    ],
    syntax: {
      helloWorld: 'print("Hello, World!")',
      variables: 'message = "Hello"\ncount = 42\nis_active = True',
      functions: 'def greet(name):\n    return f"Hello, {name}!"',
      classes: 'class Person:\n    def __init__(self, name):\n        self.name = name'
    },
    category: 'data-science',
    status: 'active',
    license: 'Python Software Foundation License'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    year: 2012,
    creator: 'Microsoft (Anders Hejlsberg)',
    paradigms: [
      {
        id: 'object-oriented',
        name: 'Object-Oriented',
        description: 'Based on objects and classes',
        characteristics: ['classes', 'inheritance', 'polymorphism', 'encapsulation']
      }
    ],
    description: 'A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. TypeScript adds static type definitions to JavaScript.',
    website: 'https://www.typescriptlang.org/',
    documentation: 'https://www.typescriptlang.org/docs/',
    repository: 'https://github.com/microsoft/TypeScript',
    useCases: [
      {
        domain: 'Web Development',
        description: 'Large-scale JavaScript applications',
        examples: ['Angular applications', 'React with TypeScript', 'Node.js backends']
      },
      {
        domain: 'Enterprise Applications',
        description: 'Mission-critical business applications',
        examples: ['E-commerce platforms', 'Banking systems', 'CRM systems']
      }
    ],
    companies: ['Microsoft', 'Slack', 'Asana', 'Lyft', 'Airbnb', 'Shopify'],
    fileExtensions: ['.ts', '.tsx', '.d.ts'],
    influenced: ['Flow', 'ReScript'],
    influencedBy: ['JavaScript', 'C#', 'Java'],
    popularity: {
      tiobe: 42,
      github: 4,
      stackOverflow: 5,
      redmonk: 8,
      trend: 'rising'
    },
    features: [
      { name: 'Static Typing', description: 'Type checking at compile time', supported: true },
      { name: 'Type Inference', description: 'Automatic type detection', supported: true },
      { name: 'Interfaces', description: 'Contract-based programming', supported: true },
      { name: 'Generics', description: 'Parameterized types', supported: true }
    ],
    syntax: {
      helloWorld: 'console.log("Hello, World!");',
      variables: 'const message: string = "Hello";\nlet count: number = 42;\nconst isActive: boolean = true;',
      functions: 'function greet(name: string): string {\n  return `Hello, ${name}!`;\n}',
      classes: 'class Person {\n  constructor(public name: string) {}\n}'
    },
    category: 'web',
    status: 'active',
    license: 'Apache License 2.0'
  }
];