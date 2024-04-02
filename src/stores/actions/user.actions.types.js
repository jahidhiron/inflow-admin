import { createAction } from "redux-actions";

export const INIT_SIGN_IN = "INIT_SIGN_IN";
export const initSIgnIn = createAction(INIT_SIGN_IN);

export const LOGIN = "LOGIN";
export const login = createAction(LOGIN);

export const REGISTER = "REGISTER";
export const register = createAction(REGISTER);

export const VERIFY_EMAIL = "VERIFY_EMAIL";
export const verifyEmail = createAction(VERIFY_EMAIL);

export const FORGOT_PASSWORD = "FORGOT_PASSWORD";
export const forgotPassword = createAction(FORGOT_PASSWORD);

export const RESET_PASSWORD = "RESET_PASSWORD";
export const resetPassword = createAction(RESET_PASSWORD);

export const SET_AUTHENTICATION_TOKEN = "SET_AUTHENTICATION_TOKEN";
export const setAuthenticationToken = createAction(SET_AUTHENTICATION_TOKEN);

export const GET_USER_PREFERENCE = "GET_USER_PREFERENCE";
export const getUserPreference = createAction(GET_USER_PREFERENCE);

export const UPDATE_USER_PREFERENCE = "UPDATE_USER_PREFERENCE";
export const updateUserPreference = createAction(UPDATE_USER_PREFERENCE);

export const GET_SITE_PREFERENCE = "GET_SITE_PREFERENCE";
export const getSitePreference = createAction(GET_SITE_PREFERENCE);

export const UPDATE_SITE_PREFERENCE = "UPDATE_SITE_PREFERENCE";
export const updateSitePreference = createAction(UPDATE_SITE_PREFERENCE);

export const LOGOUT = "LOGOUT";
export const logout = createAction(LOGOUT);
