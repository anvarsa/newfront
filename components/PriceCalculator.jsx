'use client';
import { useState } from 'react';

export default function PriceCalculator() {
  const [selectedCar, setSelectedCar] = useState('Damas');

  const cars = ['Damas', 'Cobalt', 'Gentra', 'Matiz', 'Spark', 'Onix', 'Tracker', 'Tiko', 'Labo', 'Nexia'];

  const services = {
    Damas: [
      { name: 'Full shumoisolyatsiya', desc: 'Salonning barcha qismlari (eshik, tarpeda, potolok, pol, bagaj)', price: '1 799 999 so\'m' },
      { name: 'Shumoisolyatsiya — Eshiklar (4 ta)', desc: '4 ta eshikni shovqin o\'tkazmaydigan material bilan qoplash', price: '800 000 so\'m' },
      { name: 'Shumoisolyatsiya — Tarpeda (panel)', desc: 'Old panel qismini shumoisolyatsiya qilish', price: '450 000 so\'m' },
    ],
    Cobalt: [
      { name: 'Full shumoisolyatsiya Premium', desc: 'SGM materiallari bilan to\'liq ishlov berish', price: '2 400 000 so\'m' },
      { name: 'Chexol tikish (Koja)', desc: 'Sifatli ekokoja materialidan tikib berish', price: '1 200 000 so\'m' },
    ],
  };

  const currentList = services[selectedCar] || services['Damas'];

  return (
    <section className="py-10">
      <div className="mb-6">
        <span className="text-xs font-mono font-bold text-amber-600 tracking-widest uppercase">
          — INTERAKTIV PRAYS-LIST
        </span>
        <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">
          AVTOMOBILINGIZNI TANLANG
        </h2>
      </div>

      {/* Model tanlash tugmalari */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cars.map((car) => (
          <button
            key={car}
            onClick={() => setSelectedCar(car)}
            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition ${
              selectedCar === car
                ? 'bg-[#181e24] text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-400'
            }`}
          >
            {car}
          </button>
        ))}
      </div>

      {/* To'q rangli banner va xizmatlar oynasi */}
      <div className="bg-[#181e24] text-white rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="bg-[#212830] rounded-2xl p-12 text-center mb-8 border border-slate-700/50">
          <h1 className="text-5xl md:text-7xl font-black tracking-wider text-amber-500 uppercase">
            {selectedCar}
          </h1>
        </div>

        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
          <h3 className="text-base font-bold uppercase tracking-wider text-slate-200">
            {selectedCar} — XIZMATLAR VA NARXLAR
          </h3>
          <span className="text-[11px] font-mono text-amber-500 font-bold uppercase">
            DIAGNOSTIKA: YAKUNLANDI
          </span>
        </div>

        <div className="space-y-6">
          {currentList.map((srv, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800/60 pb-4 gap-2">
              <div>
                <h4 className="font-bold text-slate-100 text-base">{srv.name}</h4>
                <p className="text-xs text-slate-400 mt-0.5">{srv.desc}</p>
              </div>
              <span className="text-lg font-black text-amber-400 whitespace-nowrap">
                {srv.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}