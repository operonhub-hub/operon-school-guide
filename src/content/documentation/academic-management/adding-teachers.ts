import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/adding teachers/01-teachers-registry.jpg';
import orig02 from '../../../../artifacts/documentation/screenshots/adding teachers/02-teacher-details.jpg';
import orig03 from '../../../../artifacts/documentation/screenshots/adding teachers/03-roles-and-allocations.jpg';
import orig04 from '../../../../artifacts/documentation/screenshots/adding teachers/04-teacher-created.jpg';
import orig05 from '../../../../artifacts/documentation/screenshots/adding teachers/05-welcome-email.jpg';
import orig06 from '../../../../artifacts/documentation/screenshots/adding teachers/06-first-login.jpg';
import orig07 from '../../../../artifacts/documentation/screenshots/adding teachers/07-change-temporary-password.jpg';
import orig08 from '../../../../artifacts/documentation/screenshots/adding teachers/08-strong-password.jpg';
import orig09 from '../../../../artifacts/documentation/screenshots/adding teachers/09-teacher-dashboard.jpg';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/adding teachers/01-teachers-registry.jpg';
import anno02 from '../../../../artifacts/documentation/annotated/adding teachers/02-teacher-details.jpg';
import anno03 from '../../../../artifacts/documentation/annotated/adding teachers/03-roles-and-allocations.jpg';
import anno04 from '../../../../artifacts/documentation/annotated/adding teachers/04-teacher-created.jpg';
import anno05 from '../../../../artifacts/documentation/annotated/adding teachers/05-welcome-email.jpg';
import anno06 from '../../../../artifacts/documentation/annotated/adding teachers/06-first-login.jpg';
import anno07 from '../../../../artifacts/documentation/annotated/adding teachers/07-change-temporary-password.jpg';
import anno08 from '../../../../artifacts/documentation/annotated/adding teachers/08-strong-password.jpg';
import anno09 from '../../../../artifacts/documentation/annotated/adding teachers/09-teacher-dashboard.jpg';

