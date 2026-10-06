import React, { useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';
import { VideoAsset } from '../../../types/documentation/guide';

export interface VideoViewerProps {
  video: VideoAsset;
  className?: string;
}

export const VideoViewer: React.FC<VideoViewerProps> = ({ video, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration || 1;
    setProgress((current / total) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const targetTime = (parseFloat(e.target.value) / 100) * (videoRef.current.duration || 0);
    videoRef.current.currentTime = targetTime;
    setProgress(parseFloat(e.target.value));
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-900 shadow-lg ${className}`}>
      {/* Video Header */}
      {video.title && (
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2.5 text-xs text-slate-300">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-block h-2 w-2 rounded-full bg-operon-500"></span>
            <span>{video.title}</span>
          </div>
          {video.duration && (
            <span className="font-mono text-slate-400">{video.duration}</span>
          )}
        </div>
      )}

      {/* Video Container */}
      <div className="group relative aspect-video w-full bg-black">
        <video
          ref={videoRef}
          src={video.src}
          poster={video.posterUrl}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          onClick={togglePlay}
          className="h-full w-full object-contain cursor-pointer"
          playsInline
        />

        {/* Big Center Play Button Overlay (when paused) */}
        {!isPlaying && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex cursor-pointer items-center justify-center bg-slate-950/40 backdrop-blur-xs transition-opacity"
          >
            <button
              type="button"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-operon-600 text-white shadow-xl ring-4 ring-operon-600/30 transition-all duration-200 hover:scale-110 hover:bg-operon-500"
              aria-label="Play video"
            >
              <Play className="h-7 w-7 fill-white translate-x-0.5" />
            </button>
          </div>
        )}

        {/* Floating Bottom Control Bar */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {/* Progress bar */}
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-operon-500"
          />

          <div className="mt-2 flex items-center justify-between text-xs text-white">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={togglePlay}
                className="rounded p-1.5 transition hover:bg-white/20"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={restartVideo}
                className="rounded p-1.5 transition hover:bg-white/20"
                aria-label="Restart video"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={toggleMute}
                className="rounded p-1.5 transition hover:bg-white/20"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleFullscreen}
                className="rounded p-1.5 transition hover:bg-white/20"
                aria-label="Fullscreen"
              >
                <Maximize className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoViewer;
