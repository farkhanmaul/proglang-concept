import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ProgLang</h3>
                <p className="text-sm text-gray-400">Concepts</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Comprehensive resource for programming language concepts, definitions, and history.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-semibold mb-4">Popular Languages</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">JavaScript</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Python</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Java</a></li>
              <li><a href="#" className="hover:text-white transition-colors">C++</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TypeScript</a></li>
            </ul>
          </div>

          {/* Concepts */}
          <div>
            <h4 className="font-semibold mb-4">Concepts</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Object-Oriented</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Functional</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Procedural</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Concurrent</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Memory Management</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contributors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Programming Language Concepts. Licensed under MIT.</p>
        </div>
      </div>
    </footer>
  );
}