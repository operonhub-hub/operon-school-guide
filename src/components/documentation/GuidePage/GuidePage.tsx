import React, { useState } from 'react';
import {
  ChevronRight,
  Check,
  ThumbsUp,
  ThumbsDown,
  CheckCircle,
  PlayCircle,
  School,
  ChevronDown,
  Info,
  AlignLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Guide } from '../../../types/documentation/guide';
import { GuideStep } from '../GuideStep';
import { VideoViewer } from '../VideoViewer';
import { Callout } from '../Callout';
import { PreviousNextNavigation } from '../PreviousNextNavigation';

export interface GuidePageProps {
  guide: Guide;
  categoryTitle?: string;
  categorySlug?: string;
  className?: string;
}

export const GuidePage: React.FC<GuidePageProps> = ({
  guide,
  categoryTitle = 'Start Here',
  categorySlug = 'getting-started',
  className = '',
}) => {
  const [feedbackGiven, setFeedbackGiven] = useState<'yes' | 'no' | null>(null);
  const [isWhyMattersOpen, setIsWhyMattersOpen] = useState(false);
  const [isPrereqDetailsOpen, setIsPrereqDetailsOpen] = useState(false);
  const [isMobileTocOpen, setIsMobileTocOpen] = useState(false);

  // Generate concise step flow summary (e.g. Step 1 -> Step 2 -> Step 3)
  const shortFlow = guide.steps
    .map((s) =>
      s.title.replace(
        /^(Select|Provide|Define|Complete|Verify|Access|Authenticate|Set|Explore|Configure|Review)\s+/i,
        ''
      )
    )
    .slice(0, 4);

  return (
    <div className={`space-y-8 pb-16 ${className}`}>
      {/* 1. Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-slate-500" aria-label="Breadcrumb">
        <Link to="/docs" className="hover:text-operon-600 transition-colors">
          School Guide
        </Link>
        <ChevronRight className="h-3 w-3 text-slate-400" />
        <Link
          to={categorySlug ? `/docs/${categorySlug}` : '/docs'}
          className="text-slate-600 hover:text-operon-600 transition-colors"
        >
          {categoryTitle}
        </Link>
        <ChevronRight className="h-3 w-3 text-slate-400" />
        <span className="font-semibold text-operon-700">{guide.title}</span>
      </nav>

      {/* 2. Simplified, Calm Article Header */}
      <header
        id="introduction"
        className="space-y-3.5 border-b border-slate-200/80 pb-6 scroll-mt-24 sm:scroll-mt-28"
      >
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {guide.title}
        </h1>

        {/* Clean Inline Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
          {guide.targetAudience && <span>For {guide.targetAudience}</span>}
          {guide.targetAudience && <span>·</span>}
          {guide.estimatedTime && <span>{guide.estimatedTime}</span>}
          {guide.estimatedTime && <span>·</span>}
          <span className="text-operon-700 font-semibold">{guide.steps.length} steps</span>
        </div>

        {/* Short Description */}
        <p className="text-base text-slate-600 leading-relaxed max-w-3xl pt-0.5">
          {guide.shortDescription}
        </p>

        {/* Compact "In this guide" flow indicator */}
        {shortFlow.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-slate-600">
            <span className="font-bold text-slate-800 mr-1">In this guide:</span>
            {shortFlow.map((item, idx) => (
              <React.Fragment key={idx}>
                <span className="bg-slate-100/90 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                  {item}
                </span>
                {idx < shortFlow.length - 1 && <span className="text-slate-400">→</span>}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Subtle Expandable "Why this matters" */}
        {guide.whyItMatters && (
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setIsWhyMattersOpen((prev) => !prev)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-operon-600 hover:text-operon-800 transition"
            >
              <Info className="h-3.5 w-3.5" />
              <span>Why this matters</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-150 ${
                  isWhyMattersOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
            {isWhyMattersOpen && (
              <div className="mt-2 text-xs sm:text-sm text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 leading-relaxed animate-in fade-in duration-150">
                {guide.whyItMatters}
              </div>
            )}
          </div>
        )}

        {/* Simplified "Before you start" Prerequisites */}
        {guide.prerequisites && guide.prerequisites.length > 0 && (
          <div
            id="before-you-start"
            className="pt-3 scroll-mt-24 sm:scroll-mt-28 border-t border-slate-100 space-y-2"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Before you start
              </div>
              <button
                type="button"
                onClick={() => setIsPrereqDetailsOpen((prev) => !prev)}
                className="text-[11px] font-semibold text-operon-600 hover:text-operon-800"
              >
                {isPrereqDetailsOpen ? 'Hide details' : 'View requirement details'}
              </button>
            </div>

            {/* Concise inline summary list */}
            <div className="text-xs text-slate-700 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="font-medium text-slate-500">You'll need:</span>
              {guide.prerequisites.map((req, idx) => (
                <React.Fragment key={idx}>
                  <span className="inline-flex items-center gap-1 font-medium text-slate-800">
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span>{req.title}</span>
                  </span>
                  {idx < (guide.prerequisites?.length || 0) - 1 && (
                    <span className="text-slate-300">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Optional expanded details */}
            {isPrereqDetailsOpen && (
              <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 animate-in fade-in duration-150">
                {guide.prerequisites.map((req, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-slate-200/80 bg-slate-50/60 p-2.5 text-xs text-slate-600"
                  >
                    <div className="font-semibold text-slate-800">{req.title}</div>
                    {req.description && (
                      <div className="text-slate-500 mt-0.5">{req.description}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      {/* Mobile-only Collapsible "On this guide" Quick Navigation */}
      <div className="xl:hidden">
        <button
          type="button"
          onClick={() => setIsMobileTocOpen((prev) => !prev)}
          className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50/80 px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
          aria-expanded={isMobileTocOpen}
          aria-controls="mobile-toc"
        >
          <div className="flex items-center gap-2">
            <AlignLeft className="h-4 w-4 text-operon-600" />
            <span>On this guide</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-slate-500 transition-transform duration-150 ${
              isMobileTocOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>

        {isMobileTocOpen && (
          <nav
            id="mobile-toc"
            aria-label="On this guide mobile"
            className="mt-2 rounded-xl border border-slate-200 bg-white p-3 space-y-1 shadow-sm animate-in fade-in duration-150"
          >
            <a
              href="#introduction"
              onClick={() => setIsMobileTocOpen(false)}
              className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-operon-50 hover:text-operon-700"
            >
              Introduction
            </a>
            {guide.prerequisites && guide.prerequisites.length > 0 && (
              <a
                href="#before-you-start"
                onClick={() => setIsMobileTocOpen(false)}
                className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-operon-50 hover:text-operon-700"
              >
                Before you start
              </a>
            )}
            {guide.video && (
              <a
                href="#video-walkthrough"
                onClick={() => setIsMobileTocOpen(false)}
                className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-operon-50 hover:text-operon-700"
              >
                Video walkthrough
              </a>
            )}
            <a
              href="#step-by-step-guide"
              onClick={() => setIsMobileTocOpen(false)}
              className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-operon-50 hover:text-operon-700"
            >
              Step-by-step guide ({guide.steps.length} steps)
            </a>
            <a
              href="#completion"
              onClick={() => setIsMobileTocOpen(false)}
              className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-emerald-700 hover:bg-emerald-50"
            >
              Completion &amp; Next guide
            </a>
          </nav>
        )}
      </div>

      {/* 3. Walkthrough Video Section */}
      {guide.video && (
        <section
          id="video-walkthrough"
          className="space-y-3 scroll-mt-24 sm:scroll-mt-28"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5 text-operon-600" />
              <h2 className="text-base font-bold text-slate-900">
                Watch the Video Walkthrough
              </h2>
            </div>
            {guide.video.duration && (
              <span className="text-xs font-mono text-slate-500">
                Duration: {guide.video.duration}
              </span>
            )}
          </div>
          <VideoViewer video={guide.video} />
        </section>
      )}

      {/* 4. Sequential Step Cards — Primary Visual Focus */}
      <section
        id="step-by-step-guide"
        className="space-y-6 scroll-mt-24 sm:scroll-mt-28"
      >
        <div className="flex items-center justify-between border-b border-slate-200/60 pb-2">
          <h2 className="text-lg font-bold tracking-tight text-slate-900">
            Step-by-Step Instructions
          </h2>
          <span className="text-xs font-bold text-slate-500">
            {guide.steps.length} Steps
          </span>
        </div>

        <div className="space-y-8">
          {guide.steps.map((step) => (
            <GuideStep key={step.stepNumber} step={step} />
          ))}
        </div>
      </section>

      {/* 5. General Tips & Warnings */}
      {guide.tips && guide.tips.length > 0 && (
        <section className="space-y-2">
          {guide.tips.map((tip, idx) => (
            <Callout key={idx} type="tip" title="Helpful School Tip">
              {tip}
            </Callout>
          ))}
        </section>
      )}

      {guide.warnings && guide.warnings.length > 0 && (
        <section className="space-y-2">
          {guide.warnings.map((warn, idx) => (
            <Callout key={idx} type="warning" title="Please Note">
              {warn}
            </Callout>
          ))}
        </section>
      )}

      {/* 6. Milestone Complete Section ("You're Done") */}
      <section
        id="completion"
        className="scroll-mt-24 sm:scroll-mt-28 rounded-2xl border border-emerald-200/90 bg-emerald-50/40 p-6 sm:p-7 shadow-2xs space-y-3"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-xs">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              You're Done!
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Lesson Complete
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          {guide.completionSummary ||
            'You have successfully completed this guide and configured your school portal.'}
        </p>

        {/* Continue Learning Next Step Card */}
        {guide.nextGuide && (
          <div className="mt-3 pt-3 border-t border-emerald-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                Continue Learning
              </span>
              <span className="text-sm font-bold text-slate-900">
                Next: {guide.nextGuide.title}
              </span>
            </div>

            <Link
              to={guide.nextGuide.slug}
              className="inline-flex items-center gap-2 rounded-xl bg-operon-600 px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-operon-700 transition"
            >
              <School className="h-4 w-4 text-operon-200" />
              <span>Continue →</span>
            </Link>
          </div>
        )}
      </section>

      {/* 7. Helpful Feedback Widget */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 text-center space-y-2.5">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
          Was this guide helpful?
        </h3>
        {feedbackGiven ? (
          <p className="text-xs text-emerald-700 font-semibold">
            Thank you for your feedback! It helps us improve our school guides.
          </p>
        ) : (
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setFeedbackGiven('yes')}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-emerald-400 hover:text-emerald-700 transition shadow-2xs"
            >
              <ThumbsUp className="h-3.5 w-3.5" />
              <span>Yes, it helped</span>
            </button>
            <button
              type="button"
              onClick={() => setFeedbackGiven('no')}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 hover:border-rose-400 hover:text-rose-700 transition shadow-2xs"
            >
              <ThumbsDown className="h-3.5 w-3.5" />
              <span>Could be clearer</span>
            </button>
          </div>
        )}
      </section>

      {/* 8. Previous / Next Navigation */}
      <PreviousNextNavigation
        previous={guide.previousGuide}
        next={guide.nextGuide}
      />
    </div>
  );
};

export default GuidePage;
