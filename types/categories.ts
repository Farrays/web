// Types for Categories Section (Home Page)
// Verified: Vite + React architecture

export interface CategoryStyle {
  key: string; // 'afrobeat', 'dancehall', etc.
  slug: string; // '/clases/afrobeat-barcelona/'
}

export interface Category {
  key: string; // 'urbano', 'salsa_bachata', etc.
  pillarSlug: string; // '/clases/urbano-hip-hop-barcelona/'
  imageUrl: string; // Unsplash URL temporal
  styles: CategoryStyle[];
}

export interface CategoryCardProps {
  category: Category;
  onOpenModal: (categoryKey: string) => void;
}

export interface CategoryModalProps {
  isOpen: boolean;
  category: Category;
  onClose: () => void;
}
