import React, { RefObject } from 'react';
import { RootScreens } from './Navigation';

export const navigationRef: RefObject<any> = React.createRef();

export const navigate = (name: RootScreens) => {
  (navigationRef.current as any).navigate(name);
};
