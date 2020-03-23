export enum RootScreens {
  FEATURES = 'FEATURES',
  LOGIN = 'LOGIN'
}

export type RootStackParamsList = {
  [RootScreens.LOGIN]: undefined,
  [RootScreens.FEATURES]: undefined
};

export enum FeatureScreens {
  HOME = 'HOME',
  BOARDS = 'BOARDS'
}