export const addingTeachersGuide: Guide = {
  id: 'adding-teachers',
  slug: 'adding-teachers',
  sectionId: 'academic-management',
  title: 'Adding Teachers',
  shortDescription:
    'Learn how to add teachers to your school, assign their responsibilities, and help them access their Operon account.',
  whyItMatters:
    'Adding teachers to Operon gives each member of your teaching team their own account and the right access for the work they are responsible for. Administrators can configure teacher profiles, teaching roles, class responsibilities, and subject allocations in one place.',
  estimatedTime: '5–7 min',
  targetAudience: 'School Administrators',
  prerequisites: [
    {
      title: 'School Administrator Access',
      description: 'An active administrator account with permissions to manage staff records and teacher credentials.',
    },
    {
      title: 'Staff Information & Email',
      description: 'The teacher’s full name, valid staff email address, contact phone, and assigned classes or subjects.',
    },
  ],
  video: {
    src: '/documentation/videos/academic-management/adding-teachers-walkthrough.mp4',
    title: 'Adding Teachers Setup Walkthrough',
    duration: '01:25',
    posterUrl: orig01,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Open the Teachers Registry',
      instruction:
        'From the main navigation, open Teachers to access your school’s Teachers Registry, then select Add Teacher.',
      whyItMatters:
        'The Teachers Registry provides a centralized overview of all staff members and serves as the launchpad for creating new teacher accounts.',
      subSteps: [
        'Open your school dashboard navigation.',
        'Select "Teachers" from the main menu.',
        'Click the "+ Add Teacher" button in the upper toolbar to begin creating the teacher’s account.',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Operon Teachers Registry showing the Add Teacher button',
        caption: 'Open Teachers to view the registry and select Add Teacher.',
      },
      expectedResult:
        'The teacher creation wizard opens displaying the teacher details form.',
      whatHappensNext:
        'Enter the teacher’s personal and contact details.',
    },
    {
      stepNumber: 2,
      title: 'Enter Teacher Details',
      instruction:
        'Enter the teacher’s details carefully, especially their staff email address, which is used for account communication and login credentials.',
      whyItMatters:
        'Accurate contact details ensure that welcome emails and login instructions are delivered to the correct recipient without delay.',
      subSteps: [
        'Select the teacher’s Title (e.g. Mr., Mrs., Dr.).',
        'Enter the teacher’s First Name and Last Name.',
        'Type the teacher’s official Staff Email Address.',
        'Enter the Contact Phone number.',
        'Optionally upload a teacher passport photo where applicable.',
        'Click "Next" to continue to role assignments.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Enter Teacher Details form with title, name, email, and phone fields',
        caption: 'Enter teacher identity and contact details carefully before continuing.',
      },
      expectedResult:
        'Teacher profile information is captured and validated.',
      whatHappensNext:
        'Set the teacher’s teaching roles and allocations.',
      tip: 'Double-check the staff email address before proceeding to ensure onboarding emails reach the teacher.',
    },
    {
      stepNumber: 3,
      title: 'Set Teaching Roles and Allocations',
      instruction:
        'Configure the teacher’s responsibilities by selecting whether they serve as a Class Teacher, Subject Teacher, or both.',
      whyItMatters:
        'Assigning accurate roles grants the teacher direct access to their assigned class registers, attendance sheets, and subject markbooks.',
      subSteps: [
        'Select "Class Teacher" if the teacher is responsible for a class arm, and choose the relevant classroom division.',
        'Select "Subject Teacher" if the teacher teaches specific courses across classes.',
        'Under Teaching Subject Allocations, add the subject and select the applicable class arm assignments.',
        'Click "Next" to review account deployment.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Roles and Allocations setup showing class teacher arm and subject allocations',
        caption: 'Assign class arm leadership and teaching subject allocations.',
      },
      expectedResult:
        'Roles and course allocations are mapped to the teacher’s account profile.',
      whatHappensNext:
        'Deploy the teacher’s credentials.',
    },
    {
      stepNumber: 4,
      title: 'Deploy Teacher Credentials',
      instruction:
        'Once the teacher’s details, roles, and assignments are complete, select Deploy Credentials to create their account and dispatch their welcome package.',
      whyItMatters:
        'Creates the secure user record on Operon and sends onboarding credentials directly to the teacher’s email.',
      subSteps: [
        'Review the teacher’s profile details, assigned roles, and subject allocations.',
        'Click the primary "Deploy Credentials" button.',
        'Confirm that the teacher appears in the Teachers Registry with an active status.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Teachers Registry displaying the newly deployed teacher account',
        caption: 'Deploy credentials to create the teacher account and dispatch the welcome email.',
      },
      expectedResult:
        'You’ll know it worked when the teacher appears in the Teachers Registry.',
      whatHappensNext:
        'The teacher receives their welcome email.',
    },
    {
      stepNumber: 5,
      title: 'Teacher Receives the Welcome Email',
      instruction:
        'After the account is created, the teacher receives a welcome email containing information about their assigned responsibilities and their portal login credentials.',
      whyItMatters:
        'Provides the teacher with their registered staff email, temporary password, and direct portal link to sign in for the first time.',
      subSteps: [
        'The teacher opens the onboarding email sent to their registered staff address.',
        'Review their assigned teaching roles, classroom arm, and subject allocations.',
        'Note their registered email address and temporary password.',
        'Click the portal link to open the sign-in page.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Welcome email showing teacher roles, subject allocations, and login credentials',
        caption: 'The welcome email provides assigned roles, class allocations, and login credentials.',
      },
      expectedResult:
        'The teacher has their portal credentials and is ready for first-time sign-in.',
      whatHappensNext:
        'The teacher completes their first login.',
    },
    {
      stepNumber: 6,
      title: 'Sign In to the Portal',
      instruction:
        'The teacher enters the email address provided in their welcome message and their temporary password, then selects Access Dashboard.',
      whyItMatters:
        'Authenticates the teacher on the school portal and initiates the one-time security setup.',
      subSteps: [
        'Navigate to the Operon school portal login page.',
        'Enter the registered staff email address.',
        'Enter the temporary password provided in the welcome message.',
        'Click "Access Dashboard" to continue.',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Teacher sign-in page with email, password fields, and Access Dashboard button',
        caption: 'Enter the registered email and temporary password to initiate first-time login.',
      },
      expectedResult:
        'Operon validates the credentials and prompts the teacher to update their temporary password.',
      whatHappensNext:
        'Update the temporary password.',
    },
    {
      stepNumber: 7,
      title: 'Update the Temporary Password',
      instruction:
        'Enter the current temporary password, then prepare to create a new personal password.',
      whyItMatters:
        'Replacing the system-generated temporary password secures the teacher’s account with their own private credentials.',
      subSteps: [
        'Enter the temporary password received in the welcome email into the Current Temporary Password field.',
        'Move to the New Password field.',
      ],
      screenshot: {
        originalUrl: orig07,
        annotatedUrl: anno07,
        altText: 'Update Temporary Password form with current and new password inputs',
        caption: 'Enter the temporary password and prepare to set a personal password.',
      },
      expectedResult:
        'The password update screen is ready for new password entry.',
      whatHappensNext:
        'Create a strong secure password.',
    },
    {
      stepNumber: 8,
      title: 'Create a Strong Password',
      instruction:
        'Create a secure personal password that satisfies all security requirements, confirm the password, and select Save and Continue.',
      whyItMatters:
        'A strong password protects student grades, attendance records, and personal teacher data.',
      subSteps: [
        'Type a new password that fulfills the displayed requirements (minimum length, uppercase letter, lowercase letter, number, and special character).',
        'Re-enter the password in the Confirm New Password field.',
        'Ensure all requirement indicators turn green.',
        'Click "Save and Continue" to commit your new password.',
      ],
      screenshot: {
        originalUrl: orig08,
        annotatedUrl: anno08,
        altText: 'Password creation form showing security checklist and Save and Continue button',
        caption: 'Ensure all password security requirements are satisfied, then click Save and Continue.',
      },
      expectedResult:
        'Password is saved and the teacher session is initialized.',
      whatHappensNext:
        'The teacher enters their personal dashboard.',
    },
    {
      stepNumber: 9,
      title: 'Explore the Teacher Dashboard',
      instruction:
        'The teacher is now signed in to their Operon dashboard, where they can view their assigned class workspace, timetable, and course allocations.',
      whyItMatters:
        'Provides teachers with immediate access to daily classroom management tools including attendance tracking, grade entries, and announcements.',
      subSteps: [
        'Verify your teacher identity and assigned role in the dashboard header.',
        'Review your Class Teacher workspace, assigned arms, and active subjects.',
        'Check teacher alerts, timetable schedule, and navigation shortcuts.',
      ],
      screenshot: {
        originalUrl: orig09,
        annotatedUrl: anno09,
        altText: 'Operon Teacher Dashboard displaying class arms, timetable, and teaching tools',
        caption: 'The teacher dashboard displays class arms, subjects, timetable, and teaching tools.',
      },
      expectedResult:
        'The teacher is signed in to their Operon dashboard and ready to manage classes and subjects.',
      whatHappensNext:
        'Teacher onboarding is complete!',
    },
  ],
  tips: [
    'Teachers can update their profile picture and personal preferences anytime from their account settings.',
    'If a teacher forgets their password later, administrators can trigger a password reset from the Teachers Registry.',
  ],
  completionSummary:
    'You’re done! The teacher’s Operon account is now active, their responsibilities have been configured, and they can securely access their teacher dashboard.',
  previousGuide: {
    title: 'Classes & Subjects',
    slug: '/docs/academic-management/classes-and-subjects',
    description: 'Learn how to organize classes, create class arms, and configure subjects.',
  },
  nextGuide: {
    title: 'Adding Students & Bulk Upload',
    slug: '/docs/academic-management/adding-students',
    description: 'Learn how to register students individually or import multiple records using a spreadsheet.',
  },
};

export default addingTeachersGuide;
