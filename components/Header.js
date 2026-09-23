import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Topbar: Aloqa va ish vaqti */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>📍 Toshkent sh., Chilonzor t.</span>
            <span className="hidden sm:inline">⏰ Dush-Shanba: 09:00 - 18:00</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+998901234567" className="hover:text-amber-400 font-medium transition">
              📞 +998 (90) 123-45-67
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-amber-500 text-slate-900 p-2 rounded-lg font-black text-xl tracking-wider">
            ANGOR
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-lg leading-tight tracking-tight">SERVIS USTA</span>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase">Professional Ustaxona</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700">
          <Link href="/" className="hover:text-amber-600 transition">Bosh sahifa</Link>
          <Link href="/xizmatlar" className="hover:text-amber-600 transition">Xizmatlar</Link>
          <Link href="/narxlar" className="hover:text-amber-600 transition">Narxlar</Link>
          <Link href="/haqida" className="hover:text-amber-600 transition">Biz haqimizda</Link>
          <Link href="/aloqa" className="hover:text-amber-600 transition">Aloqa</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            href="/sorov" 
            className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-4 py-2.5 rounded-lg text-sm shadow-sm transition active:scale-95"
          >
            Usta chaqirish
          </Link>
        </div>
      </div>
    </header>
  );
}