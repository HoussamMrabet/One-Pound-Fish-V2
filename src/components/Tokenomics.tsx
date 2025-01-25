export const Tokenomics = () => {
  return (
    <section className="py-20 px-4 bg-[#2A3B4E]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-market text-center mb-12">Fish-nomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-lg receipt-paper">
            <div className="text-center border-b-2 border-dashed border-white/20 pb-4">
              <h3 className="text-2xl font-market">Supply</h3>
              <p className="text-4xl font-bold">1,000,000,000</p>
              <p className="text-sm">One Billion $FISH</p>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg receipt-paper">
            <div className="text-center border-b-2 border-dashed border-white/20 pb-4">
              <h3 className="text-2xl font-market">Tax</h3>
              <p className="text-4xl font-bold">1%</p>
              <p className="text-sm">Very Very Cheap!</p>
            </div>
          </div>
          <div className="bg-white/10 p-6 rounded-lg receipt-paper">
            <div className="text-center border-b-2 border-dashed border-white/20 pb-4">
              <h3 className="text-2xl font-market">Liquidity</h3>
              <p className="text-4xl font-bold">Locked</p>
              <p className="text-sm">Fresh As Fish!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};