export interface statisticsDateData {
  date: string;
  week: number;
  present: number;
  absent: number;
  late: number;
  extra: number;
}

export interface statisticsDateResponse {
  statusCode: number;
  resultType: string;
  data: statisticsDateData[];
  error: { message: string };
  message: string;
}
