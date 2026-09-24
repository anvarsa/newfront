import Stories from '@/components/Stories';
import HeroSection from '@/components/HeroSection';
import BeforeAfter from '@/components/BeforeAfter';
import MediaGallery from '@/components/MediaGallery';
import ContactSection from '@/components/ContactSection';
import PriceCalculator from '@/components/PriceCalculator';
import ArticlesSection from '@/components/ArticlesSection';
import { getStories, getBeforeAfterItems, getCarsWithServices } from '@/lib/directus';

export default async function HomePage() {
  // Barcha ma'lumotlarni Server komponentida parallel ravishda Directus'dan yuklaymiz
  const [stories, beforeAfterItems, initialCars] = await Promise.all([
    getStories(),
    getBeforeAfterItems(),
    getCarsWithServices(),
  ]);

  return (
    <div className="w-full px-4 py-6">
      {/* 1. Instagram Stories */}
      <Stories stories={stories} />

      {/* Asosiy Layout */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full space-y-12 min-w-0">
          {/* 2. Hero Section */}
          <HeroSection />

          {/* 3. Interaktiv Prays-list / Kalkulyator (Serverdan tayyor ma'lumot o'tadi) */}
          <PriceCalculator initialCars={initialCars} />

          {/* 4. Oldin va Keyin (Serverdan kelgan ma'lumot uzatiladi) */}
          <BeforeAfter initialItems={beforeAfterItems} />

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