import { Fish } from 'lucide-react';

export const FloatingFish = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(10)].map((_, i) => (
        <Fish
          key={i}
          className={`absolute text-blue-500/20 animate-float-${i}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 2 + 1})`,
          }}
        />
      ))}
    </div>
  );
};