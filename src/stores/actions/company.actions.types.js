import { createAction } from "redux-actions";

export const COMPANY_LIST = "COMPANY_LIST";
export const companyList = createAction(COMPANY_LIST);

export const COMPANY_DETAIL = "COMPANY_DETAIL";
export const companyDetail = createAction(COMPANY_DETAIL);

export const COMPANY_INC = "COMPANY_INC";
export const companyInc = createAction(COMPANY_INC);

export const DELETE_COMPANY = "DELETE_COMPANY";
export const deleteCompany = createAction(DELETE_COMPANY);

export const UPDATE_COMPANY_STATUS = "UPDATE_COMPANY_STATUS";
export const updateCompanyStatus = createAction(UPDATE_COMPANY_STATUS);

export const DIRECTORY_LIST = "DIRECTORY_LIST";
export const directoryList = createAction(DIRECTORY_LIST);

export const DIRECTOR_DETAIL = "DIRECTOR_DETAIL";
export const directorDetail = createAction(DIRECTOR_DETAIL);

export const FULL_CR_INFO = "FULL_CR_INFO";
export const fullCrInfo = createAction(FULL_CR_INFO);

export const COMPANY_EMPLOYEE = "COMPANY_EMPLOYEE";
export const companyEmployee = createAction(COMPANY_EMPLOYEE);

export const COMPANY_CARD = "COMPANY_CARD";
export const companyCard = createAction(COMPANY_CARD);
