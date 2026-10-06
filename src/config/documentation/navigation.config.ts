import { NavigationConfig } from '../../types/documentation/navigation';

export const documentationNavigationConfig: NavigationConfig = {
  sections: [
    {
      id: 'getting-started',
      title: 'Start Here',
      description: 'Step-by-step onboarding, school registration, and first-time account setup.',
      items: [
        {
          id: 'welcome-to-operon',
          title: 'Welcome to Operon',
          slug: 'welcome-to-operon',
          path: '/docs/getting-started/welcome-to-operon',
        },
        {
          id: 'register-your-school',
          title: 'Register Your School',
          slug: 'register-your-school',
          path: '/docs/registration/register-your-school',
          badge: 'Essential',
        },
        {
          id: 'verify-your-account',
          title: 'Verify Your Account',
          slug: 'verify-your-account',
          path: '/docs/getting-started/verify-your-account',
        },
        {
          id: 'sign-in',
          title: 'Sign In & Passwords',
          slug: 'sign-in',
          path: '/docs/getting-started/sign-in',
        },
      ],
    },
    {
      id: 'school-setup',
      title: 'Set Up Your School',
      description: 'Configure your school identity, logo, academic calendar, sessions, and staff.',
      items: [
        {
          id: 'school-profile',
          title: 'School Profile & Settings',
          slug: 'profile-settings',
          path: '/docs/school-setup/profile-settings',
          badge: 'Setup',
        },
        {
          id: 'academic-session',
          title: 'Academic Session & Terms',
          slug: 'academic-session',
          path: '/docs/school-setup/academic-session',
          badge: 'Calendar',
        },
        {
          id: 'academic-structure',
          title: 'Academic Structure',
          slug: 'academic-structure',
          path: '/docs/school-setup/academic-structure',
        },
        {
          id: 'subjects',
          title: 'Subjects & Curriculum',
          slug: 'subjects',
          path: '/docs/school-setup/subjects',
        },
        {
          id: 'classes-and-arms',
          title: 'Classes & Arms',
          slug: 'classes-and-arms',
          path: '/docs/school-setup/classes-and-arms',
        },
        {
          id: 'staff',
          title: 'Staff & Teachers',
          slug: 'staff',
          path: '/docs/school-setup/staff',
        },
      ],
    },
    {
      id: 'academic-management',
      title: 'Teaching & Academics',
      description: 'Manage classroom attendance, assessments, scores, student records, and report cards.',
      items: [
        {
          id: 'students',
          title: 'Student Roster & Profiles',
          slug: 'students',
          path: '/docs/academic-management/students',
        },
        {
          id: 'teachers',
          title: 'Teacher Assignments',
          slug: 'teachers',
          path: '/docs/academic-management/teachers',
        },
        {
          id: 'classes-and-subjects',
          title: 'Classes & Subjects',
          slug: 'classes-and-subjects',
          path: '/docs/academic-management/classes-and-subjects',
          badge: 'Structure',
        },
        {
          id: 'adding-teachers',
          title: 'Adding Teachers',
          slug: 'adding-teachers',
          path: '/docs/academic-management/adding-teachers',
          badge: 'Staff',
        },
        {
          id: 'adding-students',
          title: 'Adding Students & Bulk Upload',
          slug: 'adding-students',
          path: '/docs/academic-management/adding-students',
          badge: 'Roster',
        },
        {
          id: 'attendance',
          title: 'Taking Attendance',
          slug: 'attendance',
          path: '/docs/academic-management/attendance',
          badge: 'Daily',
        },
        {
          id: 'assessment',
          title: 'Assessments & Score Entry',
          slug: 'assessment',
          path: '/docs/academic-management/assessment',
          badge: 'Grading',
        },
        {
          id: 'early-years-skills',
          title: 'Early Years Skills Assessment',
          slug: 'early-years-skills',
          path: '/docs/academic-management/early-years-skills',
          badge: 'Early Years',
        },
        {
          id: 'report-cards',
          title: 'Report Cards & Grading',
          slug: 'report-cards',
          path: '/docs/academic-management/report-cards',
        },
        {
          id: 'academic-transition',
          title: 'Promotions & Class Transitions',
          slug: 'academic-transition',
          path: '/docs/academic-management/academic-transition',
        },
      ],
    },
    {
      id: 'finance',
      title: 'Money & Payments',
      description: 'Setup school bank accounts, fee schedules, invoices, and payment tracking.',
      items: [
        {
          id: 'payment-account-setup',
          title: 'Payment Account Setup',
          slug: 'payment-account-setup',
          path: '/docs/finance/payment-account-setup',
        },
        {
          id: 'payments-and-collections',
          title: 'Fee Collection & Receipts',
          slug: 'payments-and-collections',
          path: '/docs/finance/payments-and-collections',
        },
      ],
    },
    {
      id: 'communication',
      title: 'Communication & Parents',
      description: 'Send announcements, notifications, and communicate directly with parents.',
      items: [
        {
          id: 'messages',
          title: 'Announcements & Messages',
          slug: 'messages',
          path: '/docs/communication/messages',
        },
        {
          id: 'parent-communication',
          title: 'Parent Communication Channels',
          slug: 'parent-communication',
          path: '/docs/communication/parent-communication',
        },
      ],
    },
    {
      id: 'administration',
      title: 'School Administration',
      description: 'User access levels, administrator roles, permissions, and security settings.',
      items: [
        {
          id: 'users-and-roles',
          title: 'Staff Roles & Permissions',
          slug: 'users-and-roles',
          path: '/docs/administration/users-and-roles',
        },
        {
          id: 'settings',
          title: 'System Preferences',
          slug: 'settings',
          path: '/docs/administration/settings',
        },
      ],
    },
  ],
};
