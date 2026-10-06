import React, { useState, useEffect } from 'react';
import { Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';
import { ScreenshotAsset } from '../../../types/documentation/guide';

export interface ScreenshotViewerProps {
  screenshot: ScreenshotAsset;
  className?: string;
  stepNumber?: number;
}

export const ScreenshotViewer: React.FC<ScreenshotViewerProps> = ({
  screenshot,
  className = '',
  stepNumber,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnnotated, setShowAnnotated] = useState(true);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Use annotatedUrl if available and toggled, else fallback to originalUrl
  const activeUrl = showAnnotated && screenshot.annotatedUrl
    ? screenshot.annotatedUrl
    : screenshot.originalUrl;

  const hasBothVersions = Boolean(screenshot.annotatedUrl && screenshot.originalUrl);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setZoomLevel(1);
    }
  }, [isOpen]);

  const handleOpenLightbox = () => {
    if (screenshot.originalUrl) {
      setShowAnnotated(false);
    }
    setIsOpen(true);
  };

  return (
    <div className={`mt-4 mb-6 ${className}`}>
      {/* Outer Card Frame */}
      <div className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md">
        
        {/* Top bar with Step tag and Toggle / Expand */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3.5 py-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-md bg-slate-200/70 px-2 py-0.5 font-mono font-medium text-slate-700">
              {stepNumber ? `Step ${stepNumber.toString().padStart(2, '0')}` : 'UI Reference'}
            </span>
            {hasBothVersions && (
              <div className="flex items-center rounded-lg bg-slate-200/60 p-0.5 text-[11px] font-medium text-slate-600">
                <button
                  type="button"
                  onClick={() => setShowAnnotated(true)}
                  className={`rounded-md px-2 py-0.5 transition-colors ${
                    showAnnotated
                      ? 'bg-white font-semibold text-operon-700 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Annotated
                </button>
                <button
                  type="button"
                  onClick={() => setShowAnnotated(false)}
                  className={`rounded-md px-2 py-0.5 transition-colors ${
                    !showAnnotated
                      ? 'bg-white font-semibold text-operon-700 shadow-xs'
                      : 'hover:text-slate-900'
                  }`}
                >
                  Original
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleOpenLightbox}
            className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-slate-500 transition-colors hover:bg-slate-200/60 hover:text-slate-900"
            title="Expand screenshot"
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Zoom</span>
          </button>
        </div>

        {/* Clickable Image Display */}
        <div
          onClick={handleOpenLightbox}
          className="relative aspect-[16/10] w-full cursor-zoom-in overflow-hidden bg-slate-100/50"
        >
          <img
            src={activeUrl}
            alt={screenshot.altText}
            className="h-full w-full object-contain object-top transition-transform duration-200 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-slate-900/0 opacity-0 transition-opacity group-hover:bg-slate-900/5 group-hover:opacity-100 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm shadow-md">
              <Maximize2 className="h-3.5 w-3.5" />
              Click to enlarge
            </span>
          </div>
        </div>

        {/* Caption */}
        {screenshot.caption && (
          <div className="border-t border-slate-100 bg-white px-4 py-2.5 text-xs text-slate-500">
            <p className="leading-normal">{screenshot.caption}</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-slate-950/85 backdrop-blur-md p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          {/* Lightbox Header Bar */}
          <div className="flex w-full max-w-6xl items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-sm tracking-tight text-white/90">
                {screenshot.altText}
              </span>
              {hasBothVersions && (
                <div className="flex items-center rounded-lg bg-white/10 p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setShowAnnotated(true)}
                    className={`rounded px-2.5 py-1 transition-colors ${
                      showAnnotated ? 'bg-operon-600 font-semibold text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Annotated
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAnnotated(false)}
                    className={`rounded px-2.5 py-1 transition-colors ${
                      !showAnnotated ? 'bg-operon-600 font-semibold text-white' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    Original
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.max(0.75, z - 0.25))}
                className="rounded-lg bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <span className="text-xs font-mono text-white/70 w-12 text-center">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
                className="rounded-lg bg-white/10 p-2 text-white/80 transition hover:bg-white/20 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="ml-3 rounded-lg bg-white/10 p-2 text-white/80 transition hover:bg-rose-600 hover:text-white"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Stage */}
          <div
            className="relative flex flex-1 w-full max-w-6xl items-center justify-center overflow-auto my-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <img
              src={activeUrl}
              alt={screenshot.altText}
              style={{ transform: `scale(${zoomLevel})` }}
              className="max-h-[82vh] max-w-full rounded-lg object-contain shadow-2xl transition-transform duration-150"
            />
          </div>

          {/* Lightbox Footer Caption */}
          {screenshot.caption && (
            <div className="max-w-3xl text-center text-xs text-white/70 pb-2">
              {screenshot.caption}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScreenshotViewer;
