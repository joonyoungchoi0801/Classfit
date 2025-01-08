import { ExamStudentData, ExamStudentDataWithChecked } from '@/types/exam.type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface StudentStore {
  examStudentData: ExamStudentDataWithChecked[];
  setExamStudentData: (data: ExamStudentDataWithChecked[]) => void;
  addExamStudentData: (student: ExamStudentDataWithChecked) => void;
  removeExamStudentData: (studentId: number) => void;
  resetExamStudentData: () => void;
}

const useExamStudentStore = create<StudentStore>()(
  persist(
    (set) => ({
      examStudentData: [],
      setExamStudentData: (data: ExamStudentDataWithChecked[]) =>
        set({ examStudentData: data }),
      addExamStudentData: (student: ExamStudentDataWithChecked) =>
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
