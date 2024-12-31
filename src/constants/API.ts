export const API_SUBCLASS = Object.freeze({
  SUBCLASS: '/v1/home/sub-category',
  SUBCLASSEDIT: (subClassId: number) => `/v1/home/sub-category/${subClassId}`,
});

export const API_ATTENDANCE = Object.freeze({
  ATTENDANCE: '/v1/home/',
  ATTENDANCEDETAIL: (mainClassId: number, subClassId: number) =>
    `/v1/home/${mainClassId}/${subClassId}`,
});

export const API_MAINCLASS = Object.freeze({
  MAINCLASS: '/v1/home/main-category',
  MAINCLASSEDIT: (mainClassId: number) =>
    `/v1/home/main-category/${mainClassId}`,
});

export const API_STUDENT = Object.freeze({
  STUDENT: '/v1/student/',
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

export const API_AUTH = Object.freeze({
  LOGIN: '/v1/signin',
  SIGNUP: '/v1/signup',
  LOGOUT: '/v1/logout',
  REISSUE: '/v1/reissue',
  PASSWORD: '/v1/password',
});

export const API_ACADEMY = Object.freeze({
  INVITE: '/v1/academy/invite',
  CREATE: '/v1/academy/create',
  CODE: '/v1/academy/code',
});

export const API_EMAIL = Object.freeze({
  VERIFY: '/v1/mail/verify',
  SEND: '/v1/mail/send',
});
