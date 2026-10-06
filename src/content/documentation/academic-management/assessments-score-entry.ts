import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/assessment and score entry/01-assessment-configuration.jpg';
import orig02 from '../../../../artifacts/documentation/screenshots/assessment and score entry/02-assessment-presets.jpg';
import orig03 from '../../../../artifacts/documentation/screenshots/assessment and score entry/03-assessment-total-validation.jpg';
import orig04 from '../../../../artifacts/documentation/screenshots/assessment and score entry/04-assessment-activated.jpg';
import orig05 from '../../../../artifacts/documentation/screenshots/assessment and score entry/05-score-entry-panel.jpg';
import orig06 from '../../../../artifacts/documentation/screenshots/assessment and score entry/06-score-entry-override.jpg';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/assessment and score entry/01-assessment-configuration.jpg';
import anno02 from '../../../../artifacts/documentation/annotated/assessment and score entry/02-assessment-presets.jpg';
import anno03 from '../../../../artifacts/documentation/annotated/assessment and score entry/03-assessment-total-validation.jpg';
import anno04 from '../../../../artifacts/documentation/annotated/assessment and score entry/04-assessment-activated.jpg';
import anno05 from '../../../../artifacts/documentation/annotated/assessment and score entry/05-score-entry-panel.jpg';
import anno06 from '../../../../artifacts/documentation/annotated/assessment and score entry/06-score-entry-override.jpg';

