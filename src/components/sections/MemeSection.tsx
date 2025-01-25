import { MemeGenerator } from '../MemeGenerator';

export const MemeSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#2A3B4E] to-[#1A232E]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-market text-center mb-12">Fish Meme Generator</h2>
        <div className="max-w-lg mx-auto">
          <MemeGenerator />
        </div>
      </div>
    </section>
  );
};