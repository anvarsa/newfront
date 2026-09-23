import Stories from '@/components/Stories';
import HeroSection from '@/components/HeroSection';
import BeforeAfter from '@/components/BeforeAfter';
import MediaGallery from '@/components/MediaGallery';
import ContactSection from '@/components/ContactSection';
import PriceCalculator from '@/components/PriceCalculator';
import ArticlesSection from '@/components/ArticlesSection';
import Sidebar from '@/components/Sidebar';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* 1. Instagram Stories */}
      <Stories />

      {/* Asosiy Layout: Chapda Sidebar (mobilga mos yashirin), O'ngda kontent */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
      

        <div className="flex-1 w-full space-y-12 min-w-0">
          {/* 2. Hero Section */}
          <HeroSection />

          {/* 3. Interaktiv Prays-list / Kalkulyator */}
          <PriceCalculator />

          {/* 4. Oldin va Keyin */}
          <BeforeAfter />

          {/* 5. Kunlik Ishlar (Video / Foto galereya) */}
          <MediaGallery />

          {/* 6. Foydali Maqolalar */}
          <ArticlesSection />

          {/* 7. Aloqa va Google Maps Xaritasi */}
          <ContactSection />
        </div>
      </div>
    </div>
  );
}