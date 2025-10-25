'use client';

import React from 'react';

interface YoutubePlayerProps {
  videoId: string;
  className?: string;
}

export const YoutubePlayer: React.FC<YoutubePlayerProps> = ({ videoId, className }) => {
  return (
    <div className={`relative ${className}`} style={{ paddingBottom: '56.25%', height: 0 }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
