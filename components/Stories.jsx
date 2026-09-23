'use client';
import { useState } from 'react';

export default function Stories() {
  const [activeStory, setActiveStory] = useState(null);

  // Directus CMS ulaganda bu ma'lumotlar bazadan keladi
  const stories = [
    {
      id: 1,
      date: '2026-09-10',
      thumb: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=200&auto=format&fit=crop',
      media: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop',
      title: 'Gentra Shumoisolyatsiya jarayoni',
    },
    {
      id: 2,
      date: '2026-09-09',
      thumb: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=200&auto=format&fit=crop',
      media: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop',
      title: 'Cobalt chexol tikish yakunlandi',
    },
  ];

  return (
    <div className="py-4 border-b border-slate-200/60 mb-6 overflow-x-auto">
      <div className="flex gap-6 items-center">
        {stories.map((story) => (
          <button
            key={story.id}
            onClick={() => setActiveStory(story)}
            className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
          >
            {/* Rangli halqa border */}
            <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-amber-500 via-emerald-600 to-amber-400 group-hover:scale-105 transition duration-200">
              <div className="p-0.5 bg-white rounded-full">
                <img
                  src={story.thumb}
                  alt={story.date}
                  className="w-14 h-14 rounded-full object-cover"
                />
              </div>
            </div>
            <span className="text-[11px] font-mono text-slate-500 font-medium">
              {story.date}
            </span>
          </button>
        ))}
      </div>

      {/* Modal - To'liq ekranda (Fullscreen) ochiladigan Story */}
      {activeStory && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveStory(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold z-10 hover:opacity-70"
          >
            ✕
          </button>

          <div className="relative w-full max-w-sm h-[80vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between p-4">
            <div className="flex items-center justify-between text-white text-xs font-mono border-b border-white/10 pb-2 z-10">
              <span>{activeStory.title}</span>
              <span className="text-slate-400">{activeStory.date}</span>
            </div>

            <img
              src={activeStory.media}
              alt={activeStory.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p className="text-white text-sm font-bold">{activeStory.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}