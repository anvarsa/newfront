'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-sm">
      {/* Topbar */}
      <div className="bg-emerald-950 text-emerald-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">📍 Surxondaryo, Angor tumani</span>
            <span className="hidden sm:inline">⏰ Dush-Shanba: 09:00 - 18:00</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+998973503993" className="hover:text-emerald-400 font-medium transition">
              📞 +998 97 350-39-93
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-emerald-600 text-white p-2 rounded-xl font-black text-xl tracking-wider shadow-sm">
            ANGOR
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 text-lg leading-tight tracking-tight">SERVIS USTA</span>
            <span className="text-[10px] text-emerald-700 tracking-widest uppercase font-mono">Professional Ustaxona</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-700">
          <Link href="/" className="hover:text-emerald-600 transition">Bosh sahifa</Link>
          <Link href="/xizmatlar" className="hover:text-emerald-600 transition">Xizmatlar</Link>
          <Link href="/narxlar" className="hover:text-emerald-600 transition">Narxlar</Link>
          <Link href="/haqida" className="hover:text-emerald-600 transition">Biz haqimizda</Link>
          <Link href="/aloqa" className="hover:text-emerald-600 transition">Aloqa</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link 
            href="/sorov" 
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm shadow-sm transition active:scale-95"
          >
            Usta chaqirish
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-emerald-600 focus:outline-none"
        >
          <span className="text-2xl">{mobileMenuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-700 text-base">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600">Bosh sahifa</Link>
            <Link href="/xizmatlar" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600">Xizmatlar</Link>
            <Link href="/narxlar" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600">Narxlar</Link>
            <Link href="/haqida" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600">Biz haqimizda</Link>
            <Link href="/aloqa" onClick={() => setMobileMenuOpen(false)} className="hover:text-emerald-600">Aloqa</Link>
          </nav>
          <div className="pt-2">
            <Link 
              href="/sorov" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm shadow-sm"
            >
              Usta chaqirish
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}