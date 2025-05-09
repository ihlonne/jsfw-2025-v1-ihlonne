import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image?: {
    url: string;
    alt: string;
  };
};

type CartStore = {
  items: CartItem[];
  addItem: (
    item: Omit<CartItem, 'quantity'>
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (
    id: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      hasHydrated: false,
      setHasHydrated: (state) =>
        set({ hasHydrated: state }),

      addItem: (item) => {
        const existing = get().items.find(
          (i) => i.id === item.id
        );
        if (existing) {
          set({
            items: get().items.map((i) =>
              i.id === item.id
                ? {
                    ...i,
                    quantity: i.quantity + 1,
                  }
                : i
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              { ...item, quantity: 1 },
            ],
          });
        }
      },

      removeItem: (id) =>
        set({
          items: get().items.filter(
            (i) => i.id !== id
          ),
        }),

      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity } : i
          ),
        }),

      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
