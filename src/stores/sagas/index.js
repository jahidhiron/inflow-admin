import { all } from "redux-saga/effects";
import user from "./user";
import company from "./company";

const sagas = function* sagas() {
  yield all([user(), company()]);
};

export default sagas;
