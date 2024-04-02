import React from "react";
import { Outlet } from "react-router-dom";
import PublicSidebar from "./PublicSidebar";
import LanguageSwitcher from "../LanguageSwitcher/Switcher";
const { PUBLIC_URL } = process.env;

const PublicLayout = (props) => {
  return (
    <React.Fragment>
      <section className="login-wrapper">
        <div className="login-container">
          <PublicSidebar />
          <div className="login-main">
            <div className="login-menu">
              <div className="logo-wrap">
                <a href="/dashboard">
                  <img src={`${PUBLIC_URL}/images/logo.png`} alt="" />
                </a>
              </div>
              <LanguageSwitcher />
            </div>
            <Outlet />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PublicLayout;
