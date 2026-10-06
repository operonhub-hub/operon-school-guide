import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { DocumentationLayout } from '../../components/documentation/DocumentationLayout';
import { GuideSection } from '../../components/documentation/GuideSection';
import { documentationNavigationConfig } from '../../config/documentation/navigation.config';

export const SectionPageRoute: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();

  const section = documentationNavigationConfig.sections.find(
    (s) => s.id === sectionId
  );

  if (!section) {
    return <Navigate to="/docs" replace />;
  }

  return (
    <DocumentationLayout>
      <GuideSection section={section} />
    </DocumentationLayout>
  );
};

export default SectionPageRoute;
