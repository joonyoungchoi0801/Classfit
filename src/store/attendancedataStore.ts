import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AttendanceDataStore {
  attendanceData: AttendanceData[];
  setAttendanceData: (attendanceData: AttendanceData[]) => void;
}

interface AttendanceData {
  id: number;
  name: string;
  attendance: Attendance[];
}

interface Attendance {
  id: number;
  date: string;
  week: number;
  status: string;
}

const useAttendanceStore = create<AttendanceDataStore>()(
  persist(
    (set) => ({
      attendanceData: [],
      setAttendanceData: (attendanceData: AttendanceData[]) =>
        set({ attendanceData }),
    }),
    {
      name: 'attendance-storage',
    }
  )
);

export default useAttendanceStore;
