export interface LoginData {
  email: string;
  password: string;
}

export interface SignupData extends LoginData {
  name: string;
  phoneNumber: string;
  passwordConfirm: string;
  emailToken: string;
}

export interface AcademyInviteData {
  email: string;
  code: string;
}

export interface AcademyCreateData extends AcademyInviteData {
  name: string;
}

export interface EmailVerifyData {
  email: string;
  code: string;
  purpose: 'SIGN_UP';
}
