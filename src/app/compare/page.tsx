"use client";

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { programmingLanguages } from '@/data/languages';
import { ProgrammingLanguage } from '@/types';
import { LanguageComparison } from '@/components/LanguageComparison';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Breadcrumb } from '@/components/Breadcrumb';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function CompareContent() {
  const searchParams = useSearchParams();
  const languageIds = searchParams.get('languages')?.split(',') || [];

  const initialLanguages = languageIds
    .map(id => programmingLanguages.find(lang => lang.id === id))
    .filter((lang): lang is ProgrammingLanguage => lang !== undefined);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-8 pb-16">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[
              { label: "Compare Languages", current: true }
            ]} />
          </div>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Compare Programming Languages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Compare features, popularity, and characteristics of different programming languages side by side.
            </p>
          </div>

          {/* Comparison Component */}
          <LanguageComparison
            initialLanguages={initialLanguages}
            maxLanguages={4}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    }>
      <CompareContent />
    </Suspense>
  );
}