import { Timeline } from './Timeline';

export const About = () => {
  return (
      <section className="py-20 px-4 bg-gradient-to-b from-[#1A232E] to-[#2A3B4E]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-market text-center mb-12">The Legend Returns</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-xl">
                In 2012, a humble fish vendor from Pakistan took London's Queens Market
                by storm with his iconic catchphrase...
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ETSl8gWsFZ0"
                  title="One Pound Fish Original"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-market">From Market Stall to Viral Star</h3>
              <Timeline />
            </div>
          </div>
        </div>
      </section>
  );
};