import { useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const ViralSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = document.getElementById('viral-video') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#2A3B4E] to-[#1A232E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-500"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              fontSize: `${Math.random() * 2 + 1}rem`,
            }}
          >
            🐟
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-5xl font-market text-center mb-12">The Viral Sensation</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="relative group rounded-lg overflow-hidden shadow-2xl">
            <div className="aspect-video bg-black">
              <video
                id="viral-video"
                className="w-full h-full"
                src="/song.mp4"
                loop
              ></video>
            </div>

            {/* Centered Play/Pause Button */}
            <div className="absolute inset-0 flex justify-center items-center">
              <button
                onClick={togglePlay}
                className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-400 transition-colors"
              >
                {isPlaying ? <Pause size={30} /> : <Play size={30} />}
              </button>
            </div>
          </div>

          {/* Stats and Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">37M+</div>
              <div className="text-blue-400">Views on YouTube</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">2012</div>
              <div className="text-blue-400">Year of viral fame</div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold mb-2">#1</div>
              <div className="text-blue-400">Most memorable market call</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
