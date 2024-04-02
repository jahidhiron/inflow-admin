import React, { lazy } from "react";
import * as ROUTE from "./routesConstant";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../components/Layout/PublicLayout";
import PrivateLayout from "../components/Layout/PrivateLayout";
import Loading from "../components/helpers/Loading";
const SignIn = lazy(() => import("../pages/SignIn/SignIn"));

const Pagenotfound = lazy(() => import("../pages/PageNotFound/PageNotFound"));
const ForgetPassword = lazy(() =>
  import("../pages/ForgetPassword/ForgetPassword")
);
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Setting = lazy(() => import("../pages/Setting/Setting"));
const CompanyList = lazy(() => import("../pages/company/CompanyList"));
const CompanyDetail = lazy(() => import("../pages/company/CompanyDetail"));
const CompanyDetailViewMore = lazy(() => import("../pages/company/ViewMore"));
const CrInformation = lazy(() => import("../pages/company/CrInformation"));
const TransactionDetail = lazy(() =>
  import("../pages/company/TransactionDetail")
);
const ManageEmployee = lazy(() => import("../pages/company/ManageEmployee"));
const SelectPlan = lazy(() => import("../pages/company/SelectPlan"));
const ManagePlan = lazy(() => import("../pages/company/ManagePlan"));
const PlanList = lazy(() => import("../pages/plans/PlanList"));
const CreatePlan = lazy(() => import("../pages/plans/CreatePlan"));

const Router = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTE.HOME} element={<SignIn />} />
          <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE.FORGETPASS} element={<ForgetPassword />} />
          <Route path="*" element={<Pagenotfound />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path={ROUTE.DASHBOARD} element={<Dashboard />} />
          <Route path={ROUTE.SETTING} element={<Setting />} />
          <Route path={ROUTE.COMPANIES} element={<CompanyList />} />
          <Route path={ROUTE.COMPANY_DETAIL} element={<CompanyDetail />} />
          <Route
            path={ROUTE.COMPANY_DETAIL_VIEW_MORE}
            element={<CompanyDetailViewMore />}
          />
          <Route path={ROUTE.CR_INFO} element={<CrInformation />} />
          <Route
            path={ROUTE.TRANSACTION_DETAIL}
            element={<TransactionDetail />}
          />
          <Route path={ROUTE.MANAGE_EMPLOYEE} element={<ManageEmployee />} />
          <Route path={ROUTE.SELECT_PLAN} element={<SelectPlan />} />
          <Route path={ROUTE.MANAGE_PLAN} element={<ManagePlan />} />
          <Route path={ROUTE.PLANS} element={<PlanList />} />
          <Route path={ROUTE.CREATE_PLAN} element={<CreatePlan />} />
          <Route path="*" element={<Pagenotfound />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default Router;
