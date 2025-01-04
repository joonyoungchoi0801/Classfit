export interface ExamData {
  examData: string;
  examName: string;
  examPeriod: string;
  examRange: string[];
  examDate: string;
  standard: string;
  highestScore: number;
}

export interface RegisterExamData {
  subClassId: number;
  mainClassId: number;
  examDate: string;
  standard: string;
  highestScore: number;
  examPeriod: string;
  examName: string;
  range: string[];
}

export interface ExamStudentData {
  studentId: number;
  name: string;
  score: string;
}

export interface ExamStudentDataWithChecked extends ExamStudentData {
  checked: boolean;
}

export interface StudentScoreData {
  studentId: number;
  score: number;
}
