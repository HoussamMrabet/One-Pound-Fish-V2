import { useState, useEffect, useRef } from 'react';
import { Gamepad } from 'lucide-react';

interface GameObject {
  id: number;
  x: number;
  y: number;
  speed: number;
  caught: boolean;
  type: 'fish' | 'bomb';
}

export const FishGame = () => {
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [objects, setObjects] = useState<GameObject[]>([]);
  const [highScore, setHighScore] = useState(0);
  const gameRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>();
  const [timeLeft, setTimeLeft] = useState(30);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setObjects([]);
  };

  const endGame = () => {
    setGameActive(false);
    setHighScore(prev => Math.max(prev, score));
  };

  const spawnObject = () => {
    if (objects.length < 5) {
      const isBomb = Math.random() < 0.2;
      const newObject: GameObject = {
        id: Date.now(),
        x: -50,
        y: Math.random() * (gameRef.current?.clientHeight ?? 300),
        speed: 0.6 + Math.random() * 0.8,
        caught: false,
        type: isBomb ? 'bomb' : 'fish'
      };
      setObjects(prev => [...prev, newObject]);
    }
  };

  const updateGame = () => {
    setObjects(prev => {
      return prev
        .map(obj => ({
          ...obj,
          x: obj.x + obj.speed
        }))
        .filter(obj => obj.x < (gameRef.current?.clientWidth ?? 400) + 50);
    });
  };

  const handleClick = (obj: GameObject) => {
    if (!gameActive) return;

    if (obj.type === 'bomb') {
      endGame();
      return;
    }

    setObjects(prev =>
      prev.map(o =>
        o.id === obj.id && !o.caught
          ? { ...o, caught: true }
          : o
      )
    );
    setScore(prev => prev + 1);
  };

  useEffect(() => {
    let interval: number;
    
    if (gameActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      endGame();
    }

    return () => clearInterval(interval);
  }, [gameActive, timeLeft, score]);

  useEffect(() => {
    const spawnInterval = setInterval(spawnObject, 1000);
    if (gameActive) {
      const gameLoop = () => {
        updateGame();
        frameRef.current = requestAnimationFrame(gameLoop);
      };
      frameRef.current = requestAnimationFrame(gameLoop);
    }
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      clearInterval(spawnInterval);
    };
  }, [gameActive]);
  
  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <h3 className="text-2xl font-market mb-4 flex items-center">
        <Gamepad className="mr-2" /> Catch the Fish!
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between text-lg">
          <div>Score: {score}</div>
          <div>High Score: {highScore}</div>
          <div>Time: {timeLeft}s</div>
        </div>

        <div
          ref={gameRef}
          className="relative h-64 bg-[#1A232E] rounded-lg overflow-hidden border border-white/20"
        >
          {!gameActive && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <button
                onClick={startGame}
                className="bg-blue-500 text-white px-6 py-3 rounded-full z-50 hover:bg-blue-400 transition-colors"
              >
                {score > 0 ? 'Play Again' : 'Start Game'}
              </button>
            </div>
          )}
          {objects.map(obj => (
            <button
              key={obj.id}
              onClick={() => handleClick(obj)}
              className={`absolute transition-opacity ${
                obj.caught ? 'opacity-0' : 'opacity-100'
              }`}
              style={{
                left: `${obj.x}px`,
                top: `${obj.y}px`,
                transform: 'translate(-50%, -50%) scale(2)'
              }}
            >
              {obj.type === 'fish' ? '🐟' : '💣'}
            </button>
          ))}
        </div>

        <p className="text-sm text-center text-white/70">
          Click the fish to catch them! Each catch is worth one pound!<br/>
          <span className="text-red-400">Watch out for bombs - they'll end your game!</span>
        </p>
      </div>
    </div>
  );
};