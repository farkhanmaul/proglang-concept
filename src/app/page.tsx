"use client";

import { Code, BookOpen, Users, Globe, Calendar, Cpu, Zap, Star, ArrowRight, Terminal, Database, Smartphone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  const popularLanguages = [
    { name: "JavaScript", year: "1995", creator: "Brendan Eich", paradigm: "Multi-paradigm", icon: "🟨", usage: "Web Development" },
    { name: "Python", year: "1991", creator: "Guido van Rossum", paradigm: "Multi-paradigm", icon: "🐍", usage: "Data Science, AI" },
    { name: "Java", year: "1995", creator: "James Gosling", paradigm: "Object-Oriented", icon: "☕", usage: "Enterprise, Android" },
    { name: "TypeScript", year: "2012", creator: "Microsoft", paradigm: "Object-Oriented", icon: "🔷", usage: "Web Development" },
    { name: "C++", year: "1985", creator: "Bjarne Stroustrup", paradigm: "Multi-paradigm", icon: "⚡", usage: "Systems, Games" },
    { name: "Rust", year: "2010", creator: "Mozilla", paradigm: "Systems", icon: "🦀", usage: "Systems, WebAssembly" }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-blue-600 rounded-2xl shadow-lg">
                  <Code className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Programming Language
                <span className="block text-blue-600">Concepts</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Discover the fascinating evolution of programming languages, from their historical origins 
                to modern innovations. Explore concepts, meet the creators, and understand the paradigms 
                that shape software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Languages
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  View Timeline
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">Programming Languages</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">70+</div>
                <p className="text-gray-600">Years of History</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Programming Paradigms</p>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">100+</div>
                <p className="text-gray-600">Influential Creators</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Languages */}
        <section id="languages" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Languages</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore the most influential programming languages that have shaped modern software development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularLanguages.map((lang, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{lang.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{lang.name}</h3>
                      <p className="text-gray-600">Since {lang.year}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Creator:</span>
                      <p className="text-gray-900">{lang.creator}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Paradigm:</span>
                      <p className="text-gray-900">{lang.paradigm}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Primary Use:</span>
                      <p className="text-gray-900">{lang.usage}</p>
                    </div>
                  </div>
                  <button className="mt-6 w-full bg-blue-50 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center justify-center">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="concepts" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Concepts</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the fundamental concepts that drive programming language design and evolution
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <BookOpen className="w-10 h-10 text-blue-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Language Design</h3>
                </div>
                <p className="text-gray-700">
                  Explore syntax design, grammar rules, and the principles behind creating readable and efficient programming languages.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
                <div className="flex items-center mb-4">
                  <Cpu className="w-10 h-10 text-green-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Paradigms</h3>
                </div>
                <p className="text-gray-700">
                  Understand object-oriented, functional, procedural, and other programming paradigms that shape how we write code.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
                <div className="flex items-center mb-4">
                  <Users className="w-10 h-10 text-purple-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Creators & History</h3>
                </div>
                <p className="text-gray-700">
                  Meet the visionaries behind programming languages and learn about the historical context of their innovations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl border border-yellow-200">
                <div className="flex items-center mb-4">
                  <Zap className="w-10 h-10 text-yellow-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Performance</h3>
                </div>
                <p className="text-gray-700">
                  Learn about compilation vs interpretation, memory management, and optimization techniques in different languages.
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl border border-red-200">
                <div className="flex items-center mb-4">
                  <Globe className="w-10 h-10 text-red-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Evolution</h3>
                </div>
                <p className="text-gray-700">
                  Trace the evolution of programming languages from early assembly to modern high-level languages.
                </p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl border border-indigo-200">
                <div className="flex items-center mb-4">
                  <Terminal className="w-10 h-10 text-indigo-600 mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Modern Trends</h3>
                </div>
                <p className="text-gray-700">
                  Discover emerging languages, WebAssembly, quantum computing languages, and the future of programming.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Explore?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start your journey through the fascinating world of programming languages. From FORTRAN to Rust, 
              discover the stories, concepts, and innovations that power our digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center">
                <Star className="w-5 h-5 mr-2" />
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                <Database className="w-5 h-5 mr-2" />
                Browse Database
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}