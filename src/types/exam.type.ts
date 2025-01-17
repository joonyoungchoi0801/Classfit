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

export interface ModifyExamData {
  examDate: string;
  standard: string;
  highestScore: number;
  examPeriod: string;
  examName: string;
  examRange: string[];
}

export interface ExamStudentData {
  studentId: number;
  name: string;
  score: string;
  evaluationDetail: string;
}

export interface ExamStudentDataWithChecked extends ExamStudentData {
  checkedStudent: boolean;
}

export interface ExamStudentDataWithEdited extends ExamStudentDataWithChecked {
  isEdited: boolean;
}

export interface StudentScoreData {
  studentId: number;
  score: number;
  evaluationDetail?: string;
  checkedStudent: boolean;
}

export interface ExamData {
  examId: number;
  memberId: number;
  createdByName: string;
  standard: string;
  mainClassName: string;
  subClassName: string;
  examName: string;
  examPeriod: string;
  examDate: string;
}

export interface ExamInfoData {
  examPeriod: string;
  examName: string;
  examDate: string;
  mainClassName: string;
  subClassName: string;
  lowestScore: number;
  perfectScore: number;
  highestScore: number;
  average: number;
  examRange: string[];
  standard: string;
}
export interface ExamDetailData extends ExamInfoData {
  examClassStudents: ExamStudentData[];
}
