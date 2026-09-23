import Link from 'next/link';

export default function Sidebar() {
  const services = [
    { name: 'Texnik diagnostika', count: 'Bepul', href: '/xizmatlar/diagnostika' },
    { name: 'Dvigatel va uzatish qutisi', count: 'Ommabop', href: '/xizmatlar/dvigatel' },
    { name: 'Xodovoy qism ta’mirlash', count: 'Tezkor', href: '/xizmatlar/xodovoy' },
    { name: 'Elektrika va diagnostika', count: 'Kafolatli', href: '/xizmatlar/elektrika' },
    { name: 'Moy almashtirish', count: '15 min', href: '/xizmatlar/moy' },
    { name: 'Konditsioner servisi', count: 'Yangi', href: '/xizmatlar/konditsioner' },
  ];

  return (
    <aside className="w-full lg:w-72 flex flex-col gap-6 shrink-0">
      {/* Service Categories */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
        <h3 className="font-bold text-slate-900 text-base mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          Xizmat turlari
        </h3>
        <ul className="space-y-1">
          {services.map((item, idx) => (
            <li key={idx}>
              <Link 
                href={item.href}
                className="flex items-center justify-between p-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-amber-600 font-medium transition group"
              >
                <span>{item.name}</span>
                <span className="text-[11px] bg-slate-100 group-hover:bg-amber-100 text-slate-500 group-hover:text-amber-700 px-2 py-0.5 rounded font-semibold transition">
                  {item.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Emergency Call Box */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl p-5 shadow-md relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/10 rounded-full blur-xl"></div>
        <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-500/30">
          24/7 Evakuator
        </span>
        <h4 className="font-bold text-lg mt-3 leading-snug">Yo‘lda yordam kerakmi?</h4>
        <p className="text-slate-400 text-xs mt-1 leading-relaxed">
          Evakuator va joyida tezkor yordam ko‘rsatish xizmati.
        </p>
        <a 
          href="tel:+998901234567" 
          className="mt-4 inline-flex items-center justify-center w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-lg text-sm transition"
        >
          📞 Tezgina bog‘lanish
        </a>
      </div>
    </aside>
  );
}