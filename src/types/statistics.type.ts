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
