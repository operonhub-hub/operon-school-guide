import React from 'react';
import { AnnotationRegion } from '../../../types/documentation/annotation';

export interface ImageAnnotationProps {
  imageSrc: string;
  altText: string;
  annotations?: AnnotationRegion[];
  className?: string;
}

export const ImageAnnotation: React.FC<ImageAnnotationProps> = ({
  imageSrc,
  altText,
  annotations = [],
  className = '',
}) => {
  return (
    <div className={`relative overflow-hidden rounded-xl bg-slate-100 ${className}`}>
      <img
        src={imageSrc}
        alt={altText}
        className="h-full w-full object-contain"
        loading="lazy"
      />
      {annotations.map((region) => (
        <div
          key={region.id}
          style={{
            top: `${region.y}%`,
            left: `${region.x}%`,
            width: `${region.width ?? 10}%`,
            height: `${region.height ?? 10}%`,
            borderColor: region.accentColor || '#2563EB',
          }}
          className="group absolute rounded-lg border-2 bg-operon-500/10 transition-all hover:bg-operon-500/20"
        >
          {(region.markerNumber || region.label) && (
            <span className="absolute -top-7 left-0 rounded bg-operon-600 px-2 py-0.5 font-mono text-[10px] font-bold text-white shadow-xs">
              {region.markerNumber ? `#${region.markerNumber} ` : ''}
              {region.label || ''}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageAnnotation;
