export interface SignupType {
  name: string;
  phonenum: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface ErrorProps {
  message?: string;
}
