'use client';
import { useState } from 'react';
import { getDirectusImageUrl } from '@/lib/directus';

export default function Stories({ stories = [] }) {
  const [activeStory, setActiveStory] = useState(null);

  if (!stories || stories.length === 0) {
    return null;
  }

  return (
    <div className="py-3 border-b border-emerald-900/10 mb-6 overflow-x-auto scrollbar-none">
      <div className="flex gap-5 items-center">
        {stories.map((story) => {
          const imageUrl = getDirectusImageUrl(story.image);
          return (
            <button
              key={story.id}
              onClick={() => setActiveStory(story)}
              className="flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none shrink-0"
            >
              <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 group-hover:scale-105 transition duration-200 shadow-sm">
                <div className="p-0.5 bg-white rounded-full">
                  <img
                    src={imageUrl}
                    alt={story.title || story.date}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
              </div>
              <span className="text-[11px] font-mono text-slate-600 font-medium">
                {story.date}
              </span>
            </button>
          );
        })}
      </div>

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
              <span className="text-emerald-400">{activeStory.date}</span>
            </div>

            <img
              src={getDirectusImageUrl(activeStory.image)}
              alt={activeStory.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl mt-auto">
              <p className="text-white text-sm font-bold">{activeStory.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}