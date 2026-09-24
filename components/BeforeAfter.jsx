'use client';

import { useState } from 'react';
import { getDirectusImageUrl } from '@/lib/directus';

export default function BeforeAfter({ initialItems = [] }) {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialItems.length >= 4);

  const handleLoadMore = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const currentOffset = items.length;
      
      // Directus'ga emas, o'zimizning Next.js API Route'ga so'rov yuboramiz
      const res = await fetch(`/api/before-after?limit=4&offset=${currentOffset}`);
      
      if (!res.ok) {
        throw new Error("API resursidan javob kelmadi");
      }

      const newItems = await res.json();

      if (!newItems || newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...newItems]);
        if (newItems.length < 4) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Yangi ma'lumotlarni yuklashda xatolik:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!items || items.length === 0) return null;

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
          <BeforeAfterCard
            key={item.id}
            item={{
              ...item,
              beforeImg: getDirectusImageUrl(item.before_image),
              afterImg: getDirectusImageUrl(item.after_image),
            }}
          />
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-xs font-mono uppercase rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                YUKLANMOQDA...
              </>
            ) : (
              "YANA KO'RSATISH ⤓"
            )}
          </button>
        </div>
      )}
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
        className="relative w-full h-64 rounded-xl overflow-hidden select-none cursor-ew-resize bg-slate-100"
        onMouseMove={handleMove}
        onTouchMove={(e) => {
          const touch = e.touches[0];
          const rect = e.currentTarget.getBoundingClientRect();
          const x = touch.clientX - rect.left;
          setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
        }}
      >
        {item.afterImg && (
          <img
            src={item.afterImg}
            alt={`${item.title || 'Natija'} - Keyin`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <span className="absolute bottom-3 right-3 bg-black/70 text-emerald-400 font-mono text-[10px] font-bold px-2 py-1 rounded-md z-10">
          KEYIN
        </span>

        {item.beforeImg && (
          <div
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <img
              src={item.beforeImg}
              alt={`${item.title || 'Natija'} - Oldin`}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 bg-black/70 text-white font-mono text-[10px] font-bold px-2 py-1 rounded-md z-10">
              OLDIN
            </span>
          </div>
        )}

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