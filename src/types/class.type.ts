export interface GetClassInfoResponse {
  statusCode: number;
  resultType: string;
  data: ClassData[];
}

export interface ClassData {
  mainClassId: number;
  mainClassName: string;
  subClasses: SubClassData[];
}

export interface SubClassData {
  mainClassId: number;
  subClassId: number;
  subClassName: string;
}
