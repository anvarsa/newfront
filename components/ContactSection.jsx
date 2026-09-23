export default function ContactSection() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Chap taraf */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs font-mono font-bold text-emerald-700 tracking-widest uppercase">
              — BOG'LANISH
            </span>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mt-1 font-heading">
              BIZ BILAN ALOQA
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Savolingiz bormi yoki narx bilmoqchimisiz? Quyidagi kanallardan birini tanlang yoki ustaxonamizga tashrif buyuring.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white border border-emerald-900/10 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
              <span className="text-xl">📞</span>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Telefon</span>
                <span className="text-xs text-slate-500">+998 97 350-39-93</span>
              </div>
            </div>

            <div className="bg-white border border-emerald-900/10 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
              <span className="text-xl">✈️</span>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Telegram</span>
                <span className="text-xs text-slate-500">https://t.me/avtochexol</span>
              </div>
            </div>

            <div className="bg-white border border-emerald-900/10 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
              <span className="text-xl">📍</span>
              <div>
                <span className="text-xs font-bold text-slate-900 block">Manzil</span>
                <span className="text-xs text-slate-500">Surxondaryo viloyati, Angor tumani</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-2 border border-emerald-900/10 rounded-3xl overflow-hidden shadow-sm h-64">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50840.42845232742!2d67.22891962383838!3d37.30561561081512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f352bf656a82741%3A0xb3a0b5368a25d214!2sAngor%2C%20Surxondaryo%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* O'ng taraf: Forma */}
        <div className="lg:col-span-7 bg-white border border-emerald-900/10 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-black text-slate-900 text-2xl mb-6 uppercase font-heading">
              TEZ MUROJAAT QOLDIRING
            </h3>

            <form className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Ismingiz</label>
                <input 
                  type="text" 
                  placeholder="Ismingizni kiriting" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Telefon raqamingiz</label>
                <input 
                  type="text" 
                  placeholder="+998 __ ___ __ __" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Avtomobil modeli</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-600">
                  <option>Damas</option>
                  <option>Cobalt</option>
                  <option>Gentra</option>
                  <option>Tracker</option>
                  <option>Onix</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Xabar (ixtiyoriy)</label>
                <textarea 
                  rows={4} 
                  placeholder="Qaysi xizmatlar kerakligini yozing..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-emerald-600 resize-none"
                ></textarea>
              </div>

              <button 
                type="button" 
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-xl text-sm uppercase tracking-wider transition shadow-sm active:scale-95 mt-2"
              >
                Telegram orqali yuborish
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}