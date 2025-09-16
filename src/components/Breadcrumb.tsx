import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/utils/cn';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex", className)}>
      <ol className="flex items-center space-x-2">
        {/* Home Icon */}
        <li>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {item.href && !item.current ? (
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  "text-sm font-medium",
                  item.current
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function LanguageBreadcrumb({ languageName }: { languageName: string }) {
  const items: BreadcrumbItem[] = [
    { label: "Programming Languages", href: "/#languages" },
    { label: languageName, current: true },
  ];

  return <Breadcrumb items={items} />;
}