export enum RootScreens {
  MAIN = 'MAIN',
  LOGIN = 'LOGIN'
}

export type RootStackParamsList = {
  [RootScreens.LOGIN]: undefined,
  [RootScreens.MAIN]: undefined
};

export enum Screens {
  HOME = 'HOME',
  BOARDS = 'BOARDS'
}
