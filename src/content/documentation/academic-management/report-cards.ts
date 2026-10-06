import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/report_card/01-report-cards-overview.jpg';
import orig02 from '../../../../artifacts/documentation/screenshots/report_card/02-compiling-class-roster.jpg';
import orig03 from '../../../../artifacts/documentation/screenshots/report_card/03-edit-report-remarks.jpg';
import orig04 from '../../../../artifacts/documentation/screenshots/report_card/04-printable-card-preview.jpg';
import orig05 from '../../../../artifacts/documentation/screenshots/report_card/05-generate-batch-comments.jpg';
import orig06 from '../../../../artifacts/documentation/screenshots/report_card/06-review-report-card-details.jpg';
import orig07 from '../../../../artifacts/documentation/screenshots/report_card/07-submit-report-for-school-approval.jpg';
import orig08 from '../../../../artifacts/documentation/screenshots/report_card/08-review-approval-state.jpg';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/report_card/01-report-cards-overview.jpg';
import anno02 from '../../../../artifacts/documentation/annotated/report_card/02-compiling-class-roster.jpg';
import anno03 from '../../../../artifacts/documentation/annotated/report_card/03-edit-report-remarks.jpg';
import anno04 from '../../../../artifacts/documentation/annotated/report_card/04-printable-card-preview.jpg';
import anno05 from '../../../../artifacts/documentation/annotated/report_card/05-generate-batch-comments.jpg';
import anno06 from '../../../../artifacts/documentation/annotated/report_card/06-review-report-card-details.jpg';
import anno07 from '../../../../artifacts/documentation/annotated/report_card/07-submit-report-for-school-approval.jpg';
import anno08 from '../../../../artifacts/documentation/annotated/report_card/08-review-approval-state.jpg';

