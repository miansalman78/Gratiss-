import { create } from 'zustand';

// Types
export interface Item {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
  price?: number;
  isFeatured?: boolean;
}

export interface UserPreferences {
  selectedInterests: string[];
  theme: 'light' | 'dark';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  preferences: UserPreferences;
}

interface StoreState {
  // Items
  items: Item[];

  // User
  user: User | null;

  // Saved/Wishlist
  savedItems: string[]; // Array of item IDs

  // Computed values
  getFeaturedItems: () => Item[];

  // Actions
  setItems: (items: Item[]) => void;
  addToSaved: (itemId: string) => void;
  removeFromSaved: (itemId: string) => void;
  toggleSaved: (itemId: string) => void;
  isSaved: (itemId: string) => boolean;
  updateUserPreferences: (preferences: Partial<UserPreferences>) => void;
  setUser: (user: User) => void;
}

export const useStore = create<StoreState>((set, get) => ({
  // Initial state
  items: [],
  user: null,
  savedItems: [],

  // Computed values
  getFeaturedItems: () => {
    const { items } = get();
    return items.filter((item) => item.isFeatured);
  },

  // Actions
  setItems: (items) => set({ items }),

  addToSaved: (itemId) =>
    set((state) => ({
      savedItems: [...state.savedItems, itemId]
    })),

  removeFromSaved: (itemId) =>
    set((state) => ({
      savedItems: state.savedItems.filter((id) => id !== itemId)
    })),

  toggleSaved: (itemId) => {
    const { savedItems } = get();
    if (savedItems.includes(itemId)) {
      get().removeFromSaved(itemId);
    } else {
      get().addToSaved(itemId);
    }
  },

  isSaved: (itemId) => {
    const { savedItems } = get();
    return savedItems.includes(itemId);
  },

  updateUserPreferences: (preferences) =>
    set((state) => ({
      user: state.user
        ? {
          ...state.user,
          preferences: { ...state.user.preferences, ...preferences }
        }
        : null
    })),

  setUser: (user) => set({ user }),
}));
