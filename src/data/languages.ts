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
  },
  {
    id: 'java',
    name: 'Java',
    year: 1995,
    creator: 'James Gosling',
    paradigms: [
      {
        id: 'object-oriented',
        name: 'Object-Oriented',
        description: 'Based on objects and classes',
        characteristics: ['classes', 'inheritance', 'polymorphism', 'encapsulation']
      }
    ],
    description: 'A high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible. Write once, run anywhere (WORA).',
    website: 'https://www.java.com/',
    documentation: 'https://docs.oracle.com/en/java/',
    repository: 'https://github.com/openjdk/jdk',
    useCases: [
      {
        domain: 'Enterprise Applications',
        description: 'Large-scale enterprise software systems',
        examples: ['Spring Boot applications', 'Banking systems', 'E-commerce platforms']
      },
      {
        domain: 'Mobile Development',
        description: 'Android mobile applications',
        examples: ['Native Android apps', 'Mobile games', 'Business applications']
      }
    ],
    companies: ['Oracle', 'Google', 'Amazon', 'LinkedIn', 'Netflix', 'Spotify'],
    fileExtensions: ['.java', '.class', '.jar'],
    influenced: ['C#', 'JavaScript', 'Python'],
    influencedBy: ['C++', 'Smalltalk', 'Objective-C'],
    popularity: {
      tiobe: 4,
      github: 3,
      stackOverflow: 2,
      redmonk: 3,
      trend: 'stable'
    },
    features: [
      { name: 'Platform Independent', description: 'Write once, run anywhere', supported: true },
      { name: 'Object-Oriented', description: 'Based on objects and classes', supported: true },
      { name: 'Garbage Collection', description: 'Automatic memory management', supported: true },
      { name: 'Strong Type System', description: 'Static typing with compile-time checking', supported: true }
    ],
    syntax: {
      helloWorld: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
      variables: 'String message = "Hello";\nint count = 42;\nboolean isActive = true;',
      functions: 'public static String greet(String name) {\n  return "Hello, " + name + "!";\n}',
      classes: 'public class Person {\n  private String name;\n  public Person(String name) {\n    this.name = name;\n  }\n}'
    },
    category: 'enterprise',
    status: 'active',
    license: 'GPL v2 with Classpath Exception'
  },
  {
    id: 'csharp',
    name: 'C#',
    year: 2000,
    creator: 'Microsoft (Anders Hejlsberg)',
    paradigms: [
      {
        id: 'multiparadigm',
        name: 'Multi-paradigm',
        description: 'Supports multiple programming paradigms',
        characteristics: ['object-oriented', 'functional', 'generic', 'component-oriented']
      }
    ],
    description: 'A general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.',
    website: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    documentation: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    repository: 'https://github.com/dotnet/roslyn',
    useCases: [
      {
        domain: 'Desktop Applications',
        description: 'Windows desktop applications and cross-platform apps',
        examples: ['WPF applications', '.NET MAUI apps', 'WinForms applications']
      },
      {
        domain: 'Web Development',
        description: 'Web applications and APIs',
        examples: ['ASP.NET Core', 'Blazor applications', 'Web APIs']
      },
      {
        domain: 'Game Development',
        description: 'Game development with Unity',
        examples: ['Unity games', 'Mobile games', '3D applications']
      }
    ],
    companies: ['Microsoft', 'Unity Technologies', 'Stack Overflow', 'GoDaddy', 'Delivery Hero'],
    fileExtensions: ['.cs', '.csx'],
    influenced: ['F#', 'Nemerle', 'TypeScript'],
    influencedBy: ['C++', 'Java', 'Delphi', 'Visual Basic'],
    popularity: {
      tiobe: 5,
      github: 7,
      stackOverflow: 6,
      redmonk: 5,
      trend: 'stable'
    },
    features: [
      { name: 'Strong Typing', description: 'Static typing with compile-time checking', supported: true },
      { name: 'Garbage Collection', description: 'Automatic memory management', supported: true },
      { name: 'LINQ', description: 'Language Integrated Query', supported: true },
      { name: 'Async/Await', description: 'Asynchronous programming support', supported: true }
    ],
    syntax: {
      helloWorld: 'using System;\n\nclass Program\n{\n    static void Main()\n    {\n        Console.WriteLine("Hello, World!");\n    }\n}',
      variables: 'string message = "Hello";\nint count = 42;\nbool isActive = true;',
      functions: 'public static string Greet(string name)\n{\n    return $"Hello, {name}!";\n}',
      classes: 'public class Person\n{\n    public string Name { get; set; }\n    public Person(string name)\n    {\n        Name = name;\n    }\n}'
    },
    category: 'enterprise',
    status: 'active',
    license: 'MIT License'
  },
  {
    id: 'cpp',
    name: 'C++',
    year: 1985,
    creator: 'Bjarne Stroustrup',
    paradigms: [
      {
        id: 'multiparadigm',
        name: 'Multi-paradigm',
        description: 'Supports multiple programming paradigms',
        characteristics: ['procedural', 'object-oriented', 'generic', 'functional']
      }
    ],
    description: 'A general-purpose programming language created as an extension of the C programming language. C++ has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.',
    website: 'https://isocpp.org/',
    documentation: 'https://en.cppreference.com/',
    repository: 'https://github.com/cplusplus',
    useCases: [
      {
        domain: 'System Programming',
        description: 'Operating systems and system-level software',
        examples: ['Operating systems', 'Device drivers', 'Embedded systems']
      },
      {
        domain: 'Game Development',
        description: 'High-performance games and engines',
        examples: ['Game engines', 'AAA games', 'Real-time graphics']
      },
      {
        domain: 'Performance-Critical Applications',
        description: 'Applications requiring maximum performance',
        examples: ['Database systems', 'Web servers', 'Compilers']
      }
    ],
    companies: ['Google', 'Facebook', 'Microsoft', 'Adobe', 'Apple', 'Tesla'],
    fileExtensions: ['.cpp', '.cxx', '.cc', '.c++', '.hpp', '.h'],
    influenced: ['C#', 'Java', 'JavaScript', 'PHP'],
    influencedBy: ['C', 'Simula', 'Ada', 'ALGOL 68'],
    popularity: {
      tiobe: 3,
      github: 6,
      stackOverflow: 4,
      redmonk: 6,
      trend: 'stable'
    },
    features: [
      { name: 'Low-Level Control', description: 'Direct memory and hardware access', supported: true },
      { name: 'Object-Oriented', description: 'Support for classes and objects', supported: true },
      { name: 'Templates', description: 'Generic programming support', supported: true },
      { name: 'Manual Memory Management', description: 'Explicit memory allocation and deallocation', supported: true }
    ],
    syntax: {
      helloWorld: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    return 0;\n}',
      variables: 'std::string message = "Hello";\nint count = 42;\nbool isActive = true;',
      functions: 'std::string greet(const std::string& name) {\n    return "Hello, " + name + "!";\n}',
      classes: 'class Person {\nprivate:\n    std::string name;\npublic:\n    Person(const std::string& n) : name(n) {}\n    std::string getName() const { return name; }\n};'
    },
    category: 'system',
    status: 'active',
    license: 'ISO Standard'
  },
  {
    id: 'go',
    name: 'Go',
    year: 2009,
    creator: 'Robert Griesemer, Rob Pike, Ken Thompson',
    paradigms: [
      {
        id: 'procedural',
        name: 'Procedural',
        description: 'Based on procedure calls and functions',
        characteristics: ['functions', 'procedures', 'modular']
      }
    ],
    description: 'An open source programming language that makes it easy to build simple, reliable, and efficient software. Designed at Google to improve programming productivity in an era of multicore, networked machines.',
    website: 'https://golang.org/',
    documentation: 'https://golang.org/doc/',
    repository: 'https://github.com/golang/go',
    useCases: [
      {
        domain: 'Backend Development',
        description: 'Server-side applications and microservices',
        examples: ['REST APIs', 'Microservices', 'gRPC services']
      },
      {
        domain: 'Cloud Infrastructure',
        description: 'Cloud-native and container technologies',
        examples: ['Docker', 'Kubernetes', 'Terraform']
      },
      {
        domain: 'DevOps Tools',
        description: 'Command-line tools and utilities',
        examples: ['CLI tools', 'Monitoring systems', 'Build tools']
      }
    ],
    companies: ['Google', 'Uber', 'Dropbox', 'SoundCloud', 'Docker', 'Kubernetes'],
    fileExtensions: ['.go'],
    influenced: ['Zig', 'Crystal'],
    influencedBy: ['C', 'Pascal', 'Modula-2', 'Oberon'],
    popularity: {
      tiobe: 8,
      github: 8,
      stackOverflow: 9,
      redmonk: 12,
      trend: 'rising'
    },
    features: [
      { name: 'Garbage Collection', description: 'Automatic memory management', supported: true },
      { name: 'Concurrency', description: 'Built-in goroutines and channels', supported: true },
      { name: 'Static Typing', description: 'Compile-time type checking', supported: true },
      { name: 'Fast Compilation', description: 'Quick build times', supported: true }
    ],
    syntax: {
      helloWorld: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}',
      variables: 'message := "Hello"\ncount := 42\nisActive := true',
      functions: 'func greet(name string) string {\n    return fmt.Sprintf("Hello, %s!", name)\n}',
      classes: 'type Person struct {\n    Name string\n}\n\nfunc (p Person) Greet() string {\n    return "Hello, " + p.Name\n}'
    },
    category: 'backend',
    status: 'active',
    license: 'BSD 3-Clause'
  },
  {
    id: 'rust',
    name: 'Rust',
    year: 2010,
    creator: 'Graydon Hoare',
    paradigms: [
      {
        id: 'multiparadigm',
        name: 'Multi-paradigm',
        description: 'Supports multiple programming paradigms',
        characteristics: ['functional', 'imperative', 'generic']
      }
    ],
    description: 'A language empowering everyone to build reliable and efficient software. Rust prevents segfaults, and guarantees thread safety — all at compile time.',
    website: 'https://www.rust-lang.org/',
    documentation: 'https://doc.rust-lang.org/',
    repository: 'https://github.com/rust-lang/rust',
    useCases: [
      {
        domain: 'Systems Programming',
        description: 'Low-level systems and embedded programming',
        examples: ['Operating systems', 'WebAssembly', 'Blockchain']
      },
      {
        domain: 'Web Backend',
        description: 'High-performance web services',
        examples: ['Web servers', 'APIs', 'Microservices']
      },
      {
        domain: 'Command Line Tools',
        description: 'Fast and reliable CLI applications',
        examples: ['ripgrep', 'bat', 'fd']
      }
    ],
    companies: ['Mozilla', 'Dropbox', 'Coursera', 'Figma', 'npm', 'Discord'],
    fileExtensions: ['.rs', '.rlib'],
    influenced: ['Swift', 'Zig'],
    influencedBy: ['C++', 'Haskell', 'OCaml', 'Ruby'],
    popularity: {
      tiobe: 20,
      github: 10,
      stackOverflow: 7,
      redmonk: 18,
      trend: 'rising'
    },
    features: [
      { name: 'Memory Safety', description: 'Prevents memory leaks and segfaults', supported: true },
      { name: 'Zero-Cost Abstractions', description: 'High-level features without runtime overhead', supported: true },
      { name: 'Ownership System', description: 'Unique approach to memory management', supported: true },
      { name: 'Pattern Matching', description: 'Powerful control flow construct', supported: true }
    ],
    syntax: {
      helloWorld: 'fn main() {\n    println!("Hello, World!");\n}',
      variables: 'let message = "Hello";\nlet count = 42;\nlet is_active = true;',
      functions: 'fn greet(name: &str) -> String {\n    format!("Hello, {}!", name)\n}',
      classes: 'struct Person {\n    name: String,\n}\n\nimpl Person {\n    fn new(name: String) -> Self {\n        Person { name }\n    }\n}'
    },
    category: 'system',
    status: 'active',
    license: 'MIT License'
  },
  {
    id: 'swift',
    name: 'Swift',
    year: 2014,
    creator: 'Apple Inc.',
    paradigms: [
      {
        id: 'multiparadigm',
        name: 'Multi-paradigm',
        description: 'Supports multiple programming paradigms',
        characteristics: ['object-oriented', 'functional', 'imperative', 'block-structured']
      }
    ],
    description: 'A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive.',
    website: 'https://swift.org/',
    documentation: 'https://docs.swift.org/swift-book/',
    repository: 'https://github.com/apple/swift',
    useCases: [
      {
        domain: 'iOS Development',
        description: 'Native iOS and macOS applications',
        examples: ['iPhone apps', 'iPad apps', 'macOS applications']
      },
      {
        domain: 'Server-Side Development',
        description: 'Backend services and APIs',
        examples: ['Vapor applications', 'Perfect servers', 'Kitura services']
      }
    ],
    companies: ['Apple', 'IBM', 'Uber', 'LinkedIn', 'Slack', 'Lyft'],
    fileExtensions: ['.swift'],
    influenced: ['Kotlin'],
    influencedBy: ['Objective-C', 'Rust', 'Haskell', 'Ruby', 'Python', 'C#'],
    popularity: {
      tiobe: 9,
      github: 11,
      stackOverflow: 11,
      redmonk: 11,
      trend: 'stable'
    },
    features: [
      { name: 'Type Safety', description: 'Strong type system with compile-time checking', supported: true },
      { name: 'Optionals', description: 'Safe handling of nil values', supported: true },
      { name: 'Automatic Reference Counting', description: 'Memory management without garbage collection', supported: true },
      { name: 'Protocol-Oriented Programming', description: 'Composition over inheritance', supported: true }
    ],
    syntax: {
      helloWorld: 'print("Hello, World!")',
      variables: 'let message = "Hello"\nvar count = 42\nlet isActive = true',
      functions: 'func greet(name: String) -> String {\n    return "Hello, \\(name)!"\n}',
      classes: 'class Person {\n    let name: String\n    init(name: String) {\n        self.name = name\n    }\n}'
    },
    category: 'mobile',
    status: 'active',
    license: 'Apache License 2.0'
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    year: 2011,
    creator: 'JetBrains',
    paradigms: [
      {
        id: 'multiparadigm',
        name: 'Multi-paradigm',
        description: 'Supports multiple programming paradigms',
        characteristics: ['object-oriented', 'functional', 'imperative', 'generic']
      }
    ],
    description: 'A cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin\'s standard library depends on the Java Class Library.',
    website: 'https://kotlinlang.org/',
    documentation: 'https://kotlinlang.org/docs/',
    repository: 'https://github.com/JetBrains/kotlin',
    useCases: [
      {
        domain: 'Android Development',
        description: 'Native Android applications',
        examples: ['Android apps', 'Android libraries', 'Cross-platform mobile']
      },
      {
        domain: 'Backend Development',
        description: 'Server-side applications',
        examples: ['Spring Boot', 'Ktor applications', 'Microservices']
      },
      {
        domain: 'Multiplatform Development',
        description: 'Shared code across platforms',
        examples: ['Kotlin Multiplatform', 'Native applications', 'Web applications']
      }
    ],
    companies: ['Google', 'JetBrains', 'Pinterest', 'Uber', 'Netflix', 'Trello'],
    fileExtensions: ['.kt', '.kts'],
    influenced: ['Ceylon'],
    influencedBy: ['Java', 'Scala', 'Groovy', 'C#', 'JavaScript'],
    popularity: {
      tiobe: 25,
      github: 15,
      stackOverflow: 15,
      redmonk: 15,
      trend: 'rising'
    },
    features: [
      { name: 'Null Safety', description: 'Built-in null safety features', supported: true },
      { name: 'Interoperability', description: '100% interoperable with Java', supported: true },
      { name: 'Concise Syntax', description: 'Reduces boilerplate code', supported: true },
      { name: 'Coroutines', description: 'Built-in asynchronous programming', supported: true }
    ],
    syntax: {
      helloWorld: 'fun main() {\n    println("Hello, World!")\n}',
      variables: 'val message = "Hello"\nvar count = 42\nval isActive = true',
      functions: 'fun greet(name: String): String {\n    return "Hello, $name!"\n}',
      classes: 'class Person(val name: String) {\n    fun introduce() = "Hi, I&apos;m $name"\n}'
    },
    category: 'mobile',
    status: 'active',
    license: 'Apache License 2.0'
  },
  {
    id: 'php',
    name: 'PHP',
    year: 1995,
    creator: 'Rasmus Lerdorf',
    paradigms: [
      {
        id: 'multiparadigm',
        name: 'Multi-paradigm',
        description: 'Supports multiple programming paradigms',
        characteristics: ['imperative', 'functional', 'object-oriented', 'procedural']
      }
    ],
    description: 'A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.',
    website: 'https://www.php.net/',
    documentation: 'https://www.php.net/docs.php',
    repository: 'https://github.com/php/php-src',
    useCases: [
      {
        domain: 'Web Development',
        description: 'Server-side web applications',
        examples: ['WordPress', 'Laravel applications', 'Symfony projects']
      },
      {
        domain: 'Content Management',
        description: 'Content management systems',
        examples: ['Drupal', 'Joomla', 'Custom CMS']
      },
      {
        domain: 'E-commerce',
        description: 'Online shopping platforms',
        examples: ['Magento', 'WooCommerce', 'Custom e-commerce']
      }
    ],
    companies: ['Facebook', 'Wikipedia', 'Slack', 'Etsy', 'Mailchimp', 'Tumblr'],
    fileExtensions: ['.php', '.phtml', '.php3', '.php4', '.php5', '.phps'],
    influenced: ['Hack', 'JavaScript'],
    influencedBy: ['Perl', 'C', 'C++', 'Java', 'Tcl'],
    popularity: {
      tiobe: 6,
      github: 9,
      stackOverflow: 8,
      redmonk: 9,
      trend: 'declining'
    },
    features: [
      { name: 'Server-Side Scripting', description: 'Designed for web development', supported: true },
      { name: 'Cross-Platform', description: 'Runs on various operating systems', supported: true },
      { name: 'Large Ecosystem', description: 'Extensive libraries and frameworks', supported: true },
      { name: 'Easy Deployment', description: 'Simple setup and deployment', supported: true }
    ],
    syntax: {
      helloWorld: '<?php\necho "Hello, World!";\n?>',
      variables: '$message = "Hello";\n$count = 42;\n$isActive = true;',
      functions: 'function greet($name) {\n    return "Hello, " . $name . "!";\n}',
      classes: 'class Person {\n    private $name;\n    \n    public function __construct($name) {\n        $this->name = $name;\n    }\n}'
    },
    category: 'web',
    status: 'active',
    license: 'PHP License'
  }
];