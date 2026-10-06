import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/registration/01-registration-start.png';
import orig02 from '../../../../artifacts/documentation/screenshots/registration/02-contact-profile.png';
import orig03 from '../../../../artifacts/documentation/screenshots/registration/03-school-identity.png';
import orig03b from '../../../../artifacts/documentation/screenshots/registration/03b-school-identity-form.png';
import orig04 from '../../../../artifacts/documentation/screenshots/registration/04-verify-email.png';
import orig05 from '../../../../artifacts/documentation/screenshots/registration/05-portal-ready.png';
import orig06 from '../../../../artifacts/documentation/screenshots/registration/06-user-login.png';
import orig06b from '../../../../artifacts/documentation/screenshots/registration/06b-user-login-form.png';
import orig07 from '../../../../artifacts/documentation/screenshots/registration/07-update-password.png';
import orig08 from '../../../../artifacts/documentation/screenshots/registration/08-dashboard.png';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/registration/01-registration-start.png';
import anno02 from '../../../../artifacts/documentation/annotated/registration/02-contact-profile.png';
import anno03 from '../../../../artifacts/documentation/annotated/registration/03-school-identity.png';
import anno03b from '../../../../artifacts/documentation/annotated/registration/03b-school-identity-form.png';
import anno04 from '../../../../artifacts/documentation/annotated/registration/04-verify-email.png';
import anno05 from '../../../../artifacts/documentation/annotated/registration/05-portal-ready.png';
import anno06 from '../../../../artifacts/documentation/annotated/registration/06-user-login.png';
import anno06b from '../../../../artifacts/documentation/annotated/registration/06b-user-login-form.png';
import anno07 from '../../../../artifacts/documentation/annotated/registration/07-update-password.png';
import anno08 from '../../../../artifacts/documentation/annotated/registration/08-dashboard.png';

