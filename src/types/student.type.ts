export interface GetStudentResponse {
  statusCode: number;
  resultType: string;
  data: StudentListData[];
  error: { message: string };
  message: string;
}

export interface GetStudentDetailResponse {
  statusCode: number;
  resultType: string;
  data: StudentViewData;
  error: { message: string };
  message: string;
}

export interface GetStudentSearchResponse {
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
  //등록, 수정용 학생 데이터
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

export interface StudentViewData {
  //조회용 학생 데이터
  name: string;
  gender: string;
  birth: string;
  studentNumber: string;
  parentNumber: string;
  grade: string;
  subClassList: string[];
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
