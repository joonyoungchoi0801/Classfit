export const STUDENT_FIELD = Object.freeze({
  NAME: 'name',
  GENDER: 'gender',
  BIRTH: 'birth',
  STUDENT_NUMBER: 'studentNumber',
  PARENT_NUMBER: 'parentNumber',
  GRADE: 'grade',
  SUB_CLASS_LIST: 'subClassList',
  ADDRESS: 'address',
  REMARK: 'remark',
  COUNSELING_LOG: 'counselingLog',
});

export const STUDENT_FIELD_LIST = Object.freeze(Object.values(STUDENT_FIELD));

export const STUDENT_INFO_PATH = Object.freeze({
  LIST: 'list',
  REGISTER: 'register',
  EDIT: 'edit',
});
