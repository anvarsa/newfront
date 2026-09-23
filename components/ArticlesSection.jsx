import Link from 'next/link';

export default function ArticlesSection() {
  const articles = [
    {
      id: 1,
      tag: 'CHEXOL',
      title: "Chexolni qachon almashtirish kerak?",
      desc: "Yirtilish, rang o'chishi va tikuv bo'shashi — chexolni yangilash vaqti kelganining belgilari.",
      image: null,
    },
    {
      id: 2,
      tag: "SUV O'TKAZMASLIK",
      title: "Salon poliki nima uchun himoyalanishi kerak?",
      desc: "Namlik metall qismlarni zanglatishi va yomon hidga sabab bo'lishi mumkin — oldini olish yechimlari.",
      image: null,
    },
    {
      id: 3,
      tag: "MAVSUMIY",
      title: "Qishga mashina salonini qanday tayyorlash kerak?",
      desc: "Sovuqda material xususiyatlari o'zgaradi — qaysi ishlarni qishdan oldin qilish tavsiya etiladi.",
      image: null,
    },
    {
      id: 4,
      tag: "SHUMOIZOLYATSIYA",
      title: "Nima uchun biz shumoisolyatsiya qilamiz?",
      desc: "Nima uchun biz shumoisolyatsiya qilamiz va bu sizga qanday qulaylik beradi.",
      image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop", 
    },
  ];

  return (
    <section className="py-10">
      {/* Sarlavha */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-amber-600 tracking-widest uppercase">
            — MAQOLALAR
          </span>
          <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight mt-1">
            FOYDALI TAVSIYALAR
          </h2>
        </div>
        <p className="text-xs text-slate-500 max-w-md">
          Mijozlar ko'p beradigan savollarga javoblar — nega bu xizmatlar kerak, qachon va qaysi birini tanlash lozim.
        </p>
      </div>

      {/* Postcardlar katakchasi (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((item) => (
          <div 
            key={item.id}
            className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            <div>
              {/* Rasm yoki To'q Blok */}
              <div className="h-44 bg-[#1e3a3a] flex items-center justify-center relative overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs font-mono text-emerald-200/60 uppercase tracking-widest">
                    MAQOLA RASMI
                  </span>
                )}
              </div>

              {/* Matn qismi */}
              <div className="p-5">
                <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-2">
                  {item.tag}
                </span>
                <h3 className="font-bold text-slate-900 text-base leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Link */}
            <div className="px-5 pb-5 pt-1">
              <Link 
                href={`/blog/${item.id}`} 
                className="inline-flex items-center text-xs font-bold text-slate-800 hover:text-amber-600 transition gap-1"
              >
                Batafsil o'qish &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}