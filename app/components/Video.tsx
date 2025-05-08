"use client";

import { JSX, useEffect, useRef } from "react";

export function Video(): JSX.Element {
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroVideo = "/coming-soon.webm";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [heroVideo]);

  return (
    <div className="relative w-full h-full flex items-start justify-center overflow-hidden pt-1">
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        autoPlay
        // loop
        muted
        preload="auto"
        className="object-cover scale-150 -ml-10"
      >
        <source src={heroVideo} type="video/webm" />
        {/* Optional: Add a track for captions if you have them */}
        {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
