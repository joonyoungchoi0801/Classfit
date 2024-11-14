export interface ClassData {
  data: ClassDataForm[];
}

export interface ClassDataForm {
  mainClassId: number;
  mainClassName: string;
  subClasses: SubClassData[];
}

interface SubClassData {
  mainClassId: number;
  subClassId: number;
  subClassName: string;
}
