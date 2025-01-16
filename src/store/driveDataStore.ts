import { create } from 'zustand';

interface DriveDataStore {
  isNewFolder: boolean;
  setIsNewFolder: (isNewFolder: boolean) => void;
  path: string;
  setPath: (path: string) => void;
}

const useDriveDataStore = create<DriveDataStore>()((set) => ({
  isNewFolder: true,
  setIsNewFolder: (isNewFolder: boolean) => set({ isNewFolder }),
  path: '',
  setPath: (path: string) => set({ path }),
}));

export default useDriveDataStore;
