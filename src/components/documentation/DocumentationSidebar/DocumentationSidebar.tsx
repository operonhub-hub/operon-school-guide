import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Compass,
  School,
  GraduationCap,
  CreditCard,
  MessageSquare,
  ShieldCheck,
  X,
  Home,
} from 'lucide-react';
import { NavigationConfig, NavSection } from '../../../types/documentation/navigation';
import operonLogoWhite from '@/assets/operon-logo-white.png';
import { documentationNavigationConfig } from '../../../config/documentation/navigation.config';

export interface DocumentationSidebarProps {
  config?: NavigationConfig;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  className?: string;
}

// Icon mapping per section ID
const sectionIcons: Record<string, React.ElementType> = {
  'getting-started': Compass,
  'school-setup': School,
  'academic-management': GraduationCap,
  finance: CreditCard,
  communication: MessageSquare,
  administration: ShieldCheck,
};

export const DocumentationSidebar: React.FC<DocumentationSidebarProps> = ({
  config = documentationNavigationConfig,
  isOpenMobile = false,
  onCloseMobile,
  className = '',
}) => {
  const location = useLocation();

  // Expand only the currently active section by default
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    config.sections.forEach((s) => {
      const isMatch = s.items.some((item) => location.pathname.startsWith(item.path));
      initial[s.id] = isMatch || (location.pathname === '/docs' && s.id === 'getting-started');
    });
    return initial;
  });

  // Keep active section in sync when location changes
  React.useEffect(() => {
    config.sections.forEach((s) => {
      const isMatch = s.items.some((item) => location.pathname.startsWith(item.path));
      if (isMatch) {
        setOpenSections((prev) => ({ ...prev, [s.id]: true }));
      }
    });
  }, [location.pathname, config.sections]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const navContent = (
    <div className="flex flex-col h-full py-4 px-3 space-y-6">
      {/* Quick Overview Link */}
      <div>
        <NavLink
          to="/docs"
          end
          onClick={onCloseMobile}
          className={({ isActive }) =>
            `flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              isActive
                ? 'bg-operon-50 text-operon-700 font-semibold shadow-xs ring-1 ring-operon-600/10'
                : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
            }`
          }
        >
          <Home className="h-4 w-4 text-operon-600" />
          <span>Guide Overview</span>
        </NavLink>
      </div>

      {/* Grouped Sections */}
      <div className="space-y-4">
        {config.sections.map((section: NavSection) => {
          const isOpen = openSections[section.id] ?? true;
          const SectionIcon = sectionIcons[section.id] || School;
          const isSectionActive = section.items.some((item) =>
            location.pathname.startsWith(item.path)
          );

          return (
            <div key={section.id} className="space-y-1">
              {/* Section Header Button */}
              <button
                type="button"
                onClick={() => toggleSection(section.id)}
                className={`flex w-full items-center justify-between px-3 py-1.5 text-left text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
                  isSectionActive
                    ? 'text-operon-800 bg-operon-50/60'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <SectionIcon className="h-3.5 w-3.5 text-operon-500" />
                  <span>{section.title}</span>
                </div>
                <ChevronDown
                  className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-0' : '-rotate-90'
                  }`}
                />
              </button>

              {/* Section Items */}
              {isOpen && (
                <ul className="space-y-0.5 pl-2 border-l border-slate-200/80 ml-3.5 mt-1">
                  {section.items.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        to={item.path}
                        onClick={onCloseMobile}
                        className={({ isActive }) =>
                          `group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-all duration-150 ${
                            isActive
                              ? 'bg-operon-50 font-bold text-operon-700 -ml-2.5 border-l-2 border-operon-600 pl-2 shadow-2xs'
                              : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium'
                          }`
                        }
                      >
                        <span className="truncate">{item.title}</span>
                        {item.badge && (
                          <span className="rounded bg-operon-100/70 px-1.5 py-0.5 text-[10px] font-semibold text-operon-800">
                            {item.badge}
                          </span>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <aside
        className={`hidden lg:block sticky top-16 h-[calc(100vh-4rem)] w-64 xl:w-72 shrink-0 overflow-y-auto border-r border-slate-200/80 bg-slate-50/40 ${className}`}
      >
        {navContent}
      </aside>

      {/* Mobile Drawer Sidebar */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white shadow-2xl">
            {/* Drawer Header */}
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-operon-600 shadow-xs p-1.5">
                  <img src={operonLogoWhite} alt="Operon Logo" className="h-4 w-auto object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-slate-900 text-sm">Operon</span>
                  <span className="text-[10px] text-operon-600 font-semibold -mt-0.5">School Guide</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onCloseMobile}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Body */}
            <div className="flex-1 overflow-y-auto">
              {navContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DocumentationSidebar;
