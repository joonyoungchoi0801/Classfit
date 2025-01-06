export interface statisticsDateData {
  date: string;
  week: number;
  present: number;
  absent: number;
  late: number;
}

export interface statisticsDateResponse {
  statusCode: number;
  resultType: string;
  data: statisticsDateData[];
  error: { message: string };
  message: string;
}

export interface statisticsDateDetail {
  statusCode: number;
  resultType: string;
  data: string[];
  message: string;
}

export interface statisticsMemberData {
  studentId: number;
  name: string;
  present: number;
  absent: number;
  late: number;
  extra: number;
}

export interface statisticsMemberResponse {
  statusCode: number;
  resultType: string;
  data: statisticsMemberData[];
  error: { message: string };
  message: string;
}
