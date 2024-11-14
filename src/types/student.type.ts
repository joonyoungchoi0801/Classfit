export interface GetStudentResponse {
  statusCode: number;
  resultType: string;
  data: StudentListData[];
  error: { message: string };
  message: string;
}

export interface StudentListData {
  studentId: number;
  name: string;
  studentNumber: string;
  isStudent: boolean;
}

export interface StudentData {
  name: string;
  gender: string;
  birth: string;
  studentNumber: string;
  parentNumber: string;
  grade: string;
  subClassList: number[];
  address: string;
  remark?: string;
  counselingLog?: string;
}

export interface PatchedStudentData {
  name?: string;
  gender?: string;
  birth?: string;
  studentNumber?: string;
  parentNumber?: string;
  grade?: string;
  subClassList?: number[];
  address?: string;
  remark?: string;
  counselingLog?: string;
}
