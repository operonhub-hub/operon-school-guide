import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/classes and subjects/01-classes-dashboard.jpg';
import orig02 from '../../../../artifacts/documentation/screenshots/classes and subjects/02-create-class.jpg';
import orig03 from '../../../../artifacts/documentation/screenshots/classes and subjects/03-class-created.jpg';
import orig04 from '../../../../artifacts/documentation/screenshots/classes and subjects/04-create-arm.jpg';
import orig05 from '../../../../artifacts/documentation/screenshots/classes and subjects/05-arm-created.jpg';
import orig06 from '../../../../artifacts/documentation/screenshots/classes and subjects/06-subjects-dashboard.jpg';
import orig07 from '../../../../artifacts/documentation/screenshots/classes and subjects/07-subject-information.jpg';
import orig08 from '../../../../artifacts/documentation/screenshots/classes and subjects/08-academic-section.jpg';
import orig09 from '../../../../artifacts/documentation/screenshots/classes and subjects/09-subject-type-status.jpg';
import orig10 from '../../../../artifacts/documentation/screenshots/classes and subjects/10-subject-created.jpg';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/classes and subject/01_classes_dashboard.png';
import anno02 from '../../../../artifacts/documentation/annotated/classes and subject/02_create_class.png';
import anno03 from '../../../../artifacts/documentation/annotated/classes and subject/03_class_created.png';
import anno04 from '../../../../artifacts/documentation/annotated/classes and subject/04_create_arm.png';
import anno05 from '../../../../artifacts/documentation/annotated/classes and subject/05_arm_created.png';
import anno06 from '../../../../artifacts/documentation/annotated/classes and subject/06_subjects_dashboard.png';
import anno07 from '../../../../artifacts/documentation/annotated/classes and subject/07_subject_information.png';
import anno08 from '../../../../artifacts/documentation/annotated/classes and subject/08_subject_section.png';
import anno09 from '../../../../artifacts/documentation/annotated/classes and subject/09_subject_type_status.png';
import anno10 from '../../../../artifacts/documentation/annotated/classes and subject/10_subject_created.png';

