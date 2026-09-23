import { createDirectus, rest } from '@directus/sdk';

const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://angor.uz';

// EKS PORT qismini 'export const directus' shaklida yozing:
export const directus = createDirectus(directusUrl).with(rest());