export const reportCardsGuide: Guide = {
  id: 'report-cards',
  slug: 'report-cards',
  sectionId: 'academic-management',
  title: 'Report Cards & Grading',
  shortDescription:
    'Learn how to compile student reports, review report card details, generate comments, preview printable report cards, and submit completed reports for school approval.',
  whyItMatters:
    'Report cards bring a student’s academic record together in one place. Reviewing the report carefully before submission helps ensure that grades, comments, and student information are complete and ready for school approval.',
  estimatedTime: '5–7 min',
  targetAudience: 'Teachers & School Administrators',
  prerequisites: [
    {
      title: 'Report Card Access',
      description:
        'You need access to the Report Cards area of your school account with teacher or administrator privileges.',
    },
    {
      title: 'Completed Assessment Data',
      description:
        'Ensure the relevant student assessments, test scores, or early years skills evaluations have been recorded.',
    },
    {
      title: 'Correct Class & Term',
      description:
        'Confirm that you are working with the designated class, arm, and active academic term.',
    },
    {
      title: 'Student Information',
      description:
        'Make sure the students you are reporting on are correctly registered on the class roster.',
    },
  ],
  video: {
    src: '/documentation/videos/academic-management/report-cards-grading-walkthrough.mp4',
    title: 'Report Cards & Grading Walkthrough',
    duration: '04:05',
    posterUrl: orig01,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Open Report Cards',
      instruction:
        'Open the Report Cards area from the Operon dashboard and select the reporting context you want to work with.',
      whyItMatters:
        'Selecting the right class cohort and term loads the exact grades and developmental records for compilation.',
      subSteps: [
        'From the main navigation menu, select "Report Cards".',
        'Verify the active academic term (e.g., First Term).',
        'Select the appropriate Class (e.g., Kindergarten 2 or Primary 4) and Arm / Stream (e.g., Arm A).',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Operon Report Cards overview showing class selection and compilation status.',
        caption: 'Open Report Cards and select the class, arm, and term to begin compilation.',
      },
      expectedResult:
        'The Report Cards dashboard loads with class summary statistics and the academic roster matrix.',
      whatHappensNext:
        'Compile the selected class roster.',
      tip: 'Draft mode allows continuous score sheet updates until the report is finalized for approval.',
    },
    {
      stepNumber: 2,
      title: 'Compile the Class Roster',
      instruction:
        'Prepare the selected class roster so the students included in the report are ready for review.',
      whyItMatters:
        'Compiling synchronizes entered scores, attendance records, and student profiles into a unified report draft.',
      subSteps: [
        'Confirm the selected class, arm, and academic term in the filter bar.',
        'Review the students listed in the class table.',
        'Click the "Compile Class Roster" button to process academic standings and leaderboards.',
        'Wait for the compilation process to complete.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Operon compiling class roster in progress.',
        caption: 'Click Compile Class Roster to aggregate student scores and attendance.',
      },
      expectedResult:
        'The student roster updates with calculated totals, subject counts, and ready status.',
      whatHappensNext:
        'Review and edit report remarks for individual students.',
    },
    {
      stepNumber: 3,
      title: 'Review and Edit Report Remarks',
      instruction:
        'Review the report information and make any required changes to the report remarks before continuing.',
      whyItMatters:
        'Personalized teacher and principal remarks provide valuable qualitative feedback for students and parents.',
      subSteps: [
        'Click "Edit Report" on any student row in the roster matrix.',
        'Review the Class Teacher’s Remarks and Principal’s Official Remarks.',
        'Edit remarks directly or click "Auto-Generate Counsel" / "Auto-Generate Remark" for tailored suggestions.',
        'Click "Save Remarks" to commit the updated comments.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Operon Edit Report Card Remarks modal with auto-generate options.',
        caption: 'Edit class teacher and principal remarks, or auto-generate tailored comments.',
      },
      expectedResult:
        'The student’s qualitative remarks are updated and saved to their report card draft.',
      whatHappensNext:
        'Preview the printable report card layout.',
    },
    {
      stepNumber: 4,
      title: 'Preview the Printable Report Card',
      instruction:
        'Use the printable preview to review how the completed report card will appear before it is finalized.',
      whyItMatters:
        'The high-fidelity preview verifies student details, logo branding, subject scores, and remarks exactly as they will print on A4 paper.',
      subSteps: [
        'Click "Preview" on a student’s row or click "Print Preview" in the actions bar.',
        'Check the student’s name, admission number, date of birth, and attendance summary.',
        'Review the academic subjects or developmental skill domains.',
        'Verify that all remarks and official signatures are positioned correctly.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Operon High-Fidelity Printable Card Preview in A4 layout.',
        caption: 'Review the high-fidelity A4 printable preview to confirm formatting and accuracy.',
      },
      expectedResult:
        'The printable preview opens displaying the complete, formatted report card layout.',
      whatHappensNext:
        'Generate batch comments for the remaining learners.',
      tip: 'You can zoom or download an individual PDF copy directly from the preview header.',
    },
    {
      stepNumber: 5,
      title: 'Generate Report Comments',
      instruction:
        'Use the available comment-generation workflow to prepare comments for the selected learners.',
      whyItMatters:
        'Batch comment generation streamlines end-of-term reporting by crafting personalized comments tailored to each student’s achievement level.',
      subSteps: [
        'Select the target learners in the roster matrix (or check select-all).',
        'Click "Batch Generate Comments" in the table action bar.',
        'Choose your desired Global Tone (Professional, Encouraging, Concise, or Detailed).',
        'Choose the Global Length (Short, Medium, or Detailed).',
        'Click "Generate Comments for All" to generate personalized feedback.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Operon Batch Generate Comments modal with tone and length preferences.',
        caption: 'Select tone and length preferences to generate comments for the entire class cohort.',
      },
      expectedResult:
        'Personalized comments are generated and populated across the selected student reports.',
      whatHappensNext:
        'Review the generated comments and full report details.',
      important: 'Always review auto-generated comments to ensure they accurately reflect individual student growth before final submission.',
    },
    {
      stepNumber: 6,
      title: 'Review the Completed Report',
      instruction:
        'Before submitting the report, carefully review the student’s complete report.',
      whyItMatters:
        'A thorough final check ensures all academic results, traits, and comments are fully populated without omissions.',
      subSteps: [
        'Open the full report preview for each student cohort.',
        'Check student information, academic grades, skill domains, and attendance totals.',
        'Confirm that teacher observations and principal recommendations are complete.',
        'Ensure there are no missing grades or incomplete evaluation fields.',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Operon full report card preview showing all completed domains and remarks.',
        caption: 'Inspect the full report card to verify completeness across all subjects and domains.',
      },
      expectedResult:
        'All student report cards are verified as complete, accurate, and ready for submission.',
      whatHappensNext:
        'Submit the compiled report for school approval.',
    },
    {
      stepNumber: 7,
      title: 'Submit the Report for School Approval',
      instruction:
        'Once the report has been reviewed and is complete, submit it through the available approval workflow.',
      whyItMatters:
        'Submitting locks teacher edits and transitions the class report into the official school administration review queue.',
      subSteps: [
        'Confirm that all students on the class roster have been evaluated.',
        'Click the primary "Submit for School Approval" button in the compilation header.',
        'Confirm the submission prompt to lock subject teacher scoring and advance the status.',
      ],
      screenshot: {
        originalUrl: orig07,
        annotatedUrl: anno07,
        altText: 'Operon submission banner confirming report status submitted for school approval.',
        caption: 'Click Submit for School Approval to commit the class report to administrative review.',
      },
      expectedResult:
        'A success notification confirms: "Report status successfully submitted for school approval."',
      whatHappensNext:
        'Confirm the compilation status is awaiting school approval.',
    },
    {
      stepNumber: 8,
      title: 'Confirm the Approval Status',
      instruction:
        'After submission, confirm that the report has moved into the appropriate school approval state.',
      whyItMatters:
        'Verifying the approval state ensures the school administrator can review, approve, and release official report cards.',
      subSteps: [
        'Review the Compilation Status badge, which now displays "AWAITING SCHOOL APPROVAL".',
        'Verify that the notice indicates results are locked and awaiting final review.',
        'School administrators can then click "Approve & Release" or "Return for Correction" if adjustments are needed.',
      ],
      screenshot: {
        originalUrl: orig08,
        annotatedUrl: anno08,
        altText: 'Operon Report Cards dashboard showing Awaiting School Approval status with Approve & Release action.',
        caption: 'Confirm the Awaiting School Approval status and administrative release options.',
      },
      expectedResult:
        'The class report is safely locked in the approval queue, ready for administrative release.',
      whatHappensNext:
        'Report compilation is complete! Proceed to Promotions & Class Transitions.',
    },
  ],
  tips: [
    'You can export the entire class broadsheet to an Excel (.xlsx) file at any time using the "Export (.xlsx)" button.',
    'Submitting for approval locks score editing to prevent inadvertent changes during report card distribution.',
    'Use batch print actions to print all approved report cards simultaneously on official letterhead.',
  ],
  completionSummary:
    'You’re done! Your report cards have been compiled, reviewed, and submitted for the school’s approval process. You are now ready to manage promotions and class transitions.',
  previousGuide: {
    title: 'Early Years Skills Assessment',
    slug: '/docs/academic-management/early-years-skills',
    description: 'Learn how to record developmental milestones and observational checklists.',
  },
  nextGuide: {
    title: 'Promotions & Class Transitions',
    slug: '/docs/academic-management/academic-transition',
    description: 'Learn how to promote students and manage class transitions at the end of the academic session.',
  },
};

export default reportCardsGuide;
