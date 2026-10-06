import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { DocumentationLayout } from '../components/documentation/DocumentationLayout';
import { OverviewPage } from './docs/OverviewPage';
import { GuidePageRoute } from './docs/GuidePageRoute';
import { SectionPageRoute } from './docs/SectionPageRoute';

// Smart scroll handler for route and anchor navigation
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const scrollToTarget = () => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToTarget()) {
        const timer = setTimeout(scrollToTarget, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return null;
}

export const App: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <Routes>
        {/* Redirect root to /docs */}
        <Route path="/" element={<Navigate to="/docs" replace />} />

        {/* Documentation Overview */}
        <Route
          path="/docs"
          element={
            <DocumentationLayout>
              <OverviewPage />
            </DocumentationLayout>
          }
        />

        {/* Dedicated Registration Routes */}
        <Route
          path="/docs/registration"
          element={<Navigate to="/docs/registration/register-your-school" replace />}
        />
        <Route
          path="/docs/registration/register-your-school"
          element={<GuidePageRoute />}
        />

        {/* Section Index Route */}
        <Route path="/docs/:sectionId" element={<SectionPageRoute />} />

        {/* Specific Guide Route */}
        <Route path="/docs/:sectionId/:slug" element={<GuidePageRoute />} />

        {/* Fallback to /docs */}
        <Route path="*" element={<Navigate to="/docs" replace />} />
      </Routes>
    </>
  );
};

export default App;
