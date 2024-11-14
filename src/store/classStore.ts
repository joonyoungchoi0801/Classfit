import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ClassStore {
  mainClassId: number;
  setMainClassId: (mainClassId: number) => void;
  subClassId: number;
  setSubClassId: (subClassId: number) => void;
}

const useClassStore = create<ClassStore>()(
  persist(
    (set) => ({
      mainClassId: 0,
      setMainClassId: (mainClassId: number) => set({ mainClassId }),
      subClassId: 0,
      setSubClassId: (subClassId: number) => set({ subClassId }),
    }),
    {
      name: 'class-storage',
    }
  )
);

export default useClassStore;
