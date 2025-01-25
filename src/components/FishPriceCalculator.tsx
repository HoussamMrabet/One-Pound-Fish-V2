import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export const FishPriceCalculator = () => {
  const [input, setInput] = useState('');

  const calculatePrice = (e: React.FormEvent) => {
    e.preventDefault();
    const audio = new Audio('/sounds/one-pound.mp3');
    audio.play();
  };

  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <h3 className="text-2xl font-market mb-4 flex items-center">
        <Calculator className="mr-2" /> Fish Price Calculator
      </h3>
      <form onSubmit={calculatePrice} className="space-y-4">
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 rounded bg-white/5 border border-white/20"
          placeholder="Enter amount of fish..."
        />
        <div className="text-2xl font-market">
          Total Price: £1.00
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition-colors"
        >
          Calculate
        </button>
      </form>
    </div>
  );
};