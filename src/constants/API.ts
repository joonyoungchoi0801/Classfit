export const API_SUBCLASS = Object.freeze({
  SUBCLASS: '/v1/home/sub-category',
  SUBCLASSEDIT: (subClassId: number) => `/v1/home/sub-category/${subClassId}`,
});

export const API_ATTENDANCE = Object.freeze({
  ATTENDANCE: '/v1/home',
  ATTENDANCEDETAIL: (mainClassId: number, subClassId: number) =>
    `/v1/manage/attendance/${mainClassId}/${subClassId}`,
});

export const API_MAINCLASS = Object.freeze({
  MAINCLASS: '/v1/home/main-category',
  MAINCLASSEDIT: (mainClassId: number) =>
    `/v1/home/main-category/${mainClassId}`,
});

export const API_STUDENT = Object.freeze({
  STUDENT: '/v1/student',
  STUDENTDETAIL: (studentId: number) => `/v1/student/${studentId}`,
  STUDENTSEARCH: '/v1/student/search',
});

export const API_CLASS = Object.freeze({
  CLASS: '/v1/home/class-info',
});

export const API_SMS = Object.freeze({
  SMS: '/v1/send-many',
});

export const API_EXCEL = Object.freeze({
  EXCEL: '/v1/home/excel/download',
});
