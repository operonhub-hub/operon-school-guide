import { Guide } from '../../../types/documentation/guide';

// Import original screenshots
import orig01 from '../../../../artifacts/documentation/screenshots/prenursery assessment/01-skills-entry-required.jpg';
import orig02 from '../../../../artifacts/documentation/screenshots/prenursery assessment/02-skills-evaluation-studio.jpg';
import orig03 from '../../../../artifacts/documentation/screenshots/prenursery assessment/03-select-learner-and-review-ratings.jpg';
import orig04 from '../../../../artifacts/documentation/screenshots/prenursery assessment/04-rate-developmental-skills.jpg';
import orig05 from '../../../../artifacts/documentation/screenshots/prenursery assessment/05-complete-skill-ratings.jpg';
import orig06 from '../../../../artifacts/documentation/screenshots/prenursery assessment/06-review-completed-evaluation.jpg';
import orig07 from '../../../../artifacts/documentation/screenshots/prenursery assessment/07-assessment-setup.jpg';

// Import annotated screenshots
import anno01 from '../../../../artifacts/documentation/annotated/prenursery assessment/01-skills-entry-required.jpg';
import anno02 from '../../../../artifacts/documentation/annotated/prenursery assessment/02-skills-evaluation-studio.jpg';
import anno03 from '../../../../artifacts/documentation/annotated/prenursery assessment/03-select-learner-and-review-ratings.jpg';
import anno04 from '../../../../artifacts/documentation/annotated/prenursery assessment/04-rate-developmental-skills.jpg';
import anno05 from '../../../../artifacts/documentation/annotated/prenursery assessment/05-complete-skill-ratings.jpg';
import anno06 from '../../../../artifacts/documentation/annotated/prenursery assessment/06-review-completed-evaluation.jpg';
import anno07 from '../../../../artifacts/documentation/annotated/prenursery assessment/07-assessment-setup.jpg';

