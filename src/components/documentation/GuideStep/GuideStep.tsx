import React from 'react';
import { ArrowRight, CheckCheck, ListChecks } from 'lucide-react';
import { GuideStep as GuideStepType } from '../../../types/documentation/guide';
import { ScreenshotViewer } from '../ScreenshotViewer';
import { Callout } from '../Callout';

export interface GuideStepProps {
  step: GuideStepType;
  className?: string;
}

export const GuideStep: React.FC<GuideStepProps> = ({ step, className = '' }) => {
  const stepId = `step-${step.stepNumber.toString().padStart(2, '0')}`;
  const formattedNumber = step.stepNumber.toString().padStart(2, '0');

  return (
    <article
      id={stepId}
      className={`scroll-mt-24 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xs transition-all duration-150 hover:border-operon-200 space-y-6 ${className}`}
    >
      {/* 1. Step Header */}
      <div className="flex items-start gap-4">
        {/* Step Number Badge */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-operon-50 font-mono text-base font-bold text-operon-700 ring-1 ring-operon-600/20 shadow-2xs">
          {formattedNumber}
        </div>

        <div className="flex-1 min-w-0 pt-0.5">
          <div className="text-xs font-bold uppercase tracking-wider text-operon-600 mb-1">
            Step {step.stepNumber}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group">
            <a href={`#${stepId}`} className="hover:text-operon-600 transition-colors">
              {step.title}
            </a>
          </h3>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            {step.instruction}
          </p>
        </div>
      </div>

      {/* 2. Why This Matters (Step-Level Purpose) */}
      {step.whyItMatters && (
        <div className="rounded-xl border border-slate-100 bg-slate-50/80 p-3.5 sm:p-4 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5">
          <span className="font-bold text-slate-900 shrink-0">Why this matters:</span>
          <span className="leading-relaxed">{step.whyItMatters}</span>
        </div>
      )}

      {/* 3. Action Items Checklist ("What to do") */}
      {step.subSteps && step.subSteps.length > 0 && (
        <div className="rounded-xl bg-operon-50/30 border border-operon-100/70 p-4 sm:p-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
            <ListChecks className="h-4 w-4 text-operon-600" />
            <span>What to do:</span>
          </h4>
          <ol className="space-y-2.5">
            {step.subSteps.map((subStep, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-operon-100 text-operon-800 text-[11px] font-mono font-bold mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed font-medium">{subStep}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      {/* 4. Screenshot Display & Lightbox */}
      {step.screenshot && (
        <ScreenshotViewer
          screenshot={step.screenshot}
          stepNumber={step.stepNumber}
        />
      )}

      {/* 5. Expected Result & What Happens Next Grid */}
      {(step.expectedResult || step.whatHappensNext) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {step.expectedResult && (
            <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-3.5 text-xs sm:text-sm text-emerald-950">
              <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1">
                <CheckCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>Expected Result</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                {step.expectedResult}
              </p>
            </div>
          )}

          {step.whatHappensNext && (
            <div className="rounded-xl border border-operon-100 bg-operon-50/50 p-3.5 text-xs sm:text-sm text-operon-950">
              <div className="flex items-center gap-1.5 font-bold text-operon-800 mb-1">
                <ArrowRight className="h-4 w-4 text-operon-600 shrink-0" />
                <span>What Happens Next</span>
              </div>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                {step.whatHappensNext}
              </p>
            </div>
          )}
        </div>
      )}

      {/* 6. Contextual Callouts (Tips / Warnings / Important) */}
      {step.tip && (
        <Callout type="tip" title="Helpful School Tip">
          {step.tip}
        </Callout>
      )}

      {step.important && (
        <Callout type="important" title="Important Notice">
          {step.important}
        </Callout>
      )}

      {step.warning && (
        <Callout type="warning" title="Please Note">
          {step.warning}
        </Callout>
      )}
    </article>
  );
};

export default GuideStep;
