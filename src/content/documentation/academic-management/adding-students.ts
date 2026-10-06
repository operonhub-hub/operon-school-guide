import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/Adding Students/01-class-student-registry.jpg';
import orig02 from '../../../../artifacts/documentation/screenshots/Adding Students/02-student-personal-details.jpg';
import orig03 from '../../../../artifacts/documentation/screenshots/Adding Students/03-student-documents.jpg';
import orig04 from '../../../../artifacts/documentation/screenshots/Adding Students/04-student-registered.jpg';
import orig05 from '../../../../artifacts/documentation/screenshots/Adding Students/05-bulk-import-start.jpg';
import orig07 from '../../../../artifacts/documentation/screenshots/Adding Students/07-student-import-template.jpg';
import orig08 from '../../../../artifacts/documentation/screenshots/Adding Students/08-select-import-file.jpg';
import orig09 from '../../../../artifacts/documentation/screenshots/Adding Students/09-review-import.jpg';
import orig10 from '../../../../artifacts/documentation/screenshots/Adding Students/10-import-complete.jpg';
import orig11 from '../../../../artifacts/documentation/screenshots/Adding Students/11-updated-student-list.jpg';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/Adding student/01-class-student-registry.jpg';
import anno02 from '../../../../artifacts/documentation/annotated/Adding student/02-student-personal-details.jpg';
import anno03 from '../../../../artifacts/documentation/annotated/Adding student/03-student-documents.jpg';
import anno04 from '../../../../artifacts/documentation/annotated/Adding student/04-student-registered.jpg';
import anno05 from '../../../../artifacts/documentation/annotated/Adding student/05-bulk-import-start.jpg';
import anno07 from '../../../../artifacts/documentation/annotated/Adding student/07-student-import-template.jpg';
import anno08 from '../../../../artifacts/documentation/annotated/Adding student/08-select-import-file.jpg';
import anno09 from '../../../../artifacts/documentation/annotated/Adding student/09-review-import.jpg';
import anno10 from '../../../../artifacts/documentation/annotated/Adding student/10-import-complete.jpg';
import anno11 from '../../../../artifacts/documentation/annotated/Adding student/11-updated-student-list.jpg';