export const registerYourSchoolGuide: Guide = {
  id: 'register-your-school',
  slug: 'register-your-school',
  sectionId: 'getting-started',
  title: 'Register Your School',
  shortDescription:
    'This guide walks a new school administrator through registering their school and gaining access to the Operon platform.',
  whyItMatters:
    'Setting up your school portal correctly establishes your institution’s dedicated subdomain, primary administrative account, and core operating parameters before inviting staff, teachers, and students.',
  estimatedTime: '4–5 min',
  targetAudience: 'School Administrators & Proprietors',
  prerequisites: [
    {
      title: 'Official School Name & Information',
      description: 'Your registered legal school name and physical campus address.',
    },
    {
      title: 'Primary Administrative Email',
      description: 'An active email account you can access immediately for one-time verification codes.',
    },
    {
      title: 'Valid Phone Number',
      description: 'A mobile phone number for institutional contact records and SMS notifications.',
    },
    {
      title: 'Desired Subdomain Prefix',
      description: 'The preferred custom web address for your school (e.g. yourschool.operon.ng).',
    },
  ],
  video: {
    src: '/documentation/videos/registration/registration-walkthrough.mp4',
    title: 'School Registration & Onboarding Walkthrough',
    duration: '03:45',
    posterUrl: orig01,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Select "Register School" on the Landing Page',
      instruction:
        'Start by selecting Register School from the Operon landing page. This begins the school onboarding process and takes you through the information required to create your school account.',
      whyItMatters:
        'Initiates the dedicated institutional provisioning pipeline rather than a standard user sign-in.',
      subSteps: [
        'Open your web browser and navigate to the Operon platform homepage.',
        'Click the primary "REGISTER SCHOOL" button prominently displayed in the hero section.',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Operon Landing Page - Register School Button',
        caption: 'Select the Register School call-to-action on the Operon homepage.',
      },
      expectedResult:
        'The registration modal wizard opens to the contact profile step.',
      whatHappensNext:
        'You will enter the primary administrator contact information.',
    },
    {
      stepNumber: 2,
      title: 'Provide Primary Administrator Contact Profile',
      instruction:
        'Enter the primary administrator contact information in the required fields. This creates the root owner profile responsible for managing your institution.',
      whyItMatters:
        'Your administrator contact information is used to establish the primary account associated with the school and receive critical system notifications.',
      subSteps: [
        'Enter your First Name and Last Name.',
        'Enter your official Administrative Email address.',
        'Enter your Mobile Phone Number.',
        'Click "Next Step" to proceed.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Administrator Contact Profile Form',
        caption: 'Enter administrator full name, email address, and phone number.',
      },
      expectedResult:
        'Your contact details are validated and saved for this registration session.',
      whatHappensNext:
        'The wizard advances to the School Identity configuration screen.',
      tip: 'Use an official institutional email address (e.g., admin@yourschool.com) rather than a personal mailbox.',
    },
    {
      stepNumber: 3,
      title: 'Define Institutional Name & Educational Category',
      instruction:
        'Enter your school name and select the educational category that best represents your institution.',
      whyItMatters:
        'The school name and educational category configure the foundational grading scales, grade levels, and terminology tailored to your curriculum.',
      subSteps: [
        'Type your School Name as you want it displayed on report cards and official documents.',
        'Select your School Category (e.g. Nursery, Primary, Secondary, or K-12).',
        'Specify your custom Subdomain prefix for your dedicated portal URL.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'School Identity and Subdomain Configuration',
        caption: 'Specify your institution name, school category, and custom portal subdomain.',
      },
      expectedResult:
        'Subdomain availability is verified and assigned to your institution.',
      whatHappensNext:
        'You will complete campus location and operational parameters.',
      important:
        'Your custom subdomain cannot be altered after creation without contacting Operon support.',
    },
    {
      stepNumber: 4,
      title: 'Complete Campus Location & Operational Parameters',
      instruction:
        'Fill in the physical campus address, state, country, and primary operating currency for your institution.',
      whyItMatters:
        'Location details and default currency establish baseline settings for fee collection schedules, receipts, and local time zones.',
      subSteps: [
        'Enter the physical Street Address of your primary school campus.',
        'Select your Country, State/Province, and City from the dropdown selectors.',
        'Select your default Currency (e.g. NGN ₦) for invoicing and fee management.',
        'Click "Continue to Verification" to submit school details.',
      ],
      screenshot: {
        originalUrl: orig03b,
        annotatedUrl: anno03b,
        altText: 'Campus Location and Operating Details Form',
        caption: 'Provide physical address, state location, and currency settings.',
      },
      expectedResult:
        'All institution metadata is confirmed and an authentication code is generated.',
      whatHappensNext:
        'A 6-digit one-time security code is dispatched to your administrative email.',
    },
    {
      stepNumber: 5,
      title: 'Verify Administrative Email via One-Time Security Code (OTP)',
      instruction:
        'Check your inbox for the 6-digit verification code sent by Operon and enter the code into the verification input boxes.',
      whyItMatters:
        'Email verification confirms administrator ownership and prevents unauthorized school registrations.',
      subSteps: [
        'Open your email inbox in a separate tab or on your mobile device.',
        'Locate the email from Operon containing your 6-digit one-time password (OTP).',
        'Enter the numeric code into the verification fields on the screen.',
        'Click "Verify & Continue".',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Email Verification OTP Screen',
        caption: 'Enter the 6-digit numeric verification code sent to your administrator email.',
      },
      expectedResult:
        'The verification code is authenticated and your account is approved.',
      whatHappensNext:
        'Operon automatically provisions your dedicated school portal workspace.',
      tip: 'Verification codes expire after 15 minutes. If you do not see the email, check your spam/junk folder or click "Resend Code".',
    },
    {
      stepNumber: 6,
      title: 'Automated Portal & Database Provisioning',
      instruction:
        'Wait while Operon provisions your dedicated database, custom subdomain, and administrative privileges.',
      whyItMatters:
        'Operon deploys an isolated tenant workspace for your school ensuring data privacy and fast access.',
      subSteps: [
        'Allow the automated setup progress bar to complete (typically 5–10 seconds).',
        'Review the confirmation screen displaying your permanent school portal URL.',
        'Click "Proceed to Portal Login".',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Portal Ready Confirmation Screen',
        caption: 'Portal provisioning complete confirmation with assigned school web address.',
      },
      expectedResult:
        'Your dedicated institutional portal is live and ready for secure authentication.',
      whatHappensNext:
        'You will navigate to your new school portal login page.',
    },
    {
      stepNumber: 7,
      title: 'Access the Dedicated School Portal Subdomain',
      instruction:
        'Navigate to your school customized web address (e.g. yourschool.operon.ng) to access the dedicated login interface.',
      whyItMatters:
        'Accessing your dedicated subdomain ensures all subsequent staff and student logins occur within your institution workspace.',
      subSteps: [
        'Confirm the web browser address bar displays your custom school subdomain.',
        'Verify your school name appears on the sign-in greeting banner.',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Dedicated School Portal Login Interface',
        caption: 'The branded sign-in portal on your custom school subdomain.',
      },
      expectedResult:
        'The login page displays your institution branding and credentials input fields.',
      whatHappensNext:
        'Enter your administrator credentials to sign in.',
      tip: 'Bookmark your portal URL in your web browser for quick daily access.',
    },
    {
      stepNumber: 8,
      title: 'Authenticate with Administrator Credentials',
      instruction:
        'Enter your registered administrator email address and the temporary password provided during registration.',
      whyItMatters:
        'Authenticates your identity and grants initial access to the institutional workspace.',
      subSteps: [
        'Type your administrator email into the "Email or Username" field.',
        'Enter your temporary password into the "Password" field.',
        'Click the "Sign In" button.',
      ],
      screenshot: {
        originalUrl: orig06b,
        annotatedUrl: anno06b,
        altText: 'Administrator Sign-In Credentials Form',
        caption: 'Enter administrative email and temporary password to authenticate.',
      },
      expectedResult:
        'Your credentials are authenticated and a mandatory password update prompt appears.',
      whatHappensNext:
        'You will set a permanent, secure password for your administrator account.',
    },
    {
      stepNumber: 9,
      title: 'Set Permanent Administrator Password',
      instruction:
        'Update your temporary password by entering a new, secure password that meets institutional security requirements.',
      whyItMatters:
        'Replacing the temporary password with a private passphrase protects administrative controls and sensitive student data.',
      subSteps: [
        'Enter a New Password containing at least 8 characters with a mix of letters, numbers, and symbols.',
        'Re-type the exact password in the Confirm Password field.',
        'Click "Save & Continue" to lock in your new password.',
      ],
      screenshot: {
        originalUrl: orig07,
        annotatedUrl: anno07,
        altText: 'Update Temporary Password Screen',
        caption: 'Create a permanent secure password for your administrator account.',
      },
      expectedResult:
        'Your permanent administrator credentials are saved and your session is fully authenticated.',
      whatHappensNext:
        'You are redirected directly to the Operon Executive Dashboard.',
      warning:
        'Never share your master administrator password. You will be able to create separate role-restricted logins for other staff members later.',
    },
    {
      stepNumber: 10,
      title: 'Explore Administrator Dashboard & Onboarding Checklist',
      instruction:
        'Review the main Operon dashboard and examine the interactive setup checklist to begin configuring your institution profile, academic sessions, and staff.',
      whyItMatters:
        'The dashboard serves as the central command center for all school operations, attendance, academic records, and fee management.',
      subSteps: [
        'Review the key summary metrics on the dashboard overview.',
        'Locate the "Getting Started" onboarding checklist on the dashboard screen.',
        'Click on "School Profile" to begin uploading your school crest, logo, and motto.',
      ],
      screenshot: {
        originalUrl: orig08,
        annotatedUrl: anno08,
        altText: 'Operon Administrator Dashboard and Onboarding Checklist',
        caption: 'The administrative dashboard overview with the interactive setup checklist.',
      },
      expectedResult:
        'You have full administrative access to your school portal and can begin configuring modules.',
      whatHappensNext:
        'Proceed to the School Profile guide to complete institutional branding.',
    },
  ],
  tips: [
    'Always use an institutional email domain (such as info@yourschool.edu or admin@yourschool.com) for root ownership.',
    'Save your custom school portal link in your browser favorites for quick daily access.',
  ],
  warnings: [
    'Do not share master administrator credentials. Individual staff logins can be created under Administration > Users & Roles.',
  ],
  completionSummary:
    'Congratulations! Your school is now officially registered on Operon with an active dedicated portal subdomain. You have full root administrator privileges and are ready to configure institutional details.',
  previousGuide: {
    title: 'Welcome to Operon',
    slug: '/docs/getting-started/welcome-to-operon',
    description: 'Overview of the Operon ecosystem and architecture.',
  },
  nextGuide: {
    title: 'School Profile Setup',
    slug: '/docs/school-setup/school-profile',
    description: 'Upload your school crest, configure school colors, motto, and campus details.',
  },
};

export default registerYourSchoolGuide;
