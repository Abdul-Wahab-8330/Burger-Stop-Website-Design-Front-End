import { useState, useRef } from "react";

// Replace with actual assets from Figma
import clockImage from "../assets/turbo-clock.png";
import videoThumbnail from "../assets/turbo-video-thumbnail.png";
import videoFile from "../assets/turbo-video.mp4";
import { Play, PlayIcon } from "lucide-react";

/**
 * TurboChargedSection
 * - Teal bg with TURBO CHARGED BURGERS heading + clock icon
 * - Video thumbnail with play button — click to play actual video
 */

export default function TurboChargedSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section className="w-full bg-primary md:px-5 px-2 pt-1 pb-8">

      {/* Top — Text + Clock */}
      <div className="w-full flex items-start justify-between px-0.5 pt-9 pb-5 md:px-1 lg:px-1 lg:pt-12">

        {/* Left — Heading */}
        <div className="flex flex-col max-w-full">
          {/* TURBO CHARGED */}
          <h2
            className="font-archivo-narrow xl:text-[116px] md:text-[70px] font-extrabold text-[35px] text-white uppercase leading-none"
            style={{  WebkitTextStroke: "0px #ffffff" }}
          >
            TURBO
          </h2>
          <h2
            className="font-spatial-black text-white xl:text-[166px] md:text-[100px] text-[43px] uppercase leading-none tracking-tight lg:-mt-5 lg:-mb-3 -mt-1"
            style={{ transform: 'scaleY(0.9)', WebkitTextStroke: "0px #ffffff" }}
          >
            CHARGED
          </h2>
          {/* BURGERS — italic secondary color */}
          <h2
            className="font-medium text-secondary font-extrabold uppercase xl:text-[116px] text-[38px] md:text-[70px] leading-none tracking-tight italic"
            style={{ WebkitTextStroke: "0px #1E1E1C", transform : 'scaleY(1.1)' }}
          >
            BURGERS
          </h2>
        </div>

        {/* Right — Clock/Badge Image */}
        <div className="shrink-0">
          <img
            src={clockImage}
            alt="Turbo Refuel Badge"
            className="w-24 h-24 md:w-35 md:h-35 lg:w-52 lg:h-52 object-contain"
          />
        </div>

      </div>

      {/* Bottom — Video */}
      <div className="relative w-full" style={{ aspectRatio: "16/9" , borderRadius:"17px", overflow: "hidden" }}>

        {/* Actual Video */}
        <video
          ref={videoRef}
          src={videoFile}
          className="absolute inset-0 w-full h-full object-cover"
          controls={playing}
          playsInline
        />

        {/* Thumbnail overlay — hides when playing */}
        {!playing && (
          <div className="absolute inset-0 w-full h-full">
            <img
              src={videoThumbnail}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.55)" }}
            />

            {/* Play Button */}
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 flex items-center justify-center group"
            >
              <PlayIcon fill="white" className="md:w-24 md:h-24 w-14 h-14 text-white opacity-85 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        )}

      </div>

    </section>
  );
}