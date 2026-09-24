'use client';

import { useState, useEffect } from 'react';

export default function PriceCalculator({ initialCars = [] }) {
  const [cars, setCars] = useState(initialCars);
  const [selectedCar, setSelectedCar] = useState(initialCars[0] || null);
  const [loading, setLoading] = useState(initialCars.length === 0);

  // Agar server tarafda initialCars berilmagan bo'lsa, client'da yuklaydi
  useEffect(() => {
    if (initialCars.length === 0) {
      fetch('/api/calculator')
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          if (data.length > 0) setSelectedCar(data[0]);
        })
        .catch((err) => console.error("Kalkulyator yuklashda xato:", err))
        .finally(() => setLoading(false));
    }
  }, [initialCars]);

  if (loading) {
    return (
      <div className="py-16 text-center text-slate-400 font-mono text-xs animate-pulse">
        PRAYS-LIST YUKLANMOQDA...
      </div>
    );
  }

  if (!cars || cars.length === 0) return null;

  // Narxni so'm formatiga o'tkazish funksiyasi
  const formatPrice = (price) => {
    if (!price) return '—';
    return new Intl.NumberFormat('ru-RU').format(price) + " so'm";
  };

  return (
    <section className="py-10">
      <div className="mb-6">
        <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
          — INTERAKTIV PRAYS-LIST
        </span>
        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">
          AVTOMOBILINGIZNI TANLANG
        </h2>
      </div>

      {/* Avtomobil tugmalari */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cars.map((car) => (
          <button
            key={car.id}
            onClick={() => setSelectedCar(car)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition cursor-pointer ${
              selectedCar?.id === car.id
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-emerald-400'
            }`}
          >
            {car.name}
          </button>
        ))}
      </div>

      {/* Xizmatlar oynasi */}
      {selectedCar && (
        <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800">
          <div className="bg-slate-950 rounded-2xl p-10 text-center mb-8 border border-slate-800">
            <h1 className="text-4xl md:text-6xl font-black tracking-wider text-emerald-400 uppercase">
              {selectedCar.name}
            </h1>
          </div>

          <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
            <h3 className="text-base font-bold uppercase tracking-wider text-slate-200">
              {selectedCar.name} — XIZMATLAR VA NARXLAR
            </h3>
            <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
              DIAGNOSTIKA: YAKUNLANDI
            </span>
          </div>

          <div className="space-y-6">
            {selectedCar.services && selectedCar.services.length > 0 ? (
              selectedCar.services.map((srv) => (
                <div
                  key={srv.id}
                  className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800/60 pb-4 gap-2"
                >
                  <div>
                    <h4 className="font-bold text-slate-100 text-base">{srv.title}</h4>
                    {srv.description && (
                      <p className="text-xs text-slate-400 mt-0.5">{srv.description}</p>
                    )}
                  </div>
                  <span className="text-lg font-black text-emerald-400 whitespace-nowrap">
                    {formatPrice(srv.price)}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-xs text-slate-400 text-center py-4 font-mono">
                Ushbu avtomobil uchun hozircha xizmatlar kiritilmagan.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}