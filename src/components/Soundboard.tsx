import { useState, useRef } from 'react';
import { Music } from 'lucide-react';

export const Soundboard = () => {
  const sounds = [
    { name: 'Come on ladies!', file: '/comon_ladies.mp3' },
    { name: 'Very very cheap!', file: '/very_cheap.mp3' },
    { name: 'Have a have a look!', file: '/have_a_look.mp3' },
    { name: 'One pound fish', file: '/one_pound_fish.mp3' },
  ];

  const [currentSound, setCurrentSound] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (file: string) => {
    // Stop the currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset playback to start
    }

    // Start the new audio
    const audio = new Audio(file);
    audioRef.current = audio;
    audio.play();

    // Set the current sound
    setCurrentSound(file);

    // Clear the state when the audio ends
    audio.onended = () => {
      setCurrentSound(null);
    };
  };

  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <h3 className="text-2xl font-market mb-4 flex items-center">
        <Music className="mr-2" /> Fish Market Soundboard
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {sounds.map((sound) => (
          <button
            key={sound.file}
            onClick={() => playSound(sound.file)}
            className={`p-4 rounded border border-white/20 transition-colors ${
              currentSound === sound.file
                ? 'bg-blue-500 animate-pulse text-white'
                : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            {sound.name}
          </button>
        ))}
      </div>
    </div>
  );
};
