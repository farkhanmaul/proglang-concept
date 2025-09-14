"use client";

import { Code, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Code className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">ProgLang</h1>
            <p className="text-xs text-muted-foreground">Concepts</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#languages" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Languages
          </a>
          <a href="#concepts" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Concepts
          </a>
          <a href="#timeline" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Timeline
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container flex flex-col space-y-3 py-4">
            <a
              href="#home"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#languages"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Languages
            </a>
            <a
              href="#concepts"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Concepts
            </a>
            <a
              href="#timeline"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Timeline
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}