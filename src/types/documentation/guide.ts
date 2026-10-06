import { AnnotationRegion } from './annotation';

export interface ScreenshotAsset {
  originalUrl: string;
  annotatedUrl?: string;
  altText: string;
  caption?: string;
  annotations?: AnnotationRegion[];
}

export interface VideoAsset {
  src: string;
  title?: string;
  duration?: string;
  posterUrl?: string;
}

export interface GuidePrerequisite {
  title: string;
  description?: string;
  link?: string;
}

export interface GuideLink {
  title: string;
  slug: string;
  sectionId?: string;
  description?: string;
}

export interface GuideStep {
  stepNumber: number;
  title: string;
  instruction: string;
  whyItMatters?: string;
  subSteps?: string[];
  screenshot?: ScreenshotAsset;
  expectedResult?: string;
  whatHappensNext?: string;
  tip?: string;
  warning?: string;
  important?: string;
}

export interface Guide {
  id: string;
  slug: string;
  sectionId: string;
  title: string;
  shortDescription: string;
  whyItMatters: string;
  estimatedTime?: string;
  targetAudience?: string;
  prerequisites?: GuidePrerequisite[];
  steps: GuideStep[];
  video?: VideoAsset;
  tips?: string[];
  warnings?: string[];
  completionSummary?: string;
  relatedGuides?: GuideLink[];
  previousGuide?: GuideLink;
  nextGuide?: GuideLink;
}
