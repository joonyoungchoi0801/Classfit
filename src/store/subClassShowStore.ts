import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ClassState {
  isSubClassShow: boolean;
  setIsSubClassShow: (value: boolean) => void;
}

const useSubClassShowStore = create<ClassState>()(
  persist(
    (set) => ({
      isSubClassShow: false,
      setIsSubClassShow: (value) => set({ isSubClassShow: value }),
    }),
    {
      name: 'subclass-storage',
    }
  )
);

export default useSubClassShowStore;
