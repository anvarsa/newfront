// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-6 bg-white rounded-2xl">
      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
        <span className="text-4xl font-bold text-[#00875A]">404</span>
      </div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Sahifa topilmadi
      </h2>
      
      <p className="text-gray-500 max-w-md mb-6">
        Kechirasiz, siz qidirayotgan sahifa mavjud emas yoki o‘chirilgan bo‘lishi mumkin.
      </p>

      <Link 
        href="/"
        className="px-6 py-2.5 bg-[#00875A] text-white font-medium rounded-xl hover:bg-emerald-700 transition-colors shadow-sm"
      >
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
}