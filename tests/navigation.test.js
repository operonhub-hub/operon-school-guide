import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

test('Documentation Navigation & Anchor Integrity Suite', async (t) => {
  await t.test('1. Sidebar Navigation - Route Mapping Integrity', async () => {
    const navConfigContent = fs.readFileSync(
      path.resolve('src/config/documentation/navigation.config.ts'),
      'utf-8'
    );
    assert.match(navConfigContent, /welcome-to-operon/);
    assert.match(navConfigContent, /register-your-school/);
    assert.match(navConfigContent, /verify-your-account/);
    assert.match(navConfigContent, /sign-in/);
    assert.match(navConfigContent, /profile-settings/);
    assert.match(navConfigContent, /academic-session/);
    assert.match(navConfigContent, /classes-and-subjects/);
    assert.match(navConfigContent, /adding-teachers/);
    assert.match(navConfigContent, /adding-students/);
    assert.match(navConfigContent, /attendance/);
  });

  await t.test('2. Table of Contents - Semantic IDs and Anchors', async () => {
    const tocContent = fs.readFileSync(
      path.resolve('src/components/documentation/TableOfContents/TableOfContents.tsx'),
      'utf-8'
    );
    assert.match(tocContent, /id:\s*'introduction'/);
    assert.match(tocContent, /id:\s*'before-you-start'/);
    assert.match(tocContent, /id:\s*'video-walkthrough'/);
    assert.match(tocContent, /id:\s*'step-by-step-guide'/);
    assert.match(tocContent, /id:\s*'completion'/);
    assert.match(tocContent, /aria-label="On this guide"/);
  });

  await t.test('3. GuidePage - Matching Section IDs and Sticky Clearance', async () => {
    const guidePageContent = fs.readFileSync(
      path.resolve('src/components/documentation/GuidePage/GuidePage.tsx'),
      'utf-8'
    );
    assert.match(guidePageContent, /id="introduction"[^>]*scroll-mt-24/);
    assert.match(guidePageContent, /id="before-you-start"[^>]*scroll-mt-24/);
    assert.match(guidePageContent, /id="video-walkthrough"[^>]*scroll-mt-24/);
    assert.match(guidePageContent, /id="step-by-step-guide"[^>]*scroll-mt-24/);
    assert.match(guidePageContent, /id="completion"[^>]*scroll-mt-24/);
  });

  await t.test('4. GuideStep - Step Anchors Format', async () => {
    const guideStepContent = fs.readFileSync(
      path.resolve('src/components/documentation/GuideStep/GuideStep.tsx'),
      'utf-8'
    );
    assert.match(guideStepContent, /id=\{stepId\}/);
    assert.match(guideStepContent, /scroll-mt-24/);
  });

  await t.test('5. Scroll and Hash URL Handler Integrity', async () => {
    const appContent = fs.readFileSync(path.resolve('src/app/App.tsx'), 'utf-8');
    assert.match(appContent, /ScrollHandler/);
    assert.match(appContent, /scrollIntoView/);
  });

  await t.test('6. Classes & Subjects Guide Definition & 10 Steps', async () => {
    const guideContent = fs.readFileSync(
      path.resolve('src/content/documentation/academic-management/classes-and-subjects.ts'),
      'utf-8'
    );
    assert.match(guideContent, /id:\s*'classes-and-subjects'/);
    assert.match(guideContent, /title:\s*'Classes & Subjects'/);
    assert.match(guideContent, /classes-and-subjects-walkthrough\.mp4/);
    assert.match(guideContent, /stepNumber:\s*1/);
    assert.match(guideContent, /stepNumber:\s*10/);
  });

  await t.test('7. Search Keywords Indexed for Classes & Subjects', async () => {
    const searchContent = fs.readFileSync(
      path.resolve('src/components/documentation/SearchModal/SearchModal.tsx'),
      'utf-8'
    );
    assert.match(searchContent, /classes-and-subjects/);
    assert.match(searchContent, /compulsory/);
    assert.match(searchContent, /elective/);
    assert.match(searchContent, /class arm/);
  });

  await t.test('8. Adding Teachers Guide Definition & 9 Steps', async () => {
    const guideContent = fs.readFileSync(
      path.resolve('src/content/documentation/academic-management/adding-teachers.ts'),
      'utf-8'
    );
    assert.match(guideContent, /id:\s*'adding-teachers'/);
    assert.match(guideContent, /title:\s*'Adding Teachers'/);
    assert.match(guideContent, /adding-teachers-walkthrough\.mp4/);
    assert.match(guideContent, /stepNumber:\s*1/);
    assert.match(guideContent, /stepNumber:\s*9/);
  });

  await t.test('9. Search Keywords Indexed for Adding Teachers', async () => {
    const searchContent = fs.readFileSync(
      path.resolve('src/components/documentation/SearchModal/SearchModal.tsx'),
      'utf-8'
    );
    assert.match(searchContent, /adding-teachers/);
    assert.match(searchContent, /teacher credentials/);
    assert.match(searchContent, /welcome email/);
    assert.match(searchContent, /temporary password/);
  });

  await t.test('10. Adding Students & Bulk Upload Guide Definition & 11 Steps', async () => {
    const guideContent = fs.readFileSync(
      path.resolve('src/content/documentation/academic-management/adding-students.ts'),
      'utf-8'
    );
    assert.match(guideContent, /id:\s*'adding-students'/);
    assert.match(guideContent, /title:\s*'Adding Students & Bulk Upload'/);
    assert.match(guideContent, /adding-students-walkthrough\.mp4/);
    assert.match(guideContent, /stepNumber:\s*1/);
    assert.match(guideContent, /stepNumber:\s*11/);
  });

  await t.test('11. Search Keywords Indexed for Adding Students & Bulk Upload', async () => {
    const searchContent = fs.readFileSync(
      path.resolve('src/components/documentation/SearchModal/SearchModal.tsx'),
      'utf-8'
    );
    assert.match(searchContent, /adding-students/);
    assert.match(searchContent, /bulk upload/);
    assert.match(searchContent, /bulk import/);
    assert.match(searchContent, /student spreadsheet/);
  });

  await t.test('12. Taking Attendance Guide Definition & 5 Steps', async () => {
    const guideContent = fs.readFileSync(
      path.resolve('src/content/documentation/academic-management/taking-attendance.ts'),
      'utf-8'
    );
    assert.match(guideContent, /id:\s*'taking-attendance'/);
    assert.match(guideContent, /title:\s*'Taking Attendance'/);
    assert.match(guideContent, /taking-attendance-walkthrough\.mp4/);
    assert.match(guideContent, /stepNumber:\s*1/);
    assert.match(guideContent, /stepNumber:\s*5/);
    assert.match(guideContent, /Student Attendance Health Ledger/i);
  });

  await t.test('13. Search Keywords Indexed for Taking Attendance', async () => {
    const searchContent = fs.readFileSync(
      path.resolve('src/components/documentation/SearchModal/SearchModal.tsx'),
      'utf-8'
    );
    assert.match(searchContent, /taking-attendance/);
    assert.match(searchContent, /mark attendance/);
    assert.match(searchContent, /mark absent/);
    assert.match(searchContent, /student attendance health ledger/);
  });

  await t.test('14. Assessments & Score Entry Guide Definition & 10 Steps', async () => {
    const guideContent = fs.readFileSync(
      path.resolve('src/content/documentation/academic-management/assessments-score-entry.ts'),
      'utf-8'
    );
    assert.match(guideContent, /id:\s*'assessments-score-entry'/);
    assert.match(guideContent, /title:\s*'Assessments & Score Entry'/);
    assert.match(guideContent, /assessments-score-entry-walkthrough\.mp4/);
    assert.match(guideContent, /stepNumber:\s*1/);
    assert.match(guideContent, /stepNumber:\s*10/);
    assert.match(guideContent, /Open Assessment Schemes/);
    assert.match(guideContent, /Set the Assessment Components/);
    assert.match(guideContent, /Open Score Entry & Grading/);
    assert.match(guideContent, /Submit the Scores/);
  });

  await t.test('15. Search Keywords Indexed for Assessments & Score Entry', async () => {
    const searchContent = fs.readFileSync(
      path.resolve('src/components/documentation/SearchModal/SearchModal.tsx'),
      'utf-8'
    );
    assert.match(searchContent, /assessments-score-entry/);
    assert.match(searchContent, /assessment scheme/);
    assert.match(searchContent, /score entry/);
    assert.match(searchContent, /score matrix/);
    assert.match(searchContent, /teacher score entry/);
    assert.match(searchContent, /upload scores/);
  });

  await t.test('16. Early Years Skills Assessment Guide Definition & 7 Steps', async () => {
    const guideContent = fs.readFileSync(
      path.resolve('src/content/documentation/academic-management/early-years-skills.ts'),
      'utf-8'
    );
    assert.match(guideContent, /id:\s*'early-years-skills'/);
    assert.match(guideContent, /title:\s*'Early Years Skills Assessment'/);
    assert.match(guideContent, /prenursery-skills-assessment-walkthrough\.mp4/);
    assert.match(guideContent, /stepNumber:\s*1/);
    assert.match(guideContent, /stepNumber:\s*7/);
    assert.match(guideContent, /Open the Early Years Skills Studio/);
    assert.match(guideContent, /Confirm Class and Learner Context/);
    assert.match(guideContent, /Select Learner and Review Developmental Domains/);
    assert.match(guideContent, /Record Skill Ratings and Competencies/);
    assert.match(guideContent, /Complete Ratings Across All Domains/);
    assert.match(guideContent, /Review Completion and Save Progress/);
    assert.match(guideContent, /Configure Developmental Domains & Skills/);
  });

  await t.test('17. Search Keywords Indexed for Early Years Skills Assessment', async () => {
    const searchContent = fs.readFileSync(
      path.resolve('src/components/documentation/SearchModal/SearchModal.tsx'),
      'utf-8'
    );
    assert.match(searchContent, /early-years-skills/);
    assert.match(searchContent, /skills evaluation studio/);
    assert.match(searchContent, /developmental milestones/);
    assert.match(searchContent, /gross motor skills/);
    assert.match(searchContent, /save progress/);
  });

  await t.test('18. Report Cards & Grading Guide Definition & 8 Steps', async () => {
    const guideContent = fs.readFileSync(
      path.resolve('src/content/documentation/academic-management/report-cards.ts'),
      'utf-8'
    );
    assert.match(guideContent, /id:\s*'report-cards'/);
    assert.match(guideContent, /title:\s*'Report Cards & Grading'/);
    assert.match(guideContent, /report-cards-grading-walkthrough\.mp4/);
    assert.match(guideContent, /stepNumber:\s*1/);
    assert.match(guideContent, /stepNumber:\s*8/);
    assert.match(guideContent, /Open Report Cards/);
    assert.match(guideContent, /Compile the Class Roster/);
    assert.match(guideContent, /Review and Edit Report Remarks/);
    assert.match(guideContent, /Preview the Printable Report Card/);
    assert.match(guideContent, /Generate Report Comments/);
    assert.match(guideContent, /Review the Completed Report/);
    assert.match(guideContent, /Submit the Report for School Approval/);
    assert.match(guideContent, /Confirm the Approval Status/);
  });

  await t.test('19. Search Keywords Indexed for Report Cards & Grading', async () => {
    const searchContent = fs.readFileSync(
      path.resolve('src/components/documentation/SearchModal/SearchModal.tsx'),
      'utf-8'
    );
    assert.match(searchContent, /report-cards/);
    assert.match(searchContent, /compile class roster/);
    assert.match(searchContent, /printable report card/);
    assert.match(searchContent, /batch comments/);
    assert.match(searchContent, /school approval/);
    assert.match(searchContent, /awaiting school approval/);
  });
});
