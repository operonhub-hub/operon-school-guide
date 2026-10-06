import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/profile-settings/01-profile-workspace.png';
import orig02 from '../../../../artifacts/documentation/screenshots/profile-settings/02-profile-photo-upload.png';
import orig03 from '../../../../artifacts/documentation/screenshots/profile-settings/03-profile-photo-updated.png';
import orig04 from '../../../../artifacts/documentation/screenshots/profile-settings/04-digital-signature.png';
import orig05 from '../../../../artifacts/documentation/screenshots/profile-settings/05-profile-saved.png';
import orig06 from '../../../../artifacts/documentation/screenshots/profile-settings/06-settings-overview.png';
import orig07 from '../../../../artifacts/documentation/screenshots/profile-settings/07-school-logo-upload.png';
import orig08 from '../../../../artifacts/documentation/screenshots/profile-settings/08-school-settings-applied.png';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/profile-settings/01-profile-workspace.png';
import anno02 from '../../../../artifacts/documentation/annotated/profile-settings/02-profile-photo-upload.png';
import anno03 from '../../../../artifacts/documentation/annotated/profile-settings/03-profile-photo-updated.png';
import anno04 from '../../../../artifacts/documentation/annotated/profile-settings/04-digital-signature.png';
import anno05 from '../../../../artifacts/documentation/annotated/profile-settings/05-profile-saved.png';
import anno06 from '../../../../artifacts/documentation/annotated/profile-settings/06-settings-overview.png';
import anno07 from '../../../../artifacts/documentation/annotated/profile-settings/07-school-logo-upload.png';
import anno08 from '../../../../artifacts/documentation/annotated/profile-settings/08-school-settings-applied.png';

