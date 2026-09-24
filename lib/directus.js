const DIRECTUS_URL = (process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://angor.uz').replace(/\/$/, '');

// 1. Stories ma'lumotlarini olish funksiyasi
export async function getStories() {
  try {
    const res = await fetch(`${DIRECTUS_URL}/items/stories_gallery?sort[]=-date`, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!res.ok) {
      console.error("Directus response error (getStories):", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Directus connection error (getStories):", error);
    return [];
  }
}

// 2. BEFORE AFTER UCHUN
export async function getBeforeAfterItems(limit = 4, offset = 0) {
  try {
    const url = `${DIRECTUS_URL}/items/before_after_items?sort[]=-id&limit=${limit}&offset=${offset}`;

    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.error("Directus response error (getBeforeAfterItems):", res.status, res.statusText);
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Directus connection error (getBeforeAfterItems):", error);
    return [];
  }
}

// 3. Kalkulyator uchun mashinalar va ularning xizmatlarini olish
export async function getCarsWithServices() {
  try {
    const url = `${DIRECTUS_URL}/items/cars?fields=id,name,slug,services.id,services.title,services.description,services.price&sort=sort`;

    const res = await fetch(url, {
      cache: 'no-store',
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      console.error("Directus response error (getCarsWithServices):", res.status, res.statusText);
      return [];
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.error("Directus JSON o'rniga HTML qaytardi!");
      return [];
    }

    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error("Directus connection error (getCarsWithServices):", error);
    return [];
  }
}

// 4. Rasm URL manzilini hosil qiluvchi funksiya
export function getDirectusImageUrl(image) {
  if (!image) return null;
  
  if (typeof image === 'string' && (image.startsWith('http://') || image.startsWith('https://'))) {
    return image;
  }

  const imageId = typeof image === 'object' && image !== null ? (image.id || image.filename_disk) : image;

  if (!imageId) return null;

  return `${DIRECTUS_URL}/assets/${imageId}`;
}