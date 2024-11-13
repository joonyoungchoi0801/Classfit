export interface StudentData {
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
  subClassList?: string[];
  address?: string;
  remark?: string;
  counselingLog?: string;
}