export const profileAndSettingsGuide: Guide = {
  id: 'profile-settings',
  slug: 'profile-settings',
  sectionId: 'school-setup',
  title: 'Manage Your Profile & School Settings',
  shortDescription:
    'Learn how to update your administrator profile photo and digital signature, and configure your school’s official logo and contact information.',
  whyItMatters:
    'Updating your profile personalizes your administrative account and attaches your signature where digital signatures are used, while school settings ensure your institution’s name, logo, and contact details are accurate.',
  estimatedTime: '3–4 min',
  targetAudience: 'School Administrators & Principals',
  prerequisites: [
    {
      title: 'Administrator Access',
      description: 'An active administrator account with access to My Profile and Settings.',
    },
    {
      title: 'School Logo Image',
      description: 'An image file of your official school logo or crest.',
    },
    {
      title: 'Digital Signature Image',
      description: 'An image file of your authorized administrative signature.',
    },
    {
      title: 'Profile Photo',
      description: 'A clear photo to use for your administrator profile picture.',
    },
  ],
  video: {
    src: '/documentation/videos/school-setup/profile-settings-walkthrough.mp4',
    title: 'Profile & School Settings Walkthrough',
    duration: '02:15',
    posterUrl: orig01,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Open My Profile Workspace',
      instruction:
        'Click your user avatar in the top-right corner of the navigation bar and select My Profile.',
      whyItMatters:
        'Opens your personal profile workspace where you can manage your avatar, personal details, and digital signature.',
      subSteps: [
        'Click on your avatar or initials in the upper-right corner of the top navigation bar.',
        'Select "My Profile" from the dropdown user menu.',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Navigation bar user dropdown menu highlighting My Profile',
        caption: 'Click your profile avatar in the top-right header and select "My Profile".',
      },
      expectedResult:
        'The My Profile workspace displays your personal details, avatar slot, and signature upload card.',
      whatHappensNext:
        'You will upload your administrator profile photo.',
    },
    {
      stepNumber: 2,
      title: 'Upload Your Profile Photo',
      instruction:
        'In the profile card, click the photo upload button and select an image file from your computer.',
      whyItMatters:
        'Sets a recognizable photo for your administrator profile account.',
      subSteps: [
        'Locate the circular profile avatar in the left profile card.',
        'Click the "Upload Photo" button.',
        'Select an image file from your device.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Profile photo upload selector in the personal profile card',
        caption: 'Click the "Upload Photo" button to select a picture from your device.',
      },
      expectedResult:
        'The file selector opens and loads the selected image into the photo container.',
      whatHappensNext:
        'Review the uploaded photo preview before proceeding to signature upload.',
      tip: 'Choose a clear portrait image with good visibility for your profile avatar.',
    },
    {
      stepNumber: 3,
      title: 'Confirm Your Profile Photo',
      instruction:
        'Check that your uploaded photo displays correctly in the circular preview frame.',
      whyItMatters:
        'Confirms that the photo is properly loaded and visible in your profile.',
      subSteps: [
        'Review the circular avatar frame to verify your photo appears as intended.',
        'Ensure the image is oriented correctly.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Confirmed profile photo rendered in circular preview frame',
        caption: 'Verify that the profile photo displays cleanly in the avatar container.',
      },
      expectedResult:
        'The avatar preview reflects your newly selected profile picture.',
      whatHappensNext:
        'Upload your official digital signature.',
    },
    {
      stepNumber: 4,
      title: 'Add Your Official Digital Signature',
      instruction:
        'In the Official Digital Signature card, click Upload Signature Image and select your signature file.',
      whyItMatters:
        'Attaches your authorized signature to your administrator profile where digital signatures are supported.',
      subSteps: [
        'Locate the "Official Digital Signature" card below your profile photo.',
        'Click "Upload Signature Image".',
        'Select your signature file from your device.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Digital signature upload card with signature preview',
        caption: 'Upload your official signature image in the Signature card.',
      },
      expectedResult:
        'The signature preview updates to show the selected signature image.',
      whatHappensNext:
        'Save your profile changes.',
      tip: 'Use a clear image of your signature on a clean background.',
    },
    {
      stepNumber: 5,
      title: 'Save Your Profile Changes',
      instruction:
        'Click Save Settings to apply your updated profile photo and digital signature.',
      whyItMatters:
        'Applies and saves your updated profile photo and digital signature.',
      subSteps: [
        'Review your personal details and uploaded files.',
        'Click the "Save Settings" button in the personal details card.',
        'Check for the confirmation alert indicating your profile has been updated.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Profile saved confirmation with green success notification banner',
        caption: 'Click "Save Settings" and verify the green success confirmation message.',
      },
      expectedResult:
        'A confirmation notification appears indicating your profile changes have been saved.',
      whatHappensNext:
        'Navigate to Settings to configure school details.',
    },
    {
      stepNumber: 6,
      title: 'Open Settings & System Preferences',
      instruction:
        'In the left sidebar navigation, click Settings to open the school configuration page.',
      whyItMatters:
        'Opens the settings section where institutional details and school branding are configured.',
      subSteps: [
        'Move to the left navigation sidebar.',
        'Click on the "Settings" menu item.',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Sidebar navigation highlighting the Settings menu item',
        caption: 'Click "Settings" in the left navigation menu to view school settings.',
      },
      expectedResult:
        'The School Settings workspace opens displaying your institution’s configuration options.',
      whatHappensNext:
        'Upload your school logo and review school details.',
    },
    {
      stepNumber: 7,
      title: 'Configure School Institution Settings & Logo',
      instruction:
        'Upload your school logo and review your school’s official name, address, email, and phone number.',
      whyItMatters:
        'Keeps your institution’s official identity and contact information up to date.',
      subSteps: [
        'Click the School Logo upload field in the School Information section.',
        'Select your school’s logo image file.',
        'Review and update the School Name, Official Email, Phone Number, and Campus Address.',
      ],
      screenshot: {
        originalUrl: orig07,
        annotatedUrl: anno07,
        altText: 'School institution settings form with School Logo upload highlighted',
        caption: 'Upload the school logo and review institutional contact details.',
      },
      expectedResult:
        'The school logo preview displays your selected emblem.',
      whatHappensNext:
        'Save the updated school settings.',
      tip: 'Use a high-quality logo image file for clear display.',
    },
    {
      stepNumber: 8,
      title: 'Apply School Settings',
      instruction:
        'Click Save Settings to apply the updated school information across the platform.',
      whyItMatters:
        'Applies the updated school logo and institutional contact details.',
      subSteps: [
        'Verify that the logo preview and school contact fields are correct.',
        'Click the primary "Save Settings" button at the bottom of the form.',
        'Confirm the success notification indicating settings have been applied.',
      ],
      screenshot: {
        originalUrl: orig08,
        annotatedUrl: anno08,
        altText: 'School settings applied successfully with confirmation alert',
        caption: 'Click "Save Settings" to apply updated school information.',
      },
      expectedResult:
        'A confirmation notification appears indicating school settings have been updated.',
      whatHappensNext:
        'Proceed to set up your school’s Academic Structure.',
    },
  ],
  tips: [
    'Keep your administrator profile and school contact details up to date so your information is current.',
    'Ensure your school logo and signature images are clear before saving.',
  ],
  warnings: [
    'Upload only authorized school logos and administrator signatures.',
  ],
  completionSummary:
    'You have successfully updated your administrator profile photo and digital signature, and configured your school’s official logo and contact details.',
  previousGuide: {
    title: 'Register Your School',
    slug: '/docs/registration/register-your-school',
    description: 'Learn how to create a school account and complete initial registration.',
  },
  nextGuide: {
    title: 'Set Up an Academic Session',
    slug: '/docs/school-setup/academic-session',
    description: 'Initialize new academic year, set calendar start and end dates, and configure operational terms.',
  },
};

export default profileAndSettingsGuide;
