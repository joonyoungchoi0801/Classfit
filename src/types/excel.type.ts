export interface Attendance {
  id: number;
  date: string;
  status: string;
}

export interface ExcelData {
  id: number;
  name: string;
  attendance: Attendance[];
}

// export interface ExcelResponse {
//   statusCode: number;
//   resultType: string;
//   data: ExcelData[];
//   error: {
//     message: string;
//   };
//   message: string;
// }
