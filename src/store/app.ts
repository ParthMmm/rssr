import create from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  filter: string;
  setFilter: (filter: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  filter: 'greentech',
  setFilter: (filter: string) => set({ filter }),
}));

interface AppPersistState {
  //   currentProfile: Profile | null;
  //   setCurrentProfile: (currentProfile: Profile | null) => void;
  bookmarks: string[];
  addBookmark: (title: string) => void;
  removeBookmark: (title: string) => void;
}

export const useAppPersistStore = create(
  persist<AppPersistState>(
    (set) => ({
      bookmarks: [],
      addBookmark: (title) =>
        set((state) => ({ bookmarks: [...state.bookmarks, title] })),
      removeBookmark: (title) => {
        set((state) => ({
          bookmarks: state.bookmarks.filter((item) => item !== title),
        }));
      },
    }),
    { name: 'rssr.store' }
  )
);
