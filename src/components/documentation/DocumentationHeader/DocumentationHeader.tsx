import React from 'react';
import { Search, Menu, X, BookOpen, ExternalLink, GraduationCap, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface DocumentationHeaderProps {
  onToggleMobileSidebar: () => void;
  isMobileSidebarOpen: boolean;
  onOpenSearch: () => void;
}

export const DocumentationHeader: React.FC<DocumentationHeaderProps> = ({
  onToggleMobileSidebar,
  isMobileSidebarOpen,
  onOpenSearch,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Mobile Toggle + Logo / Brand */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onToggleMobileSidebar}
            className="inline-flex lg:hidden items-center justify-center rounded-xl p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-operon-500"
            aria-label={isMobileSidebarOpen ? 'Close navigation sidebar' : 'Open navigation sidebar'}
          >
            {isMobileSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <Link to="/docs" className="flex items-center gap-2.5 group">
            {/* Operon Emblem */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-operon-700 to-operon-500 text-white shadow-xs group-hover:scale-105 transition-transform duration-150">
              <GraduationCap className="h-5 w-5" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold tracking-tight text-slate-900">
                  operon
                </span>
                <span className="rounded-md bg-operon-50 px-2 py-0.5 text-[10px] font-bold text-operon-700 ring-1 ring-operon-600/20 tracking-wide uppercase">
                  School Guide
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-normal -mt-0.5 hidden sm:inline-block">
                Simple digital handbook for school staff
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Search Trigger Bar */}
        <div className="flex-1 max-w-md mx-4 hidden md:block">
          <button
            type="button"
            onClick={onOpenSearch}
            className="flex w-full items-center justify-between rounded-xl border border-slate-200/90 bg-slate-50/90 px-3.5 py-2 text-sm text-slate-500 hover:border-operon-300 hover:bg-white hover:text-slate-700 hover:shadow-xs transition-all duration-150 group"
          >
            <div className="flex items-center gap-2.5">
              <Search className="h-4 w-4 text-operon-500 group-hover:text-operon-600" />
              <span className="text-slate-500 text-xs sm:text-sm">What would you like help with?</span>
            </div>
            <kbd className="hidden sm:inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 font-mono text-[10px] font-medium text-slate-400 shadow-2xs">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Right: Quick actions & Mobile Search Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            aria-label="Search guides"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            to="/docs"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-operon-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            <span>Home</span>
          </Link>

          <button
            type="button"
            onClick={onOpenSearch}
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-operon-600 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <HelpCircle className="h-4 w-4" />
            <span>Help</span>
          </button>

          <a
            href="https://operon.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-xl bg-operon-600 px-3.5 py-2 text-xs font-semibold text-white shadow-xs hover:bg-operon-700 transition-colors"
          >
            <span>Open Operon</span>
            <ExternalLink className="h-3.5 w-3.5 text-operon-200" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default DocumentationHeader;
