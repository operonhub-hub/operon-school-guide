import React, { useEffect, useState, useRef } from 'react';
import { AlignLeft } from 'lucide-react';
import { GuideStep } from '../../../types/documentation/guide';

export interface TableOfContentsProps {
  steps: GuideStep[];
  hasVideo?: boolean;
  hasPrerequisites?: boolean;
  className?: string;
  onItemClick?: () => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  steps,
  hasVideo = false,
  hasPrerequisites = true,
  className = '',
  onItemClick,
}) => {
  const [activeId, setActiveId] = useState<string>('introduction');
  const isClickingRef = useRef(false);

  // Define the landmark TOC items in order
  const tocItems = [
    { id: 'introduction', label: 'Introduction' },
    ...(hasPrerequisites ? [{ id: 'before-you-start', label: 'Before you start' }] : []),
    ...(hasVideo ? [{ id: 'video-walkthrough', label: 'Video walkthrough' }] : []),
    { id: 'step-by-step-guide', label: `Step-by-step guide (${steps.length} steps)` },
    { id: 'completion', label: 'Completion & Next guide' },
  ];

  useEffect(() => {
    // Set initial active from window.location.hash if present
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      if (tocItems.some((item) => item.id === hashId)) {
        setActiveId(hashId);
      }
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isClickingRef.current) return;

      // Filter entries that are intersecting in viewport
      const intersectingEntries = entries.filter((entry) => entry.isIntersecting);

      if (intersectingEntries.length > 0) {
        // Sort by distance to top
        intersectingEntries.sort(
          (a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
        );
        setActiveId(intersectingEntries[0].target.id);
      } else if (window.scrollY < 80) {
        setActiveId('introduction');
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: '-80px 0px -50% 0px',
      threshold: [0, 0.1, 0.5],
    });

    tocItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (isClickingRef.current) return;
      if (window.scrollY < 80) {
        setActiveId('introduction');
        return;
      }
      // Highlight completion when at bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveId('completion');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasVideo, hasPrerequisites, steps.length]);

  const handleAnchorClick = (id: string) => {
    isClickingRef.current = true;
    setActiveId(id);
    onItemClick?.();

    setTimeout(() => {
      isClickingRef.current = false;
    }, 800);
  };

  return (
    <nav
      aria-label="On this guide"
      className={`sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto px-2 py-3 text-sm ${className}`}
    >
      <div className="flex items-center gap-1.5 font-bold text-slate-400 mb-3 text-[11px] uppercase tracking-wider">
        <AlignLeft className="h-3.5 w-3.5 text-operon-500" />
        <span>On this guide</span>
      </div>

      <ul className="space-y-1 text-slate-600 border-l border-slate-200/80 pl-3">
        {tocItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => handleAnchorClick(item.id)}
                className={`block py-1.5 px-2 text-xs transition-colors duration-150 rounded-r-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-operon-500 ${
                  isActive
                    ? 'font-bold text-operon-700 -ml-3.5 border-l-2 border-operon-600 pl-3 bg-operon-50/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
