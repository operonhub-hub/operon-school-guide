import { Guide } from '../../types/documentation';
import { registerYourSchoolGuide } from './registration/register-your-school';
import { profileAndSettingsGuide } from './school-setup/profile-settings';
import { academicSessionGuide } from './school-setup/academic-session';
import { classesAndSubjectsGuide } from './academic-management/classes-and-subjects';
import { addingTeachersGuide } from './academic-management/adding-teachers';
import { addingStudentsGuide } from './academic-management/adding-students';
import { takingAttendanceGuide } from './academic-management/taking-attendance';
import { assessmentsScoreEntryGuide } from './academic-management/assessments-score-entry';
import { earlyYearsSkillsGuide } from './academic-management/early-years-skills';
import { reportCardsGuide } from './academic-management/report-cards';
import { documentationNavigationConfig } from '../../config/documentation/navigation.config';

export * from './registration/register-your-school';
export * from './school-setup/profile-settings';
export * from './school-setup/academic-session';
export * from './academic-management/classes-and-subjects';
export * from './academic-management/adding-teachers';
export * from './academic-management/adding-students';
export * from './academic-management/taking-attendance';
export * from './academic-management/assessments-score-entry';
export * from './academic-management/early-years-skills';
export * from './academic-management/report-cards';

/**
 * Registry map for documentation guide content modules.
 */
export const documentationContentRegistry: Record<string, Guide> = {
  'register-your-school': registerYourSchoolGuide,
  'profile-settings': profileAndSettingsGuide,
  'school-profile': profileAndSettingsGuide,
  'profile-and-settings': profileAndSettingsGuide,
  'academic-session': academicSessionGuide,
  'academic-sessions': academicSessionGuide,
  'sessions-and-terms': academicSessionGuide,
  'classes-and-subjects': classesAndSubjectsGuide,
  'classes-and-arms': classesAndSubjectsGuide,
  'classes': classesAndSubjectsGuide,
  'subjects': classesAndSubjectsGuide,
  'adding-teachers': addingTeachersGuide,
  'add-teacher': addingTeachersGuide,
  'teachers': addingTeachersGuide,
  'teacher-assignments': addingTeachersGuide,
  'staff': addingTeachersGuide,
  'adding-students': addingStudentsGuide,
  'add-student': addingStudentsGuide,
  'students': addingStudentsGuide,
  'student-roster': addingStudentsGuide,
  'bulk-upload': addingStudentsGuide,
  'bulk-import': addingStudentsGuide,
  'taking-attendance': takingAttendanceGuide,
  'attendance': takingAttendanceGuide,
  'assessments-score-entry': assessmentsScoreEntryGuide,
  'assessment': assessmentsScoreEntryGuide,
  'assessments': assessmentsScoreEntryGuide,
  'score-entry': assessmentsScoreEntryGuide,
  'score-entry-and-grading': assessmentsScoreEntryGuide,
  'scores': assessmentsScoreEntryGuide,
  'grading': assessmentsScoreEntryGuide,
  'assessment-schemes': assessmentsScoreEntryGuide,
  'assessments-and-score-entry': assessmentsScoreEntryGuide,
  'early-years-skills': earlyYearsSkillsGuide,
  'prenursery-assessment': earlyYearsSkillsGuide,
  'pre-nursery-assessment': earlyYearsSkillsGuide,
  'prenursery-skills': earlyYearsSkillsGuide,
  'skills-entry': earlyYearsSkillsGuide,
  'skills-entry-early-years': earlyYearsSkillsGuide,
  'early-years': earlyYearsSkillsGuide,
  'observational-skills': earlyYearsSkillsGuide,
  'affective-psychomotor': earlyYearsSkillsGuide,
  'report-cards': reportCardsGuide,
  'report-cards-grading': reportCardsGuide,
  'report-cards-and-grading': reportCardsGuide,
  'reporting': reportCardsGuide,
  'reports': reportCardsGuide,
};

