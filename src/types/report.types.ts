export interface RegisterReportData {
  mainClassId: number;
  subClassId: number;
  reportName: string;
  startDate: string;
  endDate: string;
  examIdList: number[];
  overallOpinion: string;
}

export interface StudentOpinionData {
  reportId: number;
  studentId: number;
  studentOpinion: string;
}

export interface ReportStudentData {
  studentId: number;
  studentName: string;
}

export interface ReportExamData {
  examId: number;
  examPeriod: string;
  mainClassName: string;
  subClassName: string;
  examName: string;
}

export interface ReportData {
  studentReportId: number;
  studentId: number;
  studentName: string;
  reportName: string;
  memberName: string;
  createAt: string;
}

export interface ReportDataWithChecked extends ReportData {
  checked: boolean;
}

export interface ReportExamDataWithChecked extends ReportExamData {
  checked: boolean;
}

export interface ReportStudentOpinionData extends ReportStudentData {
  reportId: number;
  studentOpinion: string;
}

export interface ReportStudentOpinionDataWithChecked
  extends ReportStudentOpinionData {
  checked: boolean;
}
