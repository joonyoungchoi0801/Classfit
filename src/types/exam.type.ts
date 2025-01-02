export interface examData {
  examData: string;
  examName: string;
  examPeriod: string;
  examRange: string[];
  examDate: string;
  standard: string;
  highestScore: number;
}

export interface registerExamData {
  subClassId: number;
  mainClassId: number;
  examDate: string;
  standard: string;
  highestScore: number;
  examPeriod: string;
  examName: string;
  range: string[];
}
