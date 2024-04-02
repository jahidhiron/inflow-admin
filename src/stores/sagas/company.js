import { all, put, takeLatest } from "redux-saga/effects";
import { successMessage } from "../../utilities/notification";
import {
  COMPANY_LIST,
  COMPANY_DETAIL,
  DELETE_COMPANY,
  UPDATE_COMPANY_STATUS,
  DIRECTORY_LIST,
  DIRECTOR_DETAIL,
  FULL_CR_INFO,
  COMPANY_INC,
  COMPANY_EMPLOYEE,
  COMPANY_CARD,
} from "../actions/company.actions.types";
import httpClient from "../services/http.client";

import * as Effects from "redux-saga/effects";
const call = Effects.call;

function* companyList({ payload: { callback } }) {
  const payload = {
    method: "get",
    url: "admin/company/applications?include_user=true&include_company_info=true",
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

function* companyDetail({ payload: { callback, companyId } }) {
  const payload = {
    method: "get",
    url: `admin/company/${companyId}`,
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

function* companyInc({ payload: { callback, companyId } }) {
  const payload = {
    method: "get",
    url: `admin/company/a_inc/${companyId}`,
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

function* deleteCompany({ payload: { callback, companyId } }) {
  const payload = {
    method: "delete",
    url: `admin/company/applications/${companyId}`,
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

function* updateCompanyStatus({ payload: { callback, companyId, data } }) {
  const payload = {
    data,
    method: "put",
    url: `admin/company/applications/${companyId}`,
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

function* directoryList({ payload: { callback, companyId } }) {
  const payload = {
    method: "get",
    url: `admin/company/directors/${companyId}`,
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

function* directorDetail({ payload: { callback, directorId } }) {
  const payload = {
    method: "get",
    url: `admin/company/directors/doc/${directorId}`,
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

function* fullCrInfo({ payload: { callback, companyId } }) {
  const payload = {
    method: "get",
    url: `admin/company/cr_info/${companyId}`,
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

function* companyEmployeeList({ payload: { callback, companyId } }) {
  const payload = {
    method: "get",
    url: `admin/company/employees/${companyId}`,
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

function* companyCardList({ payload: { callback, companyId } }) {
  const payload = {
    method: "get",
    url: `admin/paytabs/cards/${companyId}`,
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

function* Company() {
  yield all([takeLatest(COMPANY_LIST, companyList)]);
  yield all([takeLatest(COMPANY_DETAIL, companyDetail)]);
  yield all([takeLatest(COMPANY_INC, companyInc)]);
  yield all([takeLatest(DELETE_COMPANY, deleteCompany)]);
  yield all([takeLatest(UPDATE_COMPANY_STATUS, updateCompanyStatus)]);
  yield all([takeLatest(DIRECTORY_LIST, directoryList)]);
  yield all([takeLatest(DIRECTOR_DETAIL, directorDetail)]);
  yield all([takeLatest(FULL_CR_INFO, fullCrInfo)]);
  yield all([takeLatest(COMPANY_EMPLOYEE, companyEmployeeList)]);
  yield all([takeLatest(COMPANY_CARD, companyCardList)]);
}

export default Company;