export function getGuideBySlug(slug: string): Guide | undefined {
  if (documentationContentRegistry[slug]) {
    return documentationContentRegistry[slug];
  }

  // Flatten all navigation items to find the matching nav item
  const allItems: {
    sectionId: string;
    sectionTitle: string;
    id: string;
    title: string;
    slug: string;
    path: string;
    badge?: string;
  }[] = [];

  documentationNavigationConfig.sections.forEach((section) => {
    section.items.forEach((item) => {
      allItems.push({
        ...item,
        sectionId: section.id,
        sectionTitle: section.title,
      });
    });
  });

  const index = allItems.findIndex((item) => item.slug === slug || item.id === slug);
  if (index === -1) return undefined;

  const currentItem = allItems[index];
  const prevItem = index > 0 ? allItems[index - 1] : undefined;
  const nextItem = index < allItems.length - 1 ? allItems[index + 1] : undefined;

  return {
    id: currentItem.id,
    slug: currentItem.slug,
    sectionId: currentItem.sectionId,
    title: currentItem.title,
    shortDescription: `A comprehensive step-by-step guide for ${currentItem.title.toLowerCase()} in the Operon School Management Platform.`,
    whyItMatters: `Mastering ${currentItem.title.toLowerCase()} ensures your school records remain organized, accessible, and compliant with administrative standards.`,
    estimatedTime: '4 min',
    targetAudience: 'School Staff & Administrators',
    prerequisites: [
      {
        title: 'Active School Portal Account',
        description: 'An activated administrator or staff account with relevant permissions.',
      },
      {
        title: 'Operon Sign-in Credentials',
        description: 'Your registered username/email and password.',
      },
    ],
    steps: [
      {
        stepNumber: 1,
        title: `Navigate to ${currentItem.title}`,
        instruction: `Sign in to your Operon school portal and locate ${currentItem.title} from the main navigation menu.`,
        whyItMatters: `Accessing the module from the verified portal ensures all modifications are securely logged under your school account.`,
        subSteps: [
          `Open your school portal URL in your web browser.`,
          `Sign in with your administrative credentials.`,
          `Select "${currentItem.title}" from the main dashboard sidebar.`,
        ],
        expectedResult: `The ${currentItem.title} workspace interface opens displaying available configuration options.`,
        whatHappensNext: `You can proceed to review, edit, or enter required information.`,
        tip: `Keep your school records handy before starting this setup procedure.`,
      },
      {
        stepNumber: 2,
        title: `Configure ${currentItem.title} Information`,
        instruction: `Enter or verify all relevant fields according to your school's current term, calendar, or administrative records.`,
        whyItMatters: `Accurate data entry prevents downstream inconsistencies in report generation and attendance tracking.`,
        subSteps: [
          `Review the default fields presented on the screen.`,
          `Fill in required details accurately.`,
          `Double-check your entries before saving.`,
        ],
        expectedResult: `All fields reflect your school's actual operational details.`,
        whatHappensNext: `Save your changes to commit the configuration to your school portal.`,
      },
      {
        stepNumber: 3,
        title: `Save and Apply Settings`,
        instruction: `Click the save/confirm button to apply your changes across your school portal.`,
        whyItMatters: `Changes take effect immediately for all authorized staff and teachers.`,
        subSteps: [
          `Click the primary "Save" or "Apply" button at the bottom of the form.`,
          `Wait for the confirmation message to appear.`,
        ],
        expectedResult: `A success notification confirms your settings have been updated.`,
        whatHappensNext: `Your updated configuration is now live on the platform.`,
      },
    ],
    tips: [
      `You can return to update these settings at any time during the active school term.`,
    ],
    completionSummary: `You have successfully completed the overview for ${currentItem.title}.`,
    previousGuide: prevItem ? { title: prevItem.title, slug: prevItem.path } : undefined,
    nextGuide: nextItem ? { title: nextItem.title, slug: nextItem.path } : undefined,
  };
}
