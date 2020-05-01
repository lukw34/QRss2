export enum RootScreens {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION',
  LOADING = 'LOADING'
}

export type RootStackParamsList = {
  [RootScreens.LOGIN]: undefined,
  [RootScreens.MAIN]: undefined,
  [RootScreens.REGISTRATION]: undefined
  [RootScreens.LOADING]: undefined
};

export enum Screens {
  HOME = 'HOME',
  BOARDS = 'BOARDS'
}
