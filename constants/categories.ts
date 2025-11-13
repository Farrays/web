import type { Category } from '../types/categories';

// Categories data for Home Page
// Primary color verified: #c82260 (primary-accent in tailwind.config)
// Images: Unsplash URLs (temporary - replace with own images)

export const CATEGORIES: Category[] = [
  {
    key: 'urbano',
    pillarSlug: '/clases/urbano-hip-hop-barcelona/',
    imageUrl: 'https://images.unsplash.com/photo-1545224144-b38cd309ef69?w=800&h=600&fit=crop&q=80', // Hip hop dance studio
    styles: [
      { key: 'afrobeat', slug: '/clases/afrobeat-barcelona/' },
      { key: 'dancehall', slug: '/clases/dancehall-barcelona/' },
      { key: 'femmology_heels', slug: '/clases/femmology-heels-barcelona/' },
      { key: 'hip_hop', slug: '/clases/hip-hop-barcelona/' },
      { key: 'hip_hop_reggaeton', slug: '/clases/hip-hop-reggaeton-barcelona/' },
      { key: 'reggaeton_cubano', slug: '/clases/reggaeton-cubano-reparto-barcelona/' },
      { key: 'sexy_reggaeton', slug: '/clases/sexy-reggaeton-barcelona/' },
      { key: 'sexy_style', slug: '/clases/sexy-style-barcelona/' },
      { key: 'twerk', slug: '/clases/twerk-barcelona/' },
      { key: 'commercial_dance', slug: '/clases/commercial-dance-barcelona/' },
      { key: 'kpop', slug: '/clases/k-pop-barcelona/' },
    ],
  },
  {
    key: 'salsa_bachata',
    pillarSlug: '/clases/salsa-bachata-barcelona/',
    imageUrl: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=600&fit=crop&q=80', // Salsa dancers
    styles: [
      { key: 'bachata', slug: '/clases/bachata-barcelona/' },
      { key: 'folklore_cubano', slug: '/clases/folklore-cubano-barcelona/' },
      { key: 'salsa_cubana', slug: '/clases/salsa-cubana-barcelona/' },
      { key: 'salsa_lady_style', slug: '/clases/salsa-lady-style-barcelona/' },
      { key: 'salsa_lady_timba', slug: '/clases/salsa-lady-timba-barcelona/' },
      { key: 'timba_cubana', slug: '/clases/timba-cubana-barcelona/' },
      { key: 'son_cubano', slug: '/clases/son-cubano-barcelona/' },
      { key: 'men_style_salsa', slug: '/clases/men-style-salsa-barcelona/' },
    ],
  },
  {
    key: 'danza',
    pillarSlug: '/clases/danza-barcelona/',
    imageUrl: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&h=600&fit=crop&q=80', // Ballet
    styles: [
      { key: 'afro_contemporaneo', slug: '/clases/afro-contemporaneo-barcelona/' },
      { key: 'afro_jazz', slug: '/clases/afro-jazz-barcelona/' },
      { key: 'ballet_clasico', slug: '/clases/ballet-clasico-barcelona/' },
      { key: 'contemporaneo', slug: '/clases/danza-contemporanea-barcelona/' },
      { key: 'modern_jazz', slug: '/clases/modern-jazz-barcelona/' },
      { key: 'stretching', slug: '/clases/stretching-barcelona/' },
      { key: 'bum_bum_gluteos', slug: '/clases/bum-bum-gluteos-barcelona/' },
    ],
  },
  {
    key: 'fitness',
    pillarSlug: '/clases/fitness-bailarines-barcelona/',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80', // Fitness workout
    styles: [
      { key: 'bum_bum_gluteos', slug: '/clases/bum-bum-gluteos-barcelona/' },
      { key: 'bum_bum_fit', slug: '/clases/bum-bum-fit-barcelona/' },
      { key: 'body_conditioning', slug: '/clases/body-conditioning-stretching-barcelona/' },
      { key: 'stretching', slug: '/clases/stretching-barcelona/' },
      { key: 'dance_barre', slug: '/clases/dance-barre-barcelona/' },
      { key: 'pilates', slug: '/clases/pilates-barcelona/' },
    ],
  },
  {
    key: 'mananas',
    pillarSlug: '/clases/mananas-barcelona/',
    imageUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&h=600&fit=crop&q=80', // Morning dance
    styles: [
      { key: 'afro_jazz', slug: '/clases/afro-jazz-barcelona/' },
      { key: 'contemporaneo', slug: '/clases/danza-contemporanea-barcelona/' },
      { key: 'sexy_reggaeton', slug: '/clases/sexy-reggaeton-barcelona/' },
      { key: 'sexy_style', slug: '/clases/sexy-style-barcelona/' },
      { key: 'otras_danzas', slug: '/clases/otras-danzas-barcelona/' },
    ],
  },
  {
    key: 'otras',
    pillarSlug: '/clases/otras-danzas-barcelona/',
    imageUrl: 'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&h=600&fit=crop&q=80', // Exotic dance
    styles: [
      { key: 'kizomba', slug: '/clases/kizomba-barcelona/' },
      { key: 'semba', slug: '/clases/semba-barcelona/' },
      { key: 'kompa', slug: '/clases/kompa-barcelona/' },
      { key: 'flamenco', slug: '/clases/flamenco-barcelona/' },
      { key: 'sevillanas', slug: '/clases/sevillanas-barcelona/' },
      { key: 'telas_aereas', slug: '/clases/telas-aereas-aro-barcelona/' },
      { key: 'acro_yoga', slug: '/clases/acro-yoga-barcelona/' },
    ],
  },
];

// TODO: Replace Unsplash URLs with own images
// Suggested path: /images/categories/[urbano|salsa_bachata|danza|fitness|mananas|otras].jpg
// Recommended dimensions: 800x600px (ratio 4:3)
