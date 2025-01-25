import { FishPriceCalculator } from '../FishPriceCalculator';

export const CalculatorSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#1A232E] to-[#2A3B4E]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-market text-center mb-12">Fish Price Calculator</h2>
        <div className="max-w-lg mx-auto">
          <FishPriceCalculator />
        </div>
      </div>
    </section>
  );
};