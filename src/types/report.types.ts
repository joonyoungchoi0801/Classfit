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

export interface AttendanceInfoData {
  attendanceStatus: string;
  attendanceCount: number;
}

export interface ExamHistoryData {
  examId: number;
  examName: string;
  standard: string;
  average: number;
  score: number;
}
export interface ReportDetailData {
  studentId: number;
  studentName: string;
  mainClassName: string;
  subClassName: string;
  reportName: string;
  startDate: string;
  endDate: string;
  attendanceInfoList: AttendanceInfoData[];
  totalAttendanceCount: number;
  examHistoryList: ExamHistoryData[];
  overallOpinion: string;
  studentOpinion: string;
}