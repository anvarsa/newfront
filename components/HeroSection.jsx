'use client';

export default function HeroSection() {
  return (
    <section className="w-full font-sans mb-10">
      <div className="bg-[#f0fdf4] border border-emerald-900/10 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Chap Tomon */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-emerald-600"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-700 uppercase">
              SURXONDARYO · AVTOMOBIL SALONI USTAXONASI
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-none tracking-tight font-heading uppercase">
            SALONGA NAFAS<br />BAG'ISHLAYMIZ.
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
            Shumoisolyatsiya, chexol qayta tikish, suv o'tkazmaydigan salon poliki va potolok almashtirish — har bir avtomobil modeliga moslashtirilgan xizmatlar, aniq narxlar bilan.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-sm cursor-pointer active:scale-95">
              Narxni ko'rish
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-sm cursor-pointer active:scale-95">
              Yozilish
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-900/10 max-w-md">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">10+</div>
              <div className="text-[11px] text-slate-500 font-medium">Avtomobil modeli</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">94</div>
              <div className="text-[11px] text-slate-500 font-medium">Xizmat turi (jami)</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">1 kun</div>
              <div className="text-[11px] text-slate-500 font-medium">Bajarish muddati</div>
            </div>
          </div>
        </div>

        {/* O'ng Tomon: Diagnostika Vidjeti */}
        <div className="w-full lg:w-[420px] bg-slate-900 text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 flex flex-col justify-between min-h-[340px]">
          <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 border-b border-slate-800 pb-3">
            <span>ANGOR.UZ — DIAGNOSTIKA</span>
            <span>ONLINE</span>
          </div>

          <div className="grid grid-cols-2 gap-4 py-6 my-auto">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-28 h-16 flex items-end justify-center overflow-hidden">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-emerald-500" strokeDasharray="50, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white mt-1">Shovqin -18dB</span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider mt-0.5">SHUMOIZOLYATSIYA</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-28 h-16 flex items-end justify-center overflow-hidden">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-800" strokeWidth="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-teal-400" strokeDasharray="40, 100" strokeWidth="3.5" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white mt-1">100% quruq</span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider mt-0.5">SUV O'TKAZMASLIK</span>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 leading-snug border-t border-slate-800 pt-3">
            Har bir buyurtma — model, material va narx bo'yicha alohida hisoblanadi.
          </p>
        </div>

      </div>

      {/* Chegirma Tasmasi */}
      <div className="bg-emerald-600 text-white rounded-2xl p-3 sm:p-4 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 font-medium text-xs sm:text-sm shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-slate-900 text-emerald-300 font-mono text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            CHEGIRMALI HAFTA
          </span>
          <span className="font-semibold">
            Full shumoisolyatsiyaga -15% — shu hafta amal qiladi
          </span>
        </div>
        <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
          <div className="bg-emerald-700 px-2 py-1 rounded-md">05 kun</div>
          <div className="bg-emerald-700 px-2 py-1 rounded-md">01 soat</div>
          <div className="bg-emerald-700 px-2 py-1 rounded-md">14 daq</div>
        </div>
      </div>
    </section>
  );
}