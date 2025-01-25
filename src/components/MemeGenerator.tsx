import { useState } from 'react';
import { Image } from 'lucide-react';
import html2canvas from 'html2canvas';

const MEME_TEMPLATES = [
  {
    id: 1,
    name: 'Classic Market Pose',
    url: '/1.jpeg',
    placeholder: 'Come on ladies...'
  },
  {
    id: 2,
    name: 'Fish Display',
    url: '/2.jpg',
    placeholder: 'Very very cheap!'
  },
  {
    id: 3,
    name: 'Market Stall',
    url: '/3.avif',
    placeholder: 'One pound fish!'
  }
];

export const MemeGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(MEME_TEMPLATES[0]);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const downloadMeme = async () => {
    const previewElement = document.getElementById('meme-preview');
    if (!previewElement) return;

    const canvas = await html2canvas(previewElement);
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'meme.png';
    link.click();
  };

  return (
    <div className="bg-white/10 p-6 rounded-lg">
      <h3 className="text-2xl font-market mb-4 flex items-center">
        <Image className="mr-2" /> Fish Meme Generator
      </h3>

      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {MEME_TEMPLATES.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template)}
              className={`p-1 rounded ${
                selectedTemplate.id === template.id
                  ? 'ring-2 ring-blue-500'
                  : 'hover:ring-2 hover:ring-blue-500/50'
              }`}
            >
              <img
                src={template.url}
                alt={template.name}
                className="w-full h-20 object-cover rounded"
              />
            </button>
          ))}
        </div>

        <div className="space-y-2">
          <input
            type="text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            placeholder="Top text"
            className="w-full p-2 rounded bg-white/5 border border-white/20"
          />
          <input
            type="text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            placeholder={selectedTemplate.placeholder}
            className="w-full p-2 rounded bg-white/5 border border-white/20"
          />
        </div>

        <div
          id="meme-preview"
          className="relative bg-black rounded-lg overflow-hidden"
        >
          <img
            src={selectedTemplate.url}
            alt="Meme template"
            className="w-full rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-between p-4">
            <h2 className="text-2xl font-market text-white uppercase text-stroke text-center">
              {topText || ' '}
            </h2>
            <h2 className="text-2xl font-market text-white uppercase text-stroke text-center">
              {bottomText || selectedTemplate.placeholder}
            </h2>
          </div>
        </div>

        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition-colors"
          onClick={downloadMeme}
        >
          Download Meme
        </button>
      </div>
    </div>
  );
};