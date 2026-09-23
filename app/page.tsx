import Stories from '@/components/Stories';
import HeroSection from '@/components/HeroSection';
import BeforeAfter from '@/components/BeforeAfter';
import MediaGallery from '@/components/MediaGallery';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 space-y-10">
      {/* 1. Instagram Stories */}
      <Stories />

      {/* 2. Rasmdagi HeroSection (Alohida) */}
      <HeroSection />
      {/* 2. Rasmdagi HeroSection (Alohida) */}
 

      {/* 3. Oldin va Keyin (4x2 / 8 ta rasm Grid) */}
      <BeforeAfter />

      {/* 4. Kunlik Ishlar (Video / Foto galereya) */}
      <MediaGallery />

      {/* 5. Aloqa va Google Maps Xaritasilari */}
      <ContactSection />
    </div>
  );
}