export const addingStudentsGuide: Guide = {
  id: 'adding-students',
  slug: 'adding-students',
  sectionId: 'academic-management',
  title: 'Adding Students & Bulk Upload',
  shortDescription:
    'Learn how to register students individually or add multiple students to your class using Operon’s bulk upload process.',
  whyItMatters:
    'Keeping your class roster up to date starts with registering students correctly. Operon allows you to add a student individually with detailed supporting records or import several student records at once using a structured spreadsheet.',
  estimatedTime: '7–10 min',
  targetAudience: 'School Administrators & Teachers',
  prerequisites: [
    {
      title: 'Class Arm Access',
      description: 'An administrator or class teacher account with access to the designated class and arm.',
    },
    {
      title: 'Student Information & Records',
      description: 'The student’s personal details, guardian contact, and relevant supporting documents.',
    },
    {
      title: 'Student Spreadsheet (for Bulk Import)',
      description: 'The completed student spreadsheet ready if using the bulk upload workflow.',
    },
  ],
  video: {
    src: '/documentation/videos/academic-management/adding-students-walkthrough.mp4',
    title: 'Adding Students & Bulk Upload Walkthrough',
    duration: '03:10',
    posterUrl: orig01,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Open the Class Student Registry',
      instruction:
        'Open the relevant class cohort and navigate to the Students section, then select Add Student to begin an individual registration.',
      whyItMatters:
        'The Class Student Registry displays all students enrolled in the class and provides the controls for both single registration and bulk import.',
      subSteps: [
        'Navigate to the Classes or Student Roster module from the main menu.',
        'Select the designated class arm to view its student roster.',
        'Click the "+ Add Student" button to begin registering an individual student (or select "Bulk Import" if adding multiple students).',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Operon class student registry with Add Student and Bulk Import options',
        caption: 'Open the class student list and select Add Student or Bulk Import.',
      },
      expectedResult:
        'The student registration modal opens displaying the multi-step enrollment form.',
      whatHappensNext:
        'Enter the student’s personal information.',
    },
    {
      stepNumber: 2,
      title: 'Complete Personal Information',
      instruction:
        'Enter the student’s personal details carefully, ensuring all required fields marked in the form are completed.',
      whyItMatters:
        'Captures the student’s official identity records for school registers, report cards, and official transcripts.',
      subSteps: [
        'Optionally upload a student passport photo.',
        'Enter the student’s First Name, Last Name, and Middle Name.',
        'Select Gender, Date of Birth, Nationality, State of Origin, and Religion.',
        'Enter the Residential Address and optional student phone number.',
        'Click "Next Step" to continue.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Student personal information form with name, gender, and contact fields',
        caption: 'Enter the student’s personal information carefully before proceeding.',
      },
      expectedResult:
        'Personal details are saved and the registration form progresses to the next section.',
      whatHappensNext:
        'Move through the remaining registration sections.',
      tip: 'Ensure the spelling of the student’s name matches their official birth certificate or admission documents.',
    },
    {
      stepNumber: 3,
      title: 'Complete the Remaining Registration Sections',
      instruction:
        'Move through the registration sections to provide the student’s academic, guardian, medical, and supporting information.',
      whyItMatters:
        'A complete student profile connects emergency guardian contacts, medical alerts, and previous academic history to the student’s permanent record.',
      subSteps: [
        'Review the 5-step registration sequence: Personal → Academic → Guardian → Medical → Documents.',
        'Complete the Academic details including admission number and class placement.',
        'Enter Guardian contact information and relationship.',
        'Provide Medical records, allergies, or emergency medical notes.',
        'Continue to the Documents step.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Student registration workflow showing multi-step progression',
        caption: 'Progress through Academic, Guardian, and Medical sections to the Documents step.',
      },
      expectedResult:
        'All student profile sections are completed and validated.',
      whatHappensNext:
        'Upload supporting documents for the student.',
    },
    {
      stepNumber: 4,
      title: 'Upload Supporting Documents',
      instruction:
        'Upload available supporting documents for the student by selecting the appropriate document category and choosing the file.',
      whyItMatters:
        'Keeps official digital copies of student admission documents securely attached to their school profile.',
      subSteps: [
        'Select the document category: Birth Certificate, Previous School Report, Transfer Certificate, Medical Fitness Certificate, or Other Supporting Document.',
        'Upload the digital file from your computer.',
        'Click "Complete Registration" when all information and documents are ready.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Supporting documents upload section with file upload inputs',
        caption: 'Upload supporting documents and select Complete Registration.',
      },
      expectedResult:
        'Documents are uploaded and the registration is submitted.',
      whatHappensNext:
        'Confirm the registered student in your class list.',
    },
    {
      stepNumber: 5,
      title: 'Confirm Student Registration',
      instruction:
        'Confirm that the student appears in the class student list with an active status and complete profile.',
      whyItMatters:
        'Validates that the student is registered and immediately available for attendance, assessments, and gradebooks.',
      subSteps: [
        'Look for the success confirmation message.',
        'Verify that the new student appears in the Class Student list.',
        'Check that their admission number and assigned arm are accurately recorded.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Class student list showing the newly registered student with confirmation',
        caption: 'Confirm that the student appears in the class student list.',
      },
      expectedResult:
        'You’ll know it worked when the student appears in your class student list.',
      whatHappensNext:
        'Now let’s explore the Bulk Import workflow for multiple students.',
    },
    {
      stepNumber: 6,
      title: 'Open Bulk Import',
      instruction:
        'From the class student list, select Bulk Import to open the spreadsheet import modal.',
      whyItMatters:
        'Bulk Import saves significant time by letting you upload an entire class list in a single spreadsheet.',
      subSteps: [
        'Open the class student list in your workspace.',
        'Click the "Bulk Import" button in the upper action bar.',
        'Review the bulk import instructions presented on the screen.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Class student list highlighting the Bulk Import button',
        caption: 'Select Bulk Import from the class student list to begin.',
      },
      expectedResult:
        'The Bulk Import window opens with template download and file upload options.',
      whatHappensNext:
        'Prepare the student spreadsheet.',
    },
    {
      stepNumber: 7,
      title: 'Prepare the Student Spreadsheet',
      instruction:
        'Prepare your student records using the spreadsheet structure provided by Operon, placing each student’s information under the correct columns.',
      whyItMatters:
        'Formatting records accurately in the template ensures seamless column mapping and automated validation.',
      subSteps: [
        'Download or open the Operon student import template.',
        'Fill in student details: First Name, Last Name, Middle Name, Gender, Date of Birth, and Guardian contact info.',
        'Ensure each student’s record occupies a single row under the matching column headers.',
        'Save the file on your computer.',
      ],
      screenshot: {
        originalUrl: orig07,
        annotatedUrl: anno07,
        altText: 'Student import spreadsheet template preview showing column layout',
        caption: 'Prepare your student records using the structured spreadsheet template.',
      },
      expectedResult:
        'The spreadsheet is populated with clean student data and saved locally.',
      whatHappensNext:
        'Select the file for upload.',
      tip: 'Do not alter the column header names in the template to ensure automatic column matching during import.',
    },
    {
      stepNumber: 8,
      title: 'Select the Spreadsheet File',
      instruction:
        'Choose the completed student spreadsheet from your computer and upload it to begin processing records.',
      whyItMatters:
        'Transfers the spreadsheet data to Operon for parsing and data validation.',
      subSteps: [
        'Click the file selection area or drag and drop your spreadsheet into the upload zone.',
        'Select the completed student records file from your computer.',
        'Confirm the file upload to initiate automated parsing.',
      ],
      screenshot: {
        originalUrl: orig08,
        annotatedUrl: anno08,
        altText: 'Bulk import upload area with file selection dialog',
        caption: 'Select the completed spreadsheet from your computer to begin processing.',
      },
      expectedResult:
        'The file is uploaded and Operon parses the student records.',
      whatHappensNext:
        'Review the parsed import records.',
    },
    {
      stepNumber: 9,
      title: 'Review the Import Records',
      instruction:
        'Before completing the import, review the student records detected by Operon and verify that all status indicators show ready.',
      whyItMatters:
        'Allows you to verify data accuracy and resolve any format mismatches before records are committed to the class roster.',
      subSteps: [
        'Inspect the list of detected student records in the preview table.',
        'Check the status indicators for each record (e.g. Valid / Ready).',
        'Verify that names, gender, dates of birth, and assigned class arms are correct.',
        'Click "Continue" or "Import Students" to proceed.',
      ],
      screenshot: {
        originalUrl: orig09,
        annotatedUrl: anno09,
        altText: 'Import review preview showing validated student rows and status badges',
        caption: 'Review the detected student records and status indicators before continuing.',
      },
      expectedResult:
        'All student records are verified and ready for import.',
      whatHappensNext:
        'Confirm import completion.',
    },
    {
      stepNumber: 10,
      title: 'Confirm Import Completion',
      instruction:
        'Operon displays a confirmation summary once all records have been processed and added to the class.',
      whyItMatters:
        'Confirms the exact number of students successfully enrolled into your class roster.',
      subSteps: [
        'Review the final import summary showing total successful student enrollments.',
        'Click "Done" or close the import modal to return to the student list.',
      ],
      screenshot: {
        originalUrl: orig10,
        annotatedUrl: anno10,
        altText: 'Import completion dialog displaying success summary and total imported count',
        caption: 'Review the import confirmation summary before closing the workflow.',
      },
      expectedResult:
        'The import process finishes successfully.',
      whatHappensNext:
        'View the updated class student list.',
    },
    {
      stepNumber: 11,
      title: 'Confirm the Updated Class List',
      instruction:
        'Confirm that the newly imported students now appear in the class student list, ready for daily management.',
      whyItMatters:
        'Your class roster is now complete and synchronized across the platform for attendance, grading, and teacher markbooks.',
      subSteps: [
        'Verify that all imported students are listed in the Class Student table.',
        'Use search or filter tools to locate specific student records.',
        'Review student profiles to verify individual details.',
      ],
      screenshot: {
        originalUrl: orig11,
        annotatedUrl: anno11,
        altText: 'Updated class student roster showing the complete list of registered students',
        caption: 'The imported students now appear in the class student list.',
      },
      expectedResult:
        'The complete class roster is visible and ready for classroom operations.',
      whatHappensNext:
        'Student onboarding is complete! You can now proceed to Taking Attendance.',
    },
  ],
  tips: [
    'You can download the sample template anytime from the Bulk Import window to quickly prepare new batches of students.',
    'Individual student profiles can be edited or updated with additional documents at any point during the school term.',
  ],
  completionSummary:
    'You’re done! You now know how to register a student individually and how to add multiple students using Bulk Import. Your class student roster is up to date and ready for attendance and grading.',
  previousGuide: {
    title: 'Adding Teachers',
    slug: '/docs/academic-management/adding-teachers',
    description: 'Learn how to add teachers and deploy their account credentials.',
  },
  nextGuide: {
    title: 'Taking Attendance',
    slug: '/docs/academic-management/attendance',
    description: 'Learn how to record and manage daily student attendance.',
  },
};

export default addingStudentsGuide;
