import React, { useContext } from "react";

import { Navigate, Outlet } from "react-router-dom";
import * as ROUTE from "../../../routes/routesConstant";
import { AuthContext } from "../../../contexts/AuthContext";
import PrivateSidebar from "./PrivateSidebar";
import AuthHeader from "./AuthHeader";

const PrivateLayout = (props) => {
  const auth = useContext(AuthContext);

  if (!auth) {
    return <Navigate to={{ pathname: ROUTE.SIGN_IN }} />;
  }

  return (
    <React.Fragment>
      <section className="setting-wrapper">
        <div className="setting-container">
          <PrivateSidebar />
          <div className="settings-main">
            <AuthHeader />
            <Outlet />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PrivateLayout;
