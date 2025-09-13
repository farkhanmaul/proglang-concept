import { Code, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ProgLang</h1>
              <p className="text-xs text-gray-600">Concepts</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </a>
            <a href="#languages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Languages
            </a>
            <a href="#concepts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Concepts
            </a>
            <a href="#timeline" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Timeline
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3 pt-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>
              <a href="#languages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Languages
              </a>
              <a href="#concepts" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Concepts
              </a>
              <a href="#timeline" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Timeline
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}