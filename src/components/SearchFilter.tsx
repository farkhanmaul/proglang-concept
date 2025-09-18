"use client";

import { useState, useCallback, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProgrammingLanguage } from '@/types';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: FilterState) => void;
  categories: string[];
  paradigms: string[];
}

export interface FilterState {
  categories: string[];
  paradigms: string[];
  yearRange: [number, number];
  trend: string[];
}

interface SearchSuggestion {
  type: 'language';
  text: string;
  subtitle: string;
}

export function SearchFilter({ onSearch, onFilter, categories, paradigms }: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    paradigms: [],
    yearRange: [1950, 2024],
    trend: []
  });

  // Import languages for autocomplete
  const { programmingLanguages } = useMemo(() => {
    // Dynamic import to avoid circular dependencies
    return typeof window !== 'undefined'
      ? require('@/data/languages')
      : { programmingLanguages: [] };
  }, []);

  // Generate autocomplete suggestions
  const suggestions = useMemo((): SearchSuggestion[] => {
    if (!searchQuery || searchQuery.length < 2) return [];

    const query = searchQuery.toLowerCase();
    return (programmingLanguages as ProgrammingLanguage[])
      .filter((lang: ProgrammingLanguage) => {
        const creatorText = Array.isArray(lang.creator)
          ? lang.creator.join(' ').toLowerCase()
          : lang.creator.toLowerCase();

        return lang.name.toLowerCase().includes(query) ||
               creatorText.includes(query) ||
               lang.description.toLowerCase().includes(query);
      })
      .slice(0, 5)
      .map((lang: ProgrammingLanguage) => ({
        type: 'language' as const,
        text: lang.name,
        subtitle: `Created by ${Array.isArray(lang.creator) ? lang.creator.join(', ') : lang.creator} (${lang.year})`
      }));
  }, [searchQuery, programmingLanguages]);

  const handleSearchChange = useCallback((value: string) => {
    setSearchQuery(value);
    onSearch(value);
    setShowSuggestions(value.length >= 2);
  }, [onSearch]);

  const selectSuggestion = useCallback((suggestion: SearchSuggestion) => {
    setSearchQuery(suggestion.text);
    onSearch(suggestion.text);
    setShowSuggestions(false);
  }, [onSearch]);

  const toggleFilter = useCallback((type: keyof FilterState, value: string) => {
    if (type === 'categories' || type === 'paradigms' || type === 'trend') {
      const currentFilters = filters[type] as string[];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter(f => f !== value)
        : [...currentFilters, value];

      const updatedFilters = { ...filters, [type]: newFilters };
      setFilters(updatedFilters);
      onFilter(updatedFilters);
    }
  }, [filters, onFilter]);

  const clearFilters = useCallback(() => {
    const resetFilters = {
      categories: [],
      paradigms: [],
      yearRange: [1950, 2024] as [number, number],
      trend: []
    };
    setFilters(resetFilters);
    onFilter(resetFilters);
  }, [onFilter]);

  const activeFilterCount = filters.categories.length + filters.paradigms.length + filters.trend.length;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search programming languages..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          onFocus={() => searchQuery.length >= 2 && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          className="w-full pl-10 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />

        {/* Autocomplete Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="w-full px-4 py-3 text-left hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-between"
                onClick={() => selectSuggestion(suggestion)}
              >
                <div>
                  <div className="font-medium">{suggestion.text}</div>
                  <div className="text-xs text-muted-foreground">{suggestion.subtitle}</div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {suggestion.type}
                </Badge>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
              {activeFilterCount}
            </Badge>
          )}
        </Button>

        {activeFilterCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="gap-2 text-muted-foreground"
          >
            <X className="h-4 w-4" />
            Clear filters
          </Button>
        )}
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="border border-border rounded-lg p-4 bg-muted/30 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {/* Categories */}
          <div>
            <h4 className="font-medium text-sm text-foreground mb-2">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={filters.categories.includes(category) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleFilter('categories', category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </Badge>
              ))}
            </div>
          </div>

          {/* Paradigms */}
          <div>
            <h4 className="font-medium text-sm text-foreground mb-2">Paradigms</h4>
            <div className="flex flex-wrap gap-2">
              {paradigms.map((paradigm) => (
                <Badge
                  key={paradigm}
                  variant={filters.paradigms.includes(paradigm) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleFilter('paradigms', paradigm)}
                >
                  {paradigm.charAt(0).toUpperCase() + paradigm.slice(1).replace('-', ' ')}
                </Badge>
              ))}
            </div>
          </div>

          {/* Trends */}
          <div>
            <h4 className="font-medium text-sm text-foreground mb-2">Trends</h4>
            <div className="flex flex-wrap gap-2">
              {['rising', 'stable', 'declining'].map((trend) => (
                <Badge
                  key={trend}
                  variant={filters.trend.includes(trend) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => toggleFilter('trend', trend)}
                >
                  {trend.charAt(0).toUpperCase() + trend.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}