export const assessmentsScoreEntryGuide: Guide = {
  id: 'assessments-score-entry',
  slug: 'assessments-score-entry',
  sectionId: 'academic-management',
  title: 'Assessments & Score Entry',
  shortDescription:
    'Learn how assessment structures are configured and how teachers enter and submit student scores in Operon.',
  whyItMatters:
    'Operon separates assessment setup from score entry. School administrators configure how assessment marks are structured across components (totaling 100 marks), while teachers use that structure to enter student marks. Your school may already have its assessment structure configured. If you are a teacher entering scores, you can go directly to Part 2 (Step 5).',
  estimatedTime: '6–10 min',
  targetAudience: 'Teachers & School Administrators',
  prerequisites: [
    {
      title: 'For Administrators: Assessment Access',
      description:
        'Administrator or academic officer access to configure Assessment Schemes and know the required mark distribution.',
    },
    {
      title: 'For Teachers: Assigned Class & Subject',
      description:
        'Assigned teacher access to the relevant class arm and subject in the active academic term.',
    },
    {
      title: 'Student Scores Ready',
      description:
        'Have student test, assignment, and examination scores ready for direct entry or spreadsheet upload.',
    },
  ],
  video: {
    src: '/documentation/videos/academic-management/assessments-score-entry-walkthrough.mp4',
    title: 'Assessments & Score Entry Walkthrough',
    duration: '03:00',
    posterUrl: orig01,
  },
  steps: [
    // PART 1: ASSESSMENT SETUP (FOR SCHOOL ADMINISTRATORS)
    {
      stepNumber: 1,
      title: 'Open Assessment Schemes',
      instruction:
        'Open Assessment Schemes to view and configure the assessment structure used by your school.',
      whyItMatters:
        'Reviewing the default school-wide scheme and academic section overrides ensures all classes evaluate students under the approved grading policy.',
      subSteps: [
        'From the main sidebar navigation under Settings, select "Assessment Schemes".',
        'Review the School-Wide Default Scheme and current academic session.',
        'Check whether specific academic sections (such as Primary or Secondary) use custom overrides.',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Operon Assessment Schemes configuration screen.',
        caption: 'Open Assessment Schemes to view school-wide structures and section overrides.',
      },
      expectedResult:
        'The Assessment Configuration workspace opens displaying default schemes and section override options.',
      whatHappensNext:
        'Choose a starting preset or customize the assessment components.',
      tip: 'Part 1 is for School Administrators. Teachers entering scores can proceed directly to Step 5.',
    },
    {
      stepNumber: 2,
      title: 'Choose a Starting Preset',
      instruction:
        'Operon provides Quick-Start Assessment Presets that can be used as a starting point for your school’s grading structure.',
      whyItMatters:
        'Starting from a proven preset saves setup time and automatically configures standard continuous assessment and examination mark splits.',
      subSteps: [
        'Select a preset such as "CA + Exam (40 / 60)", "Two CAs + Exam (20 / 20 / 60)", or "Operon Standard (15 / 15 / 10 / 60)".',
        'Review the Live Scoresheet Preview to see how score entry columns will appear to teachers.',
        'Review the Live Report Card Preview to see how marks scale on printable report cards.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Operon assessment preset selection screen.',
        caption: 'Choose a Quick-Start Assessment Preset to populate standard component structures.',
      },
      expectedResult:
        'The component builder populates with the chosen preset components and live preview columns.',
      whatHappensNext:
        'Customize component names, labels, and maximum marks.',
    },
    {
      stepNumber: 3,
      title: 'Set the Assessment Components',
      instruction:
        'Adjust the assessment components and their maximum marks to match the school’s grading structure, ensuring the total marks add up to 100.',
      whyItMatters:
        'Activation requires the total assessment marks to equal exactly 100 marks for consistent term grading and automated calculations.',
      subSteps: [
        'Edit or add Component Names (e.g., Continuous Assessment 1, Continuous Assessment 2, Assignment / Project, Terminal Examination).',
        'Set the short label for each component (e.g., CA 1, CA 2, ASG, EXAM).',
        'Specify the Max Mark for each component.',
        'Check the designated component as the Exam if applicable.',
        'Check the total before saving. The configured assessment structure should add up to 100 marks.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Operon assessment configuration showing assessment components and total marks.',
        caption: 'Configure assessment components and ensure the total adds up to exactly 100 marks.',
      },
      expectedResult:
        'The validation indicator shows exactly 100 / 100 Marks and turns ready for activation.',
      whatHappensNext:
        'Activate the assessment structure.',
      important: 'Check the total before saving. The configured assessment structure should add up to 100 marks.',
    },
    {
      stepNumber: 4,
      title: 'Activate the Assessment Structure',
      instruction:
        'Once the assessment components and marks are correct, activate the assessment structure to make it live across the school.',
      whyItMatters:
        'Activating commits the structure so that teachers have the correct columns and maximum mark limits ready in their scoresheets.',
      subSteps: [
        'Review the configuration one final time before activating it.',
        'Click the activation action to commit the default or section-specific scheme.',
        'Look for the confirmation message indicating successful activation.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Operon assessment scheme after activation.',
        caption: 'Confirm the activation notification indicating the assessment structure is ready for use.',
      },
      expectedResult:
        'The assessment structure is successfully activated and marked ready for student score entry.',
      whatHappensNext:
        'Assessment setup complete! If you are a teacher entering student scores, continue to Part 2 below.',
      tip: 'The assessment structure is now ready for score entry. Teachers can continue to Part 2 below.',
    },

    // PART 2: SCORE ENTRY (FOR TEACHERS)
    {
      stepNumber: 5,
      title: 'Open Score Entry & Grading',
      instruction:
        'Open Score Entry & Grading to begin entering marks for a class.',
      whyItMatters:
        'Score Entry & Grading provides both an interactive on-screen score matrix and a pre-filled Excel spreadsheet loader for fast entry.',
      subSteps: [
        'From the main navigation menu, select "Score Entry & Grading".',
        'Review the Scoresheet Entry Panel workspace.',
        'Note the available entry workflows: Excel Scoresheet Loader and Manual Score Matrix.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Operon Score Entry and Grading screen.',
        caption: 'Open Score Entry & Grading to begin entering student marks.',
      },
      expectedResult:
        'The Score Entry & Grading workspace opens with class and subject filters.',
      whatHappensNext:
        'Select the target class, arm, subject, and term.',
      tip: 'Part 2 is the primary daily workflow for teachers entering marks.',
    },
    {
      stepNumber: 6,
      title: 'Select Class, Subject, and Term',
      instruction:
        'Before entering marks, confirm that you are working with the correct section, class, arm or stream, subject, and academic term.',
      whyItMatters:
        'Verifying your class and subject ensures marks are recorded against the correct student roster and active assessment scheme.',
      subSteps: [
        'Select the Section and Class (e.g., Primary 2).',
        'Select the Arm / Stream (e.g., Arm A).',
        'Select the Subject (e.g., Basic Science).',
        'Select the Term (e.g., First Term).',
        'Confirm the assessment source badge (e.g., School Default or Section Override).',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Operon Score Entry panel with section-specific assessment source and class selection.',
        caption: 'Select the class, arm, subject, and term to load the matching student scoresheet.',
      },
      expectedResult:
        'The student roster and matching assessment columns load for the selected class and subject.',
      whatHappensNext:
        'Enter scores using the available entry method.',
      important: 'Always verify the selected class and subject before entering scores.',
    },
    {
      stepNumber: 7,
      title: 'Enter Scores Using the Available Method',
      instruction:
        'Enter student scores directly in Operon using the Manual Score Matrix, or use the spreadsheet workflow by downloading the pre-filled template and uploading completed marks.',
      whyItMatters:
        'Teachers can choose between quick inline keyboard entry on desktop or offline bulk spreadsheet entry.',
      subSteps: [
        'Option A (Direct Score Matrix): Click into the score input cells for each student and type marks directly using keyboard arrow keys or Enter.',
        'Option B (Spreadsheet Upload): Click "Download Pre-filled Template", enter marks in your spreadsheet program, and upload the completed file in the Excel Scoresheet Loader.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Operon scoresheet entry panel showing Excel template loader and manual score matrix.',
        caption: 'Enter marks directly in the score matrix or upload a completed spreadsheet file.',
      },
      expectedResult:
        'Scores populate for each student across the assessment component columns.',
      whatHappensNext:
        'Review the assessment components and score values.',
    },
    {
      stepNumber: 8,
      title: 'Review the Assessment Components',
      instruction:
        'Review the assessment components shown in the score-entry screen before entering marks, ensuring each score is entered against the correct assessment category.',
      whyItMatters:
        'Checking headers (such as CA 1, CA 2, Assignment, and Exam) prevents scores from being entered in the wrong column.',
      subSteps: [
        'Check the component column headers and their respective maximum marks (e.g., CA 1 (10), CA 2 (10), ASG (10), EXAM (70)).',
        'Make sure each score entered does not exceed the component maximum mark.',
        'Verify that continuous assessment scores and exam marks are entered in their respective columns.',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Operon manual score matrix showing component columns and maximum mark headers.',
        caption: 'Review column headers to ensure scores are entered against the correct assessment component.',
      },
      expectedResult:
        'Every mark is entered under the correct assessment category within allowable limits.',
      whatHappensNext:
        'Review the entered scores and student completion progress.',
    },
    {
      stepNumber: 9,
      title: 'Review the Entered Scores',
      instruction:
        'Review the entered scores before submitting them, checking that each student, subject, assessment component, and mark is accurate.',
      whyItMatters:
        'Thorough review prevents grading discrepancies and ensures no student is accidentally missed before submission.',
      subSteps: [
        'Check the student names and corresponding marks across all columns.',
        'Review the auto-calculated Total (100) and preliminary Grade for each student.',
        'Check the completion tracking status (e.g., Completion: 6 / 6 Students (100%)).',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Operon manual score matrix showing student marks and completion tracking.',
        caption: 'Review entered scores, student totals, and completion progress before submitting.',
      },
      expectedResult:
        'All student scores are verified, complete, and free of entry errors.',
      whatHappensNext:
        'Submit the scores for final review.',
    },
    {
      stepNumber: 10,
      title: 'Submit the Scores',
      instruction:
        'Once the scores have been reviewed, submit them using the available submission action to commit the marks for report card compilation.',
      whyItMatters:
        'Submitting the sheet commits the class scores and forwards them for class teacher compilation and report card generation.',
      subSteps: [
        'Confirm that you are submitting the correct class, subject, and term.',
        'Click the primary "Submit for Final Review" button.',
        'Confirm the submission prompt to lock manual edits and complete the score entry.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Operon score submission button and confirmation action.',
        caption: 'Submit the reviewed scoresheet for final review and compilation.',
      },
      expectedResult:
        'The scoresheet is submitted and saved to the school records.',
      whatHappensNext:
        'Score entry is complete! You can now proceed to Report Cards & Grading.',
    },
  ],
  tips: [
    'Teachers only need to complete Part 2 (Steps 5–10) if your school administrator has already configured the assessment scheme.',
    'When using the Excel template workflow, do not modify column headers or student identifiers to ensure automatic matching.',
    'Assessment schemes must total exactly 100 marks before they can be activated.',
  ],
  completionSummary:
    'You now know how assessment structures are configured by administrators and how student scores are entered and submitted by teachers in Operon.',
  previousGuide: {
    title: 'Taking Attendance',
    slug: '/docs/academic-management/attendance',
    description: 'Learn how to record daily attendance and review attendance analytics.',
  },
  nextGuide: {
    title: 'Early Years Skills Assessment',
    slug: '/docs/academic-management/early-years-skills',
    description: 'Learn how to record developmental milestones and observational checklists for early years learners.',
  },
};

export default assessmentsScoreEntryGuide;
