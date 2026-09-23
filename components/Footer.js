import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded text-lg">
              ANGOR
            </div>
            <span className="font-bold text-white text-lg tracking-tight">SERVIS USTA</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-400">
            Professional ustaxona va sifatli avtoservis xizmatlari. Barcha turdagi ta'mirlash ishlariga rasmiy kafolat beramiz.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Bo'limlar</h4>
          <ul className="space-y-2.5 text-xs">
            <li><Link href="/xizmatlar" className="hover:text-amber-400 transition">Barcha xizmatlar</Link></li>
            <li><Link href="/narxlar" className="hover:text-amber-400 transition">Xizmatlar narxnomasi</Link></li>
            <li><Link href="/kafolat" className="hover:text-amber-400 transition">Kafolat shartlari</Link></li>
            <li><Link href="/vakansiyalar" className="hover:text-amber-400 transition">Bo'sh ish o'rinlari</Link></li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Ish tartibi</h4>
          <ul className="space-y-2 text-xs">
            <li className="flex justify-between border-b border-slate-800 pb-1.5">
              <span>Dushanba - Juma:</span>
              <span className="text-white font-medium">09:00 - 18:00</span>
            </li>
            <li className="flex justify-between border-b border-slate-800 pb-1.5">
              <span>Shanba:</span>
              <span className="text-white font-medium">09:00 - 16:00</span>
            </li>
            <li className="flex justify-between text-amber-500 font-medium pt-0.5">
              <span>Yakshanba:</span>
              <span>Dam olish kuni</span>
            </li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-base">Aloqa</h4>
          <div className="space-y-2.5 text-xs">
            <p>📍 Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 42-uy</p>
            <p className="text-white font-medium">📞 +998 (90) 123-45-67</p>
            <p>✉️ info@angor.uz</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-slate-950/50 py-4 text-xs text-center text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>&copy; {new Date().getFullYear()} Angor Servis. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-400">Maxfiylik siyosati</Link>
            <Link href="/terms" className="hover:text-slate-400">Ommaviy oferta</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}