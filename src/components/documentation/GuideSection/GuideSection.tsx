import React from 'react';
import { BookOpen, ArrowRight, School } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NavSection } from '../../../types/documentation/navigation';

export interface GuideSectionProps {
  section: NavSection;
  className?: string;
}

export const GuideSection: React.FC<GuideSectionProps> = ({ section, className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Category Header */}
      <div className="border-b border-slate-200/80 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 rounded-full bg-operon-50 px-3 py-1 text-xs font-bold text-operon-700 ring-1 ring-operon-600/20">
          <School className="h-3.5 w-3.5 text-operon-600" />
          <span>Section Overview</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
          {section.title}
        </h1>
        {section.description && (
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
            {section.description}
          </p>
        )}
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {section.items.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-operon-300 hover:shadow-md transition-all duration-150"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-operon-50 text-operon-600 ring-1 ring-operon-600/10 group-hover:bg-operon-600 group-hover:text-white transition-colors duration-150">
                  <BookOpen className="h-4 w-4" />
                </div>
                {item.badge && (
                  <span className="rounded-md bg-operon-100 px-2 py-0.5 text-xs font-bold text-operon-800">
                    {item.badge}
                  </span>
                )}
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-operon-600 transition-colors">
                {item.title}
              </h3>
            </div>

            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-operon-600 pt-3 border-t border-slate-100">
              <span>Read Guide</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GuideSection;
