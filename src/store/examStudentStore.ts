import { ExamStudentData } from '@/types/exam.type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StudentStore {
  examStudentData: ExamStudentData[];
  setExamStudentData: (data: ExamStudentData[]) => void;
  addExamStudentData: (student: ExamStudentData) => void;
  removeExamStudentData: (studentId: number) => void;
  resetExamStudentData: () => void;
}

const useExamStudentStore = create<StudentStore>()(
  persist(
    (set) => ({
      examStudentData: [],
      setExamStudentData: (data: ExamStudentData[]) =>
        set({ examStudentData: data }),
      addExamStudentData: (student: ExamStudentData) =>
        set((state) => ({
          examStudentData: [...state.examStudentData, student],
        })),
      removeExamStudentData: (studentId: number) =>
        set((state) => ({
          examStudentData: state.examStudentData.filter(
            (s) => s.studentId !== studentId
          ),
        })),
      resetExamStudentData: () => set({ examStudentData: [] }),
    }),
    {
      name: 'student-storage',
    }
  )
);

export default useExamStudentStore;
