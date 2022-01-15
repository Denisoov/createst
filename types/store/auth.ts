export enum CurrentForm {
  SIGN_IN = 'SignInForm',
  LOG_IN = 'LoginForm',
}

export interface LoginForm {
  first_name: String
  second_name: String
  patronymic: String
  username: String
  password: String
  [key: string]: any
}

export interface SignInForm {
  username: String
  password: String
}

export interface AuthState {
  currentForm: CurrentForm
  loginForm: LoginForm
  signInForm: SignInForm
}