export const classesAndSubjectsGuide: Guide = {
  id: 'classes-and-subjects',
  slug: 'classes-and-subjects',
  sectionId: 'academic-management',
  title: 'Classes & Subjects',
  shortDescription:
    'Learn how to organize your school’s classes, create class arms, and set up the subjects students will take.',
  whyItMatters:
    'Before students can be properly organized and managed in Operon, your school needs a clear academic structure. A properly configured class and subject structure makes student enrollment, teacher assignments, attendance, assessments, and report cards easy to manage.',
  estimatedTime: '5–7 min',
  targetAudience: 'School Administrators & Academic Coordinators',
  prerequisites: [
    {
      title: 'Active Academic Session',
      description: 'An initialized academic year and active term configured in your school portal.',
    },
    {
      title: 'School Administrator Access',
      description: 'An administrator or academic officer account with permission to manage class cohorts and subjects.',
    },
  ],
  video: {
    src: '/documentation/videos/academic-management/classes-and-subjects-walkthrough.mp4',
    title: 'Classes & Subjects Setup Walkthrough',
    duration: '02:51',
    posterUrl: orig01,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Open Classes',
      instruction:
        'From the main navigation, open Classes to begin setting up your school’s class structure.',
      whyItMatters:
        'The Classes dashboard provides an overview of all active class levels and cohorts in your school.',
      subSteps: [
        'Open your Operon school dashboard navigation.',
        'Select "Classes" from the main menu.',
        'Review the Class Cohorts list and existing grade levels.',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Operon Classes page showing class cohorts list and action buttons',
        caption: 'Open Classes to begin building your school’s class structure.',
      },
      expectedResult:
        'The Classes dashboard displays your current class cohorts and deployment options.',
      whatHappensNext:
        'Create your new class level.',
    },
    {
      stepNumber: 2,
      title: 'Create a Class Level',
      instruction:
        'Select New Class Level, then enter the name of the class you want to create.',
      whyItMatters:
        'Defines the academic grade or level (e.g. JSS 1, Primary 3, or SSS 2) for your student cohorts.',
      subSteps: [
        'Click the "+ New Class Level" button in the Classes workspace.',
        'Enter the official class name into the Class Level field.',
        'Click "Deploy Class Level" to initialize the class.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Create Class Level modal dialog with input field and deploy button',
        caption: 'Enter the class information and deploy the class level.',
      },
      expectedResult:
        'The class level is created and ready for arm subdivisions.',
      whatHappensNext:
        'Confirm the newly deployed class in your Class Cohorts list.',
    },
    {
      stepNumber: 3,
      title: 'Confirm the Class',
      instruction:
        'Verify that your new class level appears in the Class Cohorts list and shows an active status.',
      whyItMatters:
        'Ensures the grade level is active and available for organizing student divisions.',
      subSteps: [
        'Locate the newly created class in the Class Cohorts table.',
        'Confirm that the class level status badge is active.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Class Cohorts list displaying the newly created class level',
        caption: 'Confirm that the new class appears in Class Cohorts.',
      },
      expectedResult:
        'You’ll know it worked when the new class appears in your Class Cohorts list.',
      whatHappensNext:
        'Create an arm or subdivision for this class level.',
    },
    {
      stepNumber: 4,
      title: 'Create a Class Arm',
      instruction:
        'Open the appropriate class cohort and create an arm or subdivision for the class.',
      whyItMatters:
        'Arms divide students in the same class level into manageable classrooms (e.g. Arm A, Gold, or Blue).',
      subSteps: [
        'Click "+ Create Arm" or open the class cohort details.',
        'Select the Class Cohort to associate with this arm.',
        'Enter the Arm/Subdivision Name.',
        'Optionally select the Initial Class Teacher if one is already assigned.',
        'Click "Deploy Arm" to confirm.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Create Arm dialog showing class cohort, arm name, and teacher assignment',
        caption: 'Create the arm and optionally assign the initial class teacher.',
      },
      expectedResult:
        'The arm is created under the selected class cohort.',
      whatHappensNext:
        'Verify the arm in the Arm Divisions registry.',
      tip: 'Assigning a class teacher is optional during arm creation and can be updated anytime later in Teacher Assignments.',
    },
    {
      stepNumber: 5,
      title: 'Confirm the Class Arm',
      instruction:
        'Confirm that the new arm is visible in the Arm Divisions list under its parent class level.',
      whyItMatters:
        'Validates that the class division is active and ready for student enrollment.',
      subSteps: [
        'Check the Arm Divisions list for your newly created arm.',
        'Verify the linked class cohort and operational details.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Arm Divisions list showing the newly deployed class arm',
        caption: 'Verify that the newly deployed arm appears in the Arm Divisions list.',
      },
      expectedResult:
        'The arm appears in the Arm Divisions list with active status.',
      whatHappensNext:
        'Now let’s set up your subjects.',
    },
    {
      stepNumber: 6,
      title: 'Open Subjects',
      instruction:
        'From the main navigation, open Subjects, then select Add Subject.',
      whyItMatters:
        'The Subject Registry contains the complete catalog of academic courses offered at your school.',
      subSteps: [
        'Navigate to "Subjects" in the main menu.',
        'Review the Subject Registry dashboard.',
        'Click the primary "+ Add Subject" button.',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Subjects dashboard showing Subject Registry and Add Subject action',
        caption: 'Open Subjects to view the Subject Registry and add new subjects.',
      },
      expectedResult:
        'The Subject Registry opens and displays the creation controls.',
      whatHappensNext:
        'Enter the subject information.',
    },
    {
      stepNumber: 7,
      title: 'Enter Subject Information',
      instruction:
        'Give the subject a clear name that teachers and students will recognize, along with an optional subject code and description.',
      whyItMatters:
        'Accurate subject naming prevents confusion on student report cards and timetables.',
      subSteps: [
        'Type the Subject Name (e.g. Mathematics, English Language, Basic Science).',
        'Enter a Subject Code if your school uses standard abbreviations (e.g. MTH, ENG).',
        'Add an optional description if helpful for curriculum records.',
      ],
      screenshot: {
        originalUrl: orig07,
        annotatedUrl: anno07,
        altText: 'Add Subject dialog with name, code, and description fields',
        caption: 'Add the subject information before continuing.',
      },
      expectedResult:
        'Subject name and basic info are recorded.',
      whatHappensNext:
        'Select the academic section for this subject.',
    },
    {
      stepNumber: 8,
      title: 'Select the Academic Section',
      instruction:
        'Select the academic section where the subject will be offered, then continue to configuration.',
      whyItMatters:
        'Associates the subject with the appropriate school tier (e.g. Junior Secondary, Senior Secondary, or Primary).',
      subSteps: [
        'Choose the appropriate Academic Section from the dropdown list.',
        'Click "Next" to proceed to subject properties.',
      ],
      screenshot: {
        originalUrl: orig08,
        annotatedUrl: anno08,
        altText: 'Academic Section selector dialog for subject configuration',
        caption: 'Select the academic section where the subject is taught.',
      },
      expectedResult:
        'The academic section is linked to the subject.',
      whatHappensNext:
        'Set the subject type and operational status.',
    },
    {
      stepNumber: 9,
      title: 'Set Subject Type and Status',
      instruction:
        'Configure whether the subject is compulsory or elective, and confirm that its status is set to Active.',
      whyItMatters:
        'Compulsory subjects are taken by all students in that section, while Electives allow students to select specialized courses.',
      subSteps: [
        'Select the Subject Type: choose "Compulsory" if mandatory for all students, or "Elective" if optional.',
        'Ensure the Status is set to "Active" so the subject is available for registration and grading.',
        'Click "Save Subject" to commit your configuration.',
      ],
      screenshot: {
        originalUrl: orig09,
        annotatedUrl: anno09,
        altText: 'Subject Type and Status options dialog with Compulsory/Elective choices',
        caption: 'Configure compulsory/elective status and activate the subject.',
      },
      expectedResult:
        'Subject classification and active status are confirmed.',
      whatHappensNext:
        'Confirm the new subject in the registry.',
    },
    {
      stepNumber: 10,
      title: 'Confirm the Subject',
      instruction:
        'Complete the setup and confirm that the subject has been added successfully to the Subject Registry.',
      whyItMatters:
        'Ensures the subject is fully registered and ready for teacher allocation and student grading.',
      subSteps: [
        'Look for the success confirmation notification.',
        'Verify that the new subject appears in the Subject Registry with the correct code, section, and type.',
      ],
      screenshot: {
        originalUrl: orig10,
        annotatedUrl: anno10,
        altText: 'Subject Registry showing the newly registered subject and success confirmation',
        caption: 'Confirm the newly registered subject in your Subject Registry.',
      },
      expectedResult:
        'You’ll know you’re done when the success message appears and your new subject is visible in the Subject Registry.',
      whatHappensNext:
        'Your classes and subjects are ready. You can now proceed to Teacher Assignments.',
    },
  ],
  tips: [
    'You can add more arms or subjects at any time as your school grows during the academic session.',
    'Once your subjects and classes are ready, you can continue with teacher assignments in the Teacher Assignments module.',
  ],
  completionSummary:
    'You’re done! Your class levels, arms, and subjects are now organized in Operon. Your school structure is ready for student enrollment and teacher assignments.',
  previousGuide: {
    title: 'Set Up an Academic Session',
    slug: '/docs/school-setup/academic-session',
    description: 'Initialize your academic session and term schedule.',
  },
  nextGuide: {
    title: 'Adding Teachers',
    slug: '/docs/academic-management/adding-teachers',
    description: 'Learn how to add teachers to your school and configure their portal access.',
  },
};

export default classesAndSubjectsGuide;
