interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ size = 'md', className = '' }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  return (
    <div className={`animate-spin rounded-full border-2 border-gray-300 border-t-primary ${sizeClasses[size]} ${className}`} />
  );
}

export function LoadingCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-muted rounded-lg h-64">
        <div className="p-6">
          <div className="h-6 bg-muted-foreground/20 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-muted-foreground/20 rounded"></div>
            <div className="h-4 bg-muted-foreground/20 rounded w-5/6"></div>
            <div className="h-4 bg-muted-foreground/20 rounded w-4/6"></div>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="h-6 bg-muted-foreground/20 rounded w-16"></div>
            <div className="h-6 bg-muted-foreground/20 rounded w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}