export const earlyYearsSkillsGuide: Guide = {
  id: 'early-years-skills',
  slug: 'early-years-skills',
  sectionId: 'academic-management',
  title: 'Early Years Skills Assessment',
  shortDescription:
    'Learn how to record developmental milestones, observational checklists, and subject competencies for Creche, Nursery, and Kindergarten learners in Operon.',
  whyItMatters:
    'Early childhood education relies on observational milestones rather than standard numerical test scores. Operon’s Skills Evaluation Studio allows teachers to rate gross motor, fine motor, pre-academic, language, self-help, and social-emotional growth using a developmental rating scale, while administrators can customize checklist domains.',
  estimatedTime: '5–7 min',
  targetAudience: 'Early Years Teachers & School Administrators',
  prerequisites: [
    {
      title: 'Assigned Early Years Classroom',
      description:
        'Teacher access to an Early Years class arm (Creche, Nursery, or Kindergarten).',
    },
    {
      title: 'Active Academic Term',
      description:
        'An initialized academic session and current operational term.',
    },
    {
      title: 'Observational Records Ready',
      description:
        'Classroom observational notes and developmental milestone observations prepared for entry.',
    },
  ],
  video: {
    src: '/documentation/videos/academic-management/prenursery-skills-assessment-walkthrough.mp4',
    title: 'Early Years Skills Assessment Walkthrough',
    duration: '02:22',
    posterUrl: orig02,
  },
  steps: [
    {
      stepNumber: 1,
      title: 'Open the Early Years Skills Studio',
      instruction:
        'When accessing traits for Early Years classes, click the prompt to open the dedicated Skills Entry (Early Years) Studio.',
      whyItMatters:
        'Primary and Secondary classes use standard numerical traits, while Early Years classrooms use observational milestone checklists tailored specifically for young learners.',
      subSteps: [
        'From the main navigation menu, select "Affective & Psychomotor" or "Skills Entry (Early Years)".',
        'When working with an Early Years class (Creche, Nursery, or Kindergarten), notice the specialized prompt.',
        'Click the primary button "Go to Skills Entry (Early Years) Studio →" to launch the observational evaluation workspace.',
      ],
      screenshot: {
        originalUrl: orig01,
        annotatedUrl: anno01,
        altText: 'Operon prompt redirecting early years teachers to the Skills Entry Studio.',
        caption: 'Click the button to access the specialized observational Skills Entry Studio.',
      },
      expectedResult:
        'The Skills Evaluation Studio workspace opens with checklist options.',
      whatHappensNext:
        'Confirm the class, arm, and active term context.',
      tip: 'Early Years classes automatically route to the observational checklist system instead of numerical score sheets.',
    },
    {
      stepNumber: 2,
      title: 'Confirm Class and Learner Context',
      instruction:
        'Confirm that the active academic term, early years class, and subdivision arm are selected, and review the rating code key reference.',
      whyItMatters:
        'Verifying your class and arm ensures you are evaluating the correct cohort of learners against their assigned developmental checklist.',
      subSteps: [
        'Verify the Academic Term (e.g., First Term • Active).',
        'Select your assigned Early Years Class (e.g., Kindergarten 1) and Subdivision / Arm (e.g., Arm A).',
        'Review the 6-point rating code key: [0] Concept not yet introduced, [W] Weak performance (0%–39%), [N] Needs improvement (40%–49%), [S] Satisfactory progress (50%–70%), [E] Excellent progress (70%–94%), and [R] Remarkable work (95%–100%).',
      ],
      screenshot: {
        originalUrl: orig02,
        annotatedUrl: anno02,
        altText: 'Operon Skills Evaluation Studio showing class context and rating code key.',
        caption: 'Review the rating scale reference and confirm your class and arm assignment.',
      },
      expectedResult:
        'The studio loads the rating key and checklist taxonomy for the selected class.',
      whatHappensNext:
        'Select a learner profile to begin evaluation.',
    },
    {
      stepNumber: 3,
      title: 'Select Learner and Review Developmental Domains',
      instruction:
        'Choose a learner profile from the dropdown to load their evaluation checklist across all developmental domains.',
      whyItMatters:
        'Observational evaluation is tracked individually per child, allowing personalized tracking of developmental progress across multiple domains.',
      subSteps: [
        'Select the student from the "Learner Profile" selector.',
        'Review the learner header and evaluation completion tracker (e.g., 0 of 62 skills filled).',
        'Examine the first developmental domain, such as Gross Motor Skills.',
      ],
      screenshot: {
        originalUrl: orig03,
        annotatedUrl: anno03,
        altText: 'Operon learner profile selected with developmental skill domains.',
        caption: 'Select a learner profile to display their developmental domain checklist.',
      },
      expectedResult:
        'The checklist displays the learner’s individual skills and current rating options.',
      whatHappensNext:
        'Record observational ratings for each skill.',
    },
    {
      stepNumber: 4,
      title: 'Record Skill Ratings and Competencies',
      instruction:
        'Click the appropriate rating code for observational skills, and enter specific text or numerical values for academic competency items.',
      whyItMatters:
        'Combining standardized rating codes ([0], [W], [N], [S], [E], [R]) with expected ranges ensures structured and comprehensive reporting.',
      subSteps: [
        'For observational skills (e.g., Gross Motor, Pre-Academic Skills), click the matching rating pill (e.g., [E] for Excellent, [R] for Remarkable).',
        'For Academic Skills with defined ranges (e.g., letter sounds, number identification), type the observed competency in the input field.',
      ],
      screenshot: {
        originalUrl: orig04,
        annotatedUrl: anno04,
        altText: 'Operon skill rating selection and academic competency input fields.',
        caption: 'Select rating codes or enter competency values for each developmental skill.',
      },
      expectedResult:
        'Selected rating codes highlight in bold dark blue and input fields record the entered text.',
      whatHappensNext:
        'Continue rating skills across all remaining domains.',
    },
    {
      stepNumber: 5,
      title: 'Complete Ratings Across All Domains',
      instruction:
        'Scroll through all developmental domains—such as Understanding Language, Self-Help Skills, and Social-Emotional Growth—rating each milestone.',
      whyItMatters:
        'A complete evaluation gives parents and future teachers a holistic picture of the child’s physical, linguistic, and personal development.',
      subSteps: [
        'Expand each domain card (e.g., Understanding Language, Self-Help Skills).',
        'Select ratings for all itemized milestones.',
        'Monitor your progress as each domain is completed.',
      ],
      screenshot: {
        originalUrl: orig05,
        annotatedUrl: anno05,
        altText: 'Operon developmental domains showing completed skill ratings.',
        caption: 'Rate milestones across all categories including language and self-help skills.',
      },
      expectedResult:
        'All domain milestones are filled and recorded for the selected learner.',
      whatHappensNext:
        'Review the completion meter and save your progress.',
    },
    {
      stepNumber: 6,
      title: 'Review Completion and Save Progress',
      instruction:
        'Check that the Evaluation Completion bar shows 100%, then click Save Progress to commit the learner’s assessment.',
      whyItMatters:
        'Saving commits the ratings to the student’s permanent record and automatically updates their early years developmental report.',
      subSteps: [
        'Verify that the Evaluation Completion meter indicates 100% (e.g., 62 of 62 skills filled).',
        'Click the primary "Save Progress" button in the upper header.',
        'Navigate to the next learner using the arrow controls or dropdown to continue evaluations.',
      ],
      screenshot: {
        originalUrl: orig06,
        annotatedUrl: anno06,
        altText: 'Operon completed skills evaluation showing 100% completion and save action.',
        caption: 'Confirm 100% completion and click Save Progress to commit the evaluation.',
      },
      expectedResult:
        'Progress is saved securely and ready for early years report card compilation.',
      whatHappensNext:
        'Optionally customize assessment domains if authorized.',
      important: 'Remember to click "Save Progress" to finalize and commit the completed evaluation.',
    },
    {
      stepNumber: 7,
      title: 'Configure Developmental Domains & Skills',
      instruction:
        'Administrators or authorized teachers can click Assessment Setup to add custom domains or edit checklist skills specific to an arm.',
      whyItMatters:
        'Arm-specific customization allows schools to adapt checklists to their unique nursery curriculum while term-effective protection keeps historical records intact.',
      subSteps: [
        'Click "Assessment Setup" in the top action bar.',
        'Use "+ Add Domain" to create a new developmental category.',
        'Use "+ Add Skill" to add specific milestones under any domain.',
        'Note the Term-Effective Protection notice: changes apply from the active term onward and will not alter previous terms.',
      ],
      screenshot: {
        originalUrl: orig07,
        annotatedUrl: anno07,
        altText: 'Operon Assessment Setup dialog for configuring domains and skills.',
        caption: 'Use Assessment Setup to add custom domains and skills with term-effective protection.',
      },
      expectedResult:
        'The custom domain and skill hierarchy is updated for the class arm.',
      whatHappensNext:
        'Early years evaluation workflow is complete! You can proceed to Report Cards & Grading.',
      tip: 'Term-Effective Protection ensures previous term reports and student records remain unaltered when modifying skills.',
    },
  ],
  tips: [
    'Early Years evaluations auto-save changes as you type, but always click "Save Progress" to commit the final completed sheet.',
    'Hover over any code in the Rating Code Key Reference to view its performance percentage band (e.g., E = 70%–94%).',
    'Custom assessment setup changes apply from the active term onward, preserving past term records securely.',
  ],
  completionSummary:
    'You now know how to navigate the Early Years Skills Evaluation Studio, evaluate developmental milestones across all domains, and configure custom checklist skills in Operon.',
  previousGuide: {
    title: 'Assessments & Score Entry',
    slug: '/docs/academic-management/assessment',
    description: 'Learn how assessment structures are configured and how teachers enter and submit student scores.',
  },
  nextGuide: {
    title: 'Report Cards & Grading',
    slug: '/docs/academic-management/report-cards',
    description: 'Learn how submitted scores and skill evaluations are compiled into student report cards.',
  },
};

export default earlyYearsSkillsGuide;
