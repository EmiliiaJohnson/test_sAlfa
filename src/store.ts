import create from 'zustand';

interface Item {
  id: string;
  title: string;
  image: string;
}

interface ItemStore {
  items: Item[];
  loading: boolean;
  error: string | null;
  fetchItems: () => Promise<void>;
}

const useItemStore = create<ItemStore>((set) => ({
  items: [],
  loading: false,
  error: null,

  fetchItems: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      set({ items: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch items', loading: false });
    }
  },
}));

export default useItemStore;