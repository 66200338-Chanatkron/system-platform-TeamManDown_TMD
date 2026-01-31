import React from 'react';

interface VideoPlayerProps {
  embedUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ embedUrl }) => {
  return (
    <div className="relative w-full overflow-hidden pt-[56.25%] bg-black shadow-lg rounded-lg border border-gray-800">
      <iframe
        src={embedUrl}
        className="absolute top-0 left-0 w-full h-full"
        allowFullScreen
        // Sandbox for security
        sandbox="allow-scripts allow-same-origin allow-presentation"
        // Allow common features
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="DooStream Video Player"
      />
    </div>
  );
};

export default VideoPlayer;
