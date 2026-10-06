import React from 'react';
import { Info, Lightbulb, AlertTriangle, AlertCircle } from 'lucide-react';

export type CalloutType = 'info' | 'tip' | 'warning' | 'important';

export interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    containerClass: 'bg-operon-50/60 border-operon-200 text-operon-950',
    iconColor: 'text-operon-600',
    badgeClass: 'bg-operon-100 text-operon-800',
    defaultTitle: 'Note',
  },
  tip: {
    icon: Lightbulb,
    containerClass: 'bg-emerald-50/60 border-emerald-200 text-emerald-950',
    iconColor: 'text-emerald-600',
    badgeClass: 'bg-emerald-100 text-emerald-800',
    defaultTitle: 'Pro Tip',
  },
  warning: {
    icon: AlertTriangle,
    containerClass: 'bg-amber-50/60 border-amber-200 text-amber-950',
    iconColor: 'text-amber-600',
    badgeClass: 'bg-amber-100 text-amber-800',
    defaultTitle: 'Caution',
  },
  important: {
    icon: AlertCircle,
    containerClass: 'bg-rose-50/60 border-rose-200 text-rose-950',
    iconColor: 'text-rose-600',
    badgeClass: 'bg-rose-100 text-rose-800',
    defaultTitle: 'Important',
  },
};

export const Callout: React.FC<CalloutProps> = ({
  type = 'info',
  title,
  children,
  className = '',
}) => {
  const config = calloutConfig[type];
  const Icon = config.icon;
  const heading = title || config.defaultTitle;

  return (
    <div
      className={`my-4 flex items-start gap-3.5 rounded-xl border p-4 text-sm leading-relaxed transition-all duration-150 ${config.containerClass} ${className}`}
      role="region"
      aria-label={heading}
    >
      <div className={`mt-0.5 flex-shrink-0 ${config.iconColor}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        {heading && (
          <div className="font-semibold tracking-tight text-slate-900 mb-1">
            {heading}
          </div>
        )}
        <div className="text-slate-700 leading-normal">{children}</div>
      </div>
    </div>
  );
};

export default Callout;
