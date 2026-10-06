import React, { useState, useEffect } from 'react';
import { DocumentationHeader } from '../DocumentationHeader';
import { DocumentationSidebar } from '../DocumentationSidebar';
import { SearchModal } from '../SearchModal';

export interface DocumentationLayoutProps {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

export const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({
  children,
  rightSidebar,
}) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global Cmd+K / Ctrl+K shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased">
      {/* 1. Global Header */}
      <DocumentationHeader
        isMobileSidebarOpen={isMobileSidebarOpen}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* 2. Main Portal 3-Column Grid */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 items-start">
        {/* Left Column: Sidebar */}
        <DocumentationSidebar
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Center Column: Documentation Content */}
        <main className="min-w-0 flex-1 px-4 py-8 sm:px-6 md:py-10 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>

        {/* Right Column: Table of Contents */}
        {rightSidebar && (
          <aside className="hidden xl:block sticky top-16 h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto px-4 py-8">
            {rightSidebar}
          </aside>
        )}
      </div>

      {/* 3. Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </div>
  );
};

export default DocumentationLayout;
