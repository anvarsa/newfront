'use client';

export default function HeroSection() {
  return (
    <section className="w-full font-sans mb-10">
      {/* 1. Asosiy Hero Banner */}
      <div className="bg-[#f7f4ee] rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Chap Tomon: Matnlar, Tugmalar va Statistikalar */}
        <div className="flex-1 space-y-6">
          {/* Yuqori chiziqli sarlavha */}
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-amber-500"></span>
            <span className="text-xs font-mono font-bold tracking-widest text-amber-600 uppercase">
              SURXONDARYO · AVTOMOBIL SALONI USTAXONASI
            </span>
          </div>

          {/* Katta Bosh Sarlavha */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-slate-900 leading-none tracking-tight font-heading uppercase">
            SALONGA NAFAS<br />BAG'ISHLAYMIZ.
          </h1>

          {/* Tavsif Matni */}
          <p className="text-sm md:text-base text-slate-600 max-w-lg leading-relaxed font-normal">
            Shumoisolyatsiya, chexol qayta tikish, suv o'tkazmaydigan salon poliki va potolok almashtirish — har bir avtomobil modeliga moslashtirilgan xizmatlar, aniq narxlar bilan.
          </p>

          {/* Tugmalar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="bg-[#e2a03f] hover:bg-[#d49132] text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-sm cursor-pointer active:scale-95">
              Narxni ko'rish
            </button>
            <button className="bg-[#181d24] hover:bg-[#252c36] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-sm cursor-pointer active:scale-95">
              Yozilish
            </button>
          </div>

          {/* Statistikalar */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-md">
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
              <div className="text-[11px] text-slate-500 font-medium">O'rtacha bajarish muddati</div>
            </div>
          </div>
        </div>

        {/* O'ng Tomon: Diagnostika Vidjeti (To'q rangli blok) */}
        <div className="w-full lg:w-[420px] bg-[#1a2128] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-slate-800 flex flex-col justify-between min-h-[340px]">
          {/* Sarlavha va Vaqt */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-800/80 pb-3">
            <span>AVTOCHEXOL.UZ — DIAGNOSTIKA</span>
            <span>22:45:52</span>
          </div>

          {/* Doiraviy Grafik Indikatorlar */}
          <div className="grid grid-cols-2 gap-4 py-6 my-auto">
            {/* Indikator 1: Shumoisolyatsiya */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-28 h-16 flex items-end justify-center overflow-hidden">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-amber-500"
                    strokeDasharray="50, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white mt-1">Shovqin -18dB</span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider mt-0.5">SHUMOIZOLYATSIYA</span>
            </div>

            {/* Indikator 2: Suv O'tkazmaslik */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-28 h-16 flex items-end justify-center overflow-hidden">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-teal-500"
                    strokeDasharray="40, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white mt-1">100% quruq</span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider mt-0.5">SUV O'TKAZMASLIK</span>
            </div>
          </div>

          {/* Pastki Matn */}
          <p className="text-[11px] text-slate-400 leading-snug border-t border-slate-800/80 pt-3">
            Har bir buyurtma — model, material va narx bo'yicha alohida hisoblanadi.
          </p>
        </div>

      </div>

      {/* 2. Chegirma va Ortga Hisoblash Tasmasi */}
      <div className="bg-[#e2a03f] rounded-2xl p-3 sm:p-4 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-950 font-medium text-xs sm:text-sm shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[#181d24] text-white font-mono text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            CHEGIRMALI HAFTA
          </span>
          <span className="font-semibold">
            Full shumoisolyatsiyaga -15% — shu hafta amal qiladi
          </span>
        </div>

        {/* Vaqt taymeri */}
        <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
          <div className="bg-amber-600/30 px-2 py-1 rounded-md">05 kun</div>
          <div className="bg-amber-600/30 px-2 py-1 rounded-md">01 soat</div>
          <div className="bg-amber-600/30 px-2 py-1 rounded-md">14 daq</div>
        </div>
      </div>
    </section>
  );
}