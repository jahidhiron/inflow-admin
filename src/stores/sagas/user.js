import { all, put, takeLatest } from "redux-saga/effects";
import { successMessage } from "../../utilities/notification";
import { userslice } from "../slices/user";

import {
  LOGIN,
  REGISTER,
  VERIFY_EMAIL,
  FORGOT_PASSWORD,
  INIT_SIGN_IN,
  LOGOUT,
  RESET_PASSWORD,
  GET_USER_PREFERENCE,
  UPDATE_USER_PREFERENCE,
  GET_SITE_PREFERENCE,
  UPDATE_SITE_PREFERENCE,
} from "../actions/user.actions.types";

import httpClient from "../services/http.client";

import * as Effects from "redux-saga/effects";
const call = Effects.call;

function* registerHandler({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "signup",
  };
  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: false,
  });
  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    successMessage(result.message);
    if (callback) {
      callback({ success: true, data: null });
    }
  }
}

function* verifyEmailHandler({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "verifyemail",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: false,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    successMessage(result.message);
    if (callback) {
      callback({ success: true, data: null });
    }
  }
}

function* forgotPasswordHandler({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "put",
    url: "/user/reset-password-init",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: false,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    successMessage(result.message);
    if (callback) {
      callback({ success: false, data: null });
    }
  }
}

function* resetPassword({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "/user/reset-password",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: false,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    successMessage(result.message);
    if (callback) {
      callback({ success: false, data: null });
    }
  }
}

function* initSignIn({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "/admin/auth/otp",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: false,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    // yield put(userslice.actions.setAuthenticationToken(result.data?.token));
    // yield put(userslice.actions.loginAction(result.data));
    if (callback) {
      callback({ success: true, data: null });
    }
  }
}

function* login({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "/admin/auth/login",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: false,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    yield put(userslice.actions.setAuthenticationToken(result.data?.token));
    yield put(userslice.actions.loginAction(result.data));
    if (callback) {
      callback({ success: true, data: null });
    }
  }
}

function* logout({ payload: { callback } }) {
  yield put(userslice.actions.logOutAction());
  if (callback) {
    callback({ success: true, data: null });
  }
}

function* getUserPreference({ payload: { callback } }) {
  const payload = {
    method: "get",
    url: "/preferences/user",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* updateUserPreference({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "/preferences/user",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* getSitePreference({ payload: { callback } }) {
  const payload = {
    method: "get",
    url: "/preferences/site",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* updateSitePreference({ payload: { data, callback } }) {
  const payload = {
    data,
    method: "post",
    url: "/preferences/site",
  };

  const { error, result } = yield call(httpClient, {
    payload: payload,
    isLoader: true,
    authorization: true,
  });

  if (error) {
    if (callback) {
      callback({ success: false, data: null });
    }
  } else {
    if (callback) {
      callback({ success: true, data: result.data });
    }
  }
}

function* User() {
  yield all([
    takeLatest(LOGIN, login),
    takeLatest(REGISTER, registerHandler),
    takeLatest(FORGOT_PASSWORD, forgotPasswordHandler),
    takeLatest(VERIFY_EMAIL, verifyEmailHandler),
    takeLatest(INIT_SIGN_IN, initSignIn),
    takeLatest(LOGOUT, logout),
    takeLatest(RESET_PASSWORD, resetPassword),
    takeLatest(GET_USER_PREFERENCE, getUserPreference),
    takeLatest(UPDATE_USER_PREFERENCE, updateUserPreference),
    takeLatest(GET_SITE_PREFERENCE, getSitePreference),
    takeLatest(UPDATE_SITE_PREFERENCE, updateSitePreference),
  ]);
}

export default User;
