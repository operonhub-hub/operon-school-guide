import React from 'react';
import { useParams } from 'react-router-dom';
import { DocumentationLayout } from '../../components/documentation/DocumentationLayout';
import { GuidePage } from '../../components/documentation/GuidePage';
import { TableOfContents } from '../../components/documentation/TableOfContents';
import { getGuideBySlug, registerYourSchoolGuide } from '../../content/documentation';
import { documentationNavigationConfig } from '../../config/documentation/navigation.config';

export const GuidePageRoute: React.FC = () => {
  const { sectionId, slug } = useParams<{ sectionId?: string; slug?: string }>();

  // Determine active guide
  const effectiveSlug = slug || (sectionId === 'registration' ? 'register-your-school' : slug);
  const guide = effectiveSlug ? getGuideBySlug(effectiveSlug) : registerYourSchoolGuide;

  // If no guide found, fallback to representative guide or redirect
  const activeGuide = guide || registerYourSchoolGuide;

  // Find category title
  const activeSection = documentationNavigationConfig.sections.find(
    (s) => s.id === (sectionId || activeGuide.sectionId)
  );

  return (
    <DocumentationLayout
      rightSidebar={
        <TableOfContents
          steps={activeGuide.steps}
          hasVideo={Boolean(activeGuide.video)}
        />
      }
    >
      <GuidePage
        guide={activeGuide}
        categoryTitle={activeSection?.title || 'Documentation'}
        categorySlug={activeSection?.id || 'getting-started'}
      />
    </DocumentationLayout>
  );
};

export default GuidePageRoute;
