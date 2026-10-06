import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/academic-session/01-session-registry.png';
import orig02 from '../../../../artifacts/documentation/screenshots/academic-session/02-initialize-session.png';
import orig03 from '../../../../artifacts/documentation/screenshots/academic-session/03-session-active.png';
import orig04 from '../../../../artifacts/documentation/screenshots/academic-session/04-configure-session.png';
import orig05 from '../../../../artifacts/documentation/screenshots/academic-session/05-session-configured.png';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/academic-session/01-session-registry.png';
import anno02 from '../../../../artifacts/documentation/annotated/academic-session/02-initialize-session.png';
import anno03 from '../../../../artifacts/documentation/annotated/academic-session/03-session-active.png';
import anno04 from '../../../../artifacts/documentation/annotated/academic-session/04-configure-session.png';
import anno05 from '../../../../artifacts/documentation/annotated/academic-session/05-session-configured.png';

export const academicSessionGuide: Guide = {
  id: 'academic-session',
  slug: 'academic-session',
  sectionId: 'school-setup',
  title: 'Set Up an Academic Session',
  shortDescription:
    'Learn how to initialize a new academic session, set calendar dates, select the current operational term, and review the session schedule in the Academic Session Registry.',
  whyItMatters:
    'Configuring an academic session establishes the active academic year and term schedule for your school, providing the operational timeline for classes, attendance, grading, and student records.',
  estimatedTime: '3–4 min',
  targetAudience: 'School Administrators & Academic Directors',
  prerequisites: [
    {
      title: 'Administrator Access',
      description: 'An active administrator account with permissions to manage school settings and academic sessions.',
    },
    {
      title: 'Academic Calendar Dates',
      description: 'The official start and end dates for your school’s academic year and operational terms.',
    },
  ],
  video: {
    src: '/documentation/videos/school-setup/academic-session-walkthrough.mp4',
    title: 'Academic Session Setup Walkthrough',
    duration: '02:40',
    posterUrl: orig01,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Open Academic Session Registry',
      instruction:
        'Navigate to the Academic Session Registry workspace to view your school’s active session boundary, current term, and historical session timeline.',
      whyItMatters:
        'The Academic Session Registry provides an overview of all active and past school sessions and serves as the launchpad for creating new academic years.',
      subSteps: [
        'From the dashboard, open the Settings navigation and select Academic Sessions.',
        'Review the Current Session Boundary card, Active Term card, and the All Academic Sessions table.',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Academic Session Registry dashboard overview with action buttons',
        caption: 'View the Academic Session Registry with session overview cards and action buttons.',
      },
      expectedResult:
        'The Academic Session Registry displays your current session status and action controls.',
      whatHappensNext:
        'Initialize a new academic session.',
    },
    {
      stepNumber: 2,
      title: 'Initialize an Academic Session',
      instruction:
        'Click the + Initialize Session button in the header to open the session creation modal.',
      whyItMatters:
        'Opens the setup wizard where you specify the academic year name, date ranges, and initial operational term.',
      subSteps: [
        'Locate the primary "+ Initialize Session" button in the upper-right corner of the registry header.',
        'Click the button to open the "Initialize Academic Session" dialog.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Initialize Academic Session modal dialog with input fields',
        caption: 'Click "+ Initialize Session" to open the session initialization modal.',
      },
      expectedResult:
        'The Initialize Academic Session dialog appears with inputs for session name, start/end dates, and operational term selection.',
      whatHappensNext:
        'Enter the academic session details and choose the starting term.',
    },
    {
      stepNumber: 3,
      title: 'Enter the Academic Session Information',
      instruction:
        'Enter your Academic Session Name, select the Start Date and End Date, choose your Current Operational Term, and click Initialize & Activate Session.',
      whyItMatters:
        'Sets the official name and duration of the academic year and activates the appropriate starting term for your school.',
      subSteps: [
        'Type your Academic Session Name (e.g. 2027/2028) into the name field.',
        'Select the calendar Start Date and End Date.',
        'Select which term your school is currently operating (First Term, Second Term, or Third Term).',
        'Click the "+ Initialize & Activate Session" button to activate the session.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Active academic session displayed on the registry dashboard',
        caption: 'Enter session details, select the operational term, and activate the session.',
      },
      expectedResult:
        'The session is created and activated, showing the updated active session boundary.',
      whatHappensNext:
        'Configure and verify operational term dates if needed.',
      tip: 'Ensure the session name matches your school’s official academic year naming convention (e.g., 2027/2028).',
    },
    {
      stepNumber: 4,
      title: 'Configure Operational Term & Session Dates',
      instruction:
        'Click Configure Session or Configure Dates to review the calendar boundaries, check the term status breakdown, and update dates if needed.',
      whyItMatters:
        'Allows administrators to verify the exact start and end dates and inspect the preview of upcoming terms.',
      subSteps: [
        'Click "Configure Session" in the header or "Configure Dates" on the active session card.',
        'Review the Session Start Date and Session End Date.',
        'Inspect the Session Term Breakdown Preview showing Active and Upcoming terms.',
        'Click "Save Configuration" to confirm any adjustments.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Configure Academic Session modal with date selectors and term breakdown',
        caption: 'Review and adjust session date boundaries and inspect term breakdown.',
      },
      expectedResult:
        'Session dates and term breakdown settings are saved.',
      whatHappensNext:
        'Review the confirmed session in the registry overview.',
    },
    {
      stepNumber: 5,
      title: 'Review and Confirm the Configured Academic Session',
      instruction:
        'Confirm that the active session and its term dates are displayed accurately in the Academic Session Registry cards and timeline table.',
      whyItMatters:
        'Ensures the session schedule is properly synchronized and ready for daily school operations.',
      subSteps: [
        'Check the Current Session Boundary card to confirm the session name, active badge, and start/end dates.',
        'Confirm the Active Term card displays the correct current operating term.',
        'Verify the session entry in the All Academic Sessions table.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Confirmed academic session registry overview showing active status',
        caption: 'Confirm the active academic session in the registry overview and session table.',
      },
      expectedResult:
        'The academic session is active and confirmed in the registry.',
      whatHappensNext:
        'Proceed to set up your school’s Academic Structure.',
    },
  ],
  tips: [
    'Academic Structure is introduced later in the walkthrough. A dedicated guide will cover sections, classes, arms, and related academic configuration.',
    'Always verify your term start and end dates before enrolling students or scheduling classes.',
  ],
  warnings: [
    'Changing the active session or operational term affects current school records. Verify all calendar dates before activating.',
  ],
  completionSummary:
    'You have successfully initialized and configured an academic session in the Operon Academic Session Registry. Your school calendar is active and ready for academic structure setup.',
  previousGuide: {
    title: 'Manage Your Profile & School Settings',
    slug: '/docs/school-setup/profile-settings',
    description: 'Update administrator profile photo, digital signature, and school branding.',
  },
  nextGuide: {
    title: 'Classes & Subjects',
    slug: '/docs/academic-management/classes-and-subjects',
    description: 'Learn how to organize classes, create class arms, and configure subjects.',
  },
};

export default academicSessionGuide;
