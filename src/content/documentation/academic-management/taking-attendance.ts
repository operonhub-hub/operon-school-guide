import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/attendance/01-open-attendance.jpg';
import orig02 from '../../../../artifacts/documentation/screenshots/attendance/02-mark-attendance.jpg';
import orig03 from '../../../../artifacts/documentation/screenshots/attendance/03-submit-attendance.jpg';
import orig04 from '../../../../artifacts/documentation/screenshots/attendance/04-saved-confirmation.jpg';
import orig05 from '../../../../artifacts/documentation/screenshots/attendance/05-attendance-analytics.jpg';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/attendance/01-open-attendance.jpg';
import anno02 from '../../../../artifacts/documentation/annotated/attendance/02-mark-attendance.jpg';
import anno03 from '../../../../artifacts/documentation/annotated/attendance/03-submit-attendance.jpg';
import anno04 from '../../../../artifacts/documentation/annotated/attendance/04-saved-confirmation.jpg';
import anno05 from '../../../../artifacts/documentation/annotated/attendance/05-attendance-analytics.jpg';

export const takingAttendanceGuide: Guide = {
  id: 'taking-attendance',
  slug: 'taking-attendance',
  sectionId: 'academic-management',
  title: 'Taking Attendance',
  shortDescription:
    'Learn how to record daily attendance for your class and review attendance information to identify students who may need attention.',
  whyItMatters:
    'Recording attendance in Operon helps you keep an accurate daily record of who is present and who is absent. Once attendance is submitted, you can also review attendance information and identify students who may need follow-up.',
  estimatedTime: '4–6 min',
  targetAudience: 'Teachers',
  prerequisites: [
    {
      title: 'Signed in to Operon',
      description: 'You are signed in to your teacher account on the school portal.',
    },
    {
      title: 'Class Arm Access',
      description: 'You have assigned access to the relevant class arm.',
    },
    {
      title: 'Correct Attendance Date',
      description: 'You are recording attendance for the designated operational date.',
    },
  ],
  video: {
    src: '/documentation/videos/academic-management/taking-attendance-walkthrough.mp4',
    title: 'Taking Attendance Walkthrough',
    duration: '01:52',
    posterUrl: orig01,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Open Attendance',
      instruction:
        'Open the Attendance section for the class you want to record, and confirm that the class arm and attendance date are correct before marking students.',
      whyItMatters:
        'Verifying the class and date ensures attendance records are accurately logged in the official school calendar.',
      subSteps: [
        'From your teacher dashboard or main menu, open the Attendance workspace.',
        'Select the designated class arm.',
        'Confirm that the attendance date matches the current operational day.',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Operon attendance page for a class.',
        caption: 'Open Attendance and confirm the class arm and date before marking students.',
      },
      expectedResult:
        'The class attendance register opens with the student roster listed for the selected date.',
      whatHappensNext:
        'Mark student attendance.',
    },
    {
      stepNumber: 2,
      title: 'Mark Students Present or Absent',
      instruction:
        'Review the students listed for the selected date and mark attendance according to who is present, paying particular attention to students who are absent before submitting.',
      whyItMatters:
        'Accurate daily marking ensures attendance statistics and student health records reflect actual classroom presence.',
      subSteps: [
        'Review the student list populated for the selected date.',
        'Review the attendance status for each student and change the status when necessary.',
        'Pay particular attention to students who are absent before submitting.',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Operon class attendance list with student attendance controls.',
        caption: 'Review the attendance status for each student and update accordingly.',
      },
      expectedResult:
        'All students on the roster have their attendance status properly marked.',
      whatHappensNext:
        'Submit the day’s attendance.',
    },
    {
      stepNumber: 3,
      title: 'Submit the Attendance',
      instruction:
        'After reviewing the attendance list, submit the attendance for the selected date to record the day’s session in Operon.',
      whyItMatters:
        'Submitting locks in the official attendance record for the date and updates school-wide reporting.',
      subSteps: [
        'Check the list once more before submitting so that any absent students have been recorded correctly.',
        'Click the primary "Submit Attendance" button.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Operon attendance page showing the attendance submission action.',
        caption: 'Review the attendance list and submit the record for the day.',
      },
      expectedResult:
        'The attendance record is transmitted and submitted to the system.',
      whatHappensNext:
        'Confirm that the attendance was saved.',
    },
    {
      stepNumber: 4,
      title: 'Confirm It Was Saved',
      instruction:
        'After submission, Operon confirms that the attendance has been saved. Use the confirmation as your indication that the day’s attendance record has been recorded successfully.',
      whyItMatters:
        'Gives teachers immediate verification that the daily attendance record has been safely committed.',
      subSteps: [
        'Look for the saved confirmation notification on the screen.',
        'Confirm that the attendance record displays as saved for the active date.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Operon attendance confirmation after submitting daily attendance.',
        caption: 'Confirm the saved confirmation indicating the day’s record has been logged.',
      },
      expectedResult:
        'You’ll know it worked when the saved confirmation appears.',
      whatHappensNext:
        'Review attendance analytics and student attendance health.',
    },
    {
      stepNumber: 5,
      title: 'Review Attendance Analytics',
      instruction:
        'Open the attendance analytics area to review attendance information for your class. Use the attendance information to spot students whose attendance may require follow-up, and where the Student Attendance Health Ledger is available, use it to identify students who may need closer attention.',
      whyItMatters:
        'Helps teachers identify recurring absence trends early and provide timely support or follow-up for students.',
      subSteps: [
        'Navigate to the attendance analytics area.',
        'Review attendance performance and summary metrics for your class.',
        'Inspect the Student Attendance Health Ledger to identify students who may need closer attention.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Operon attendance analytics and student attendance health information.',
        caption: 'Use attendance analytics and the Student Attendance Health Ledger to identify students needing follow-up.',
      },
      expectedResult:
        'Attendance analytics and individual student attendance health information are displayed.',
      whatHappensNext:
        'Your daily attendance workflow is complete! You can now proceed to Assessments & Tests.',
    },
  ],
  tips: [
    'Always double-check absent students before submitting the register.',
    'You can revisit the Student Attendance Health Ledger at any time during the term to track attendance consistency.',
  ],
  completionSummary:
    'You now know how to record daily attendance and review attendance information for your class. Your attendance records are saved and synced across Operon.',
  previousGuide: {
    title: 'Adding Students & Bulk Upload',
    slug: '/docs/academic-management/adding-students',
    description: 'Learn how to register students individually or import multiple records using a spreadsheet.',
  },
  nextGuide: {
    title: 'Assessments & Score Entry',
    slug: '/docs/academic-management/assessment',
    description: 'Learn how assessment structures are configured and how teachers enter and submit student scores in Operon.',
  },
};

export default takingAttendanceGuide;
