export type AnnotationType =
  | 'highlight'
  | 'callout'
  | 'marker'
  | 'dim-overlay'
  | 'arrow'
  | 'badge';

export interface AnnotationRegion {
  id: string;
  type: AnnotationType;
  /** Normalized coordinate percentage (0 - 100) */
  x: number;
  /** Normalized coordinate percentage (0 - 100) */
  y: number;
  /** Normalized width percentage (0 - 100) */
  width?: number;
  /** Normalized height percentage (0 - 100) */
  height?: number;
  /** Optional step number or marker index */
  markerNumber?: number;
  /** Label or callout text */
  label?: string;
  /** Accent or stroke color (defaults to Operon Blue) */
  accentColor?: string;
}
