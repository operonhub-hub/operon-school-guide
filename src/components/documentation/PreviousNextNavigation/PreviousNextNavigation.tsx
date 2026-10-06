import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GuideLink } from '../../../types/documentation/guide';

export interface PreviousNextNavigationProps {
  previous?: GuideLink;
  next?: GuideLink;
  className?: string;
}

export const PreviousNextNavigation: React.FC<PreviousNextNavigationProps> = ({
  previous,
  next,
  className = '',
}) => {
  if (!previous && !next) return null;

  return (
    <div className={`mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 ${className}`}>
      {/* Previous Link */}
      {previous ? (
        <Link
          to={previous.slug.startsWith('/') ? previous.slug : `/docs/${previous.slug}`}
          className="group flex flex-col p-4 rounded-xl border border-slate-200/90 bg-white hover:border-operon-300 hover:shadow-xs transition-all duration-150"
        >
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-operon-600 mb-1">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Previous Guide</span>
          </div>
          <span className="text-sm font-semibold text-slate-900 group-hover:text-operon-700">
            {previous.title}
          </span>
          {previous.description && (
            <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">
              {previous.description}
            </span>
          )}
        </Link>
      ) : (
        <div className="hidden sm:block" />
      )}

      {/* Next Link */}
      {next && (
        <Link
          to={next.slug.startsWith('/') ? next.slug : `/docs/${next.slug}`}
          className="group flex flex-col p-4 rounded-xl border border-slate-200/90 bg-white hover:border-operon-300 hover:shadow-xs transition-all duration-150 sm:text-right"
        >
          <div className="flex items-center justify-start sm:justify-end gap-1.5 text-xs font-semibold text-slate-500 group-hover:text-operon-600 mb-1">
            <span>Next Guide</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
          <span className="text-sm font-semibold text-slate-900 group-hover:text-operon-700">
            {next.title}
          </span>
          {next.description && (
            <span className="text-xs text-slate-500 mt-0.5 line-clamp-1">
              {next.description}
            </span>
          )}
        </Link>
      )}
    </div>
  );
};

export default PreviousNextNavigation;
