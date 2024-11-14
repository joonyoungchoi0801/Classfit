export const API_SUBCLASS = Object.freeze({
  SUBCLASS: '/home/sub-category',
  SUBCLASSEDIT: (subClassId: number) => `/home/sub-category/${subClassId}`,
});

export const API_ATTENDANCE = Object.freeze({
  ATTENDANCE: '/home/',
  ATTENDANCEDETAIL: (mainClassId: number, subClassId: number) =>
    `/manage/attendance/${mainClassId}/${subClassId}`,
});

export const API_MAINCLASS = Object.freeze({
  MAINCLASS: '/home/main-category',
  MAINCLASSEDIT: (mainClassId: number) => `/home/main-category/${mainClassId}`,
});

export const API_STUDENT = Object.freeze({
  STUDENT: '/student/',
  STUDENTDETAIL: (studentId: number) => `/student/${studentId}`,
  STUDENTSEARCH: '/student/search',
});

export const API_CLASS = Object.freeze({
  CLASS: '/home/class-info',
});

export const API_SMS = Object.freeze({
  SMS: '/send-many',
});

export const API_EXCEL = Object.freeze({
  EXCEL: '/home/excel/download',
});
