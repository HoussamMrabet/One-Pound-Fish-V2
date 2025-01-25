export const Timeline = () => {
  const events = [
    {
      date: '2012',
      title: 'Queens Market Debut',
      description: 'Muhammad Shahid Nazir begins his legendary market calls',
    },
    {
      date: 'Dec 2012',
      title: 'Viral Sensation',
      description: 'YouTube video reaches millions of views worldwide',
    },
    {
      date: '2025',
      title: 'Crypto Revolution',
      description: 'One Pound Fish Token launches, bringing the legend to Web3',
    },
  ];

  return (
    <div className="space-y-8">
      {events.map((event, index) => (
        <div key={index} className="relative pl-8 border-l-2 border-blue-500">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
          <div className="font-market text-blue-400">{event.date}</div>
          <h4 className="text-xl font-bold">{event.title}</h4>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};