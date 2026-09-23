'use client';
import { useState } from 'react';

export default function MediaGallery() {
  const [tab, setTab] = useState('video');

  const videos = [
    { id: 1, title: 'Damas Shumoisolyatsiya jarayoni', url: '#' },
    { id: 2, title: 'Gentra salon polini qoplash', url: '#' },
  ];

  const photos = [
    { id: 1, title: 'Cobalt koja chexol', img: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop' },
    { id: 2, title: 'Tracker potolok qoplash', img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop' },
  ];

  return (
    <section className="py-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
            — GALLERY
          </span>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mt-1 font-heading">
            KUNLIK ISHLAR (VIDEO / FOTO)
          </h2>
        </div>
        <p className="text-xs text-slate-500 max-w-md">
          Har kuni ustaxonada bajarilayotgan ishlardan jarayonlar va natijalar.
        </p>
      </div>

      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab('video')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
            tab === 'video'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Videolar
        </button>
        <button
          onClick={() => setTab('photo')}
          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
            tab === 'photo'
              ? 'bg-emerald-600 text-white shadow-md'
              : 'bg-white border border-slate-200 text-slate-600'
          }`}
        >
          Rasmlar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tab === 'video' ? (
          videos.map((vid) => (
            <div
              key={vid.id}
              className="bg-white border border-dashed border-emerald-900/20 rounded-2xl h-60 flex flex-col items-center justify-center p-6 text-center hover:border-emerald-600 transition group cursor-pointer shadow-sm"
            >
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold mb-3 group-hover:scale-110 transition shadow-sm">
                ▶
              </div>
              <span className="text-sm font-bold text-slate-800">{vid.title}</span>
              <span className="text-xs text-emerald-700 mt-1">Videoni ko'rish ↗</span>
            </div>
          ))
        ) : (
          photos.map((pic) => (
            <div key={pic.id} className="bg-white border border-emerald-900/10 rounded-2xl overflow-hidden shadow-sm h-60 relative group">
              <img src={pic.img} alt={pic.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent p-4 flex items-end">
                <span className="text-white text-xs font-bold">{pic.title}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}