import { createAction } from 'typesafe-actions';

export const showLoadingScreen = createAction('@navigation/SHOW_LOADING_SCREEN',
                                              (message: string) => ({
                                                message
                                              }))();

export const hideLoadingScreen = createAction('@navigation/HIDE_LOADING_SCREEN')();
