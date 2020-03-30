export enum RootScreens {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN',
  REGISTRATION = 'REGISTRATION'
}

export type RootStackParamsList = {
  [RootScreens.LOGIN]: undefined,
  [RootScreens.MAIN]: undefined,
  [RootScreens.REGISTRATION]: undefined
};

export enum Screens {
  HOME = 'HOME',
  BOARDS = 'BOARDS'
}
