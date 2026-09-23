import Link from 'next/link';

export default function Sidebar() {
  const services = [
    { name: 'Full Shumoisolyatsiya', count: 'Ommabop', href: '/xizmatlar/shumo' },
    { name: 'Ekokoja Chexol Tikish', count: 'Sifatli', href: '/xizmatlar/chexol' },
    { name: 'Suv O\'tkazmas Polik', count: '100%', href: '/xizmatlar/polik' },
    { name: 'Potolok Qoplash', count: 'Alcantara', href: '/xizmatlar/potolok' },
    { name: 'Panel (Tarpeda) ishlari', count: 'Tezkor', href: '/xizmatlar/tarpeda' },
  ];

  return (
    <aside className="w-full lg:w-72 flex-col gap-6 shrink-0 hidden lg:flex">
      {/* Service Categories */}
      <div className="bg-white border border-emerald-900/10 rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
          Xizmat turlari
        </h3>
        <ul className="space-y-1">
          {services.map((item, idx) => (
            <li key={idx}>
              <Link 
                href={item.href}
                className="flex items-center justify-between p-2.5 rounded-xl text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 font-medium transition group"
              >
                <span>{item.name}</span>
                <span className="text-[11px] bg-slate-100 group-hover:bg-emerald-100 text-slate-500 group-hover:text-emerald-800 px-2 py-0.5 rounded font-semibold transition">
                  {item.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Emergency Call Box */}
      <div className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-2xl p-5 shadow-md relative overflow-hidden border border-emerald-900/20">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl"></div>
        <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-500/30">
          24/7 Maslahat
        </span>
        <h4 className="font-bold text-lg mt-3 leading-snug">Savolingiz bormi?</h4>
        <p className="text-slate-400 text-xs mt-1 leading-relaxed">
          Ustaxonamiz mutaxassisidan bepul maslahat oling.
        </p>
        <a 
          href="tel:+998973503993" 
          className="mt-4 inline-flex items-center justify-center w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-sm transition shadow-sm"
        >
          📞 Tezgina bog‘lanish
        </a>
      </div>
    </aside>
  );
}