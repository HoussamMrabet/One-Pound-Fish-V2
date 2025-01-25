import { FishGame } from '../FishGame';

export const GameSection = () => {
  return (
    <section className="py-20 px-4 bg-[#1A232E]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-market text-center mb-12">Fish Catching Game</h2>
        <div className="max-w-lg mx-auto">
          <FishGame />
        </div>
      </div>
    </section>
  );
};