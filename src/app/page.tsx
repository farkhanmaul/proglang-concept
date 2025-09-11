import { Code, BookOpen, Users, Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Code className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Programming Language Concepts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the fascinating world of programming languages, their origins, creators, and fundamental concepts
          </p>
        </header>

        {/* Features Grid */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Comprehensive Documentation</h3>
            </div>
            <p className="text-gray-600">
              In-depth information about programming languages, including syntax, paradigms, and use cases
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Language Creators</h3>
            </div>
            <p className="text-gray-600">
              Learn about the brilliant minds behind your favorite programming languages and their motivations
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <Globe className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Historical Context</h3>
            </div>
            <p className="text-gray-600">
              Understand the evolution of programming languages and how they shaped modern software development
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="text-center bg-white p-12 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're building an extensive library of programming language documentation. 
            Stay tuned for detailed guides on popular languages like JavaScript, Python, Java, C++, and many more.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
            <Code className="w-5 h-5 mr-2" />
            Explore Languages
          </div>
        </section>
      </div>
    </main>
  );
}