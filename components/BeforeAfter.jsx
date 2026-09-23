'use client';
import { useState } from 'react';

export default function BeforeAfter() {
  const items = [
    {
      id: 1,
      title: "Gentra — Salon Shumoisolyatsiyasi",
      beforeImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Cobalt — Ekokoja Chexol Tikish",
      beforeImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Damas — Suv O'tkazmas Polik",
      beforeImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Tracker — Alcantara Potolok",
      beforeImg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
      afterImg: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-10 bg-[#eef6f2] rounded-3xl my-8 p-6 md:p-8 border border-emerald-900/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
            — NATIJALAR
          </span>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mt-1 font-heading">
            OLDIN / KEYIN
          </h2>
        </div>
        <p className="text-xs text-slate-600 max-w-md">
          Surat ustiga bosing yoki suring — har bir ishning oldingi va keyingi holatini taqqoslang.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <BeforeAfterCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function BeforeAfterCard({ item }) {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  return (
    <div className="bg-white p-3 rounded-2xl border border-emerald-900/10 shadow-sm">
      <div
        className="relative w-full h-64 rounded-xl overflow-hidden select-none cursor-ew-resize"
        onMouseMove={handleMove}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          const rect = e.currentTarget.getBoundingClientRect();
          const x = touch.clientX - rect.left;
          setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
        }}
      >
        <img
          src={item.afterImg}
          alt="Keyin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute bottom-3 right-3 bg-black/70 text-emerald-400 font-mono text-[10px] font-bold px-2 py-1 rounded-md z-10">
          KEYIN
        </span>

        <div
          className="absolute top-0 left-0 bottom-0 overflow-hidden border-r-2 border-emerald-500"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={item.beforeImg}
            alt="Oldin"
            className="absolute top-0 left-0 h-full max-w-none"
            style={{ width: '600px' }}
          />
          <span className="absolute bottom-3 left-3 bg-black/70 text-white font-mono text-[10px] font-bold px-2 py-1 rounded-md z-10">
            OLDIN
          </span>
        </div>

        <div
          className="absolute top-0 bottom-0 w-0.5 bg-emerald-500 z-20 pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 bg-emerald-500 text-white font-bold rounded-full flex items-center justify-center text-[10px] shadow-md">
            ↔
          </div>
        </div>
      </div>

      <div className="pt-3 px-1">
        <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
      </div>
    </div>
  );
}