// import React from "react";
import React, { useState } from 'react';
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../stores/actions/user.actions.types";
import { errorMessage, successMessage } from "../../../utilities/notification";
import LanguageSwitcher from "../LanguageSwitcher/SwitcherFunctionality";
import { useTranslation } from "react-i18next";
const { PUBLIC_URL } = process.env;

const AuthHeader = (props) => {
  const { t } = useTranslation();
  const user = useSelector((state) => state.user?.userDetails);

  const handleLogout = () => {
    try {
      const callback = (data) => {
        if (data.success) {
          successMessage(t("msg-logout-success"));
        }
      };
      props.logout({
        callback,
      });
    } catch (error) {
      errorMessage(error.message);
    }
  };
  const [isBodyClassAdded, setIsBodyClassAdded] = useState(false); 
  const handleToggleClass = () => { 
    document.body.classList.toggle('showSidebar'); 
    setIsBodyClassAdded(!isBodyClassAdded);
};
 
  return (
    <React.Fragment>
      <div className="settings-menu">
        <div className="company-title">Title</div>
        <div className="menuOverlay" onClick={handleToggleClass}></div>
        <div className="menuToggle" onClick={handleToggleClass}><span></span><span></span><span></span></div>
        <div className="title-wrap"></div>
        <div className="nav-wrap">
          <ul className="language-dropdown">
            <li className="no-border no-arrow Headersearch">
              <div className="search-wrap">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </li>
            <li className="no-border no-arrow have-notifications notifications">
              <a href="#">
                <img src={`${PUBLIC_URL}/images/settings/bell.png`} alt="" />
              </a>
            </li>
            <li className="big-font">
              <a href="#">
                <img
                  src={`${PUBLIC_URL}/images/settings/buildings-architecture.png`}
                  alt=""
                />{" "}
                inFlow
              </a>
              <ul>
                <li>
                  <a href="#">sub 1</a>
                </li>
                <li>
                  <a href="#">sub 2</a>
                </li>
                <li>
                  <a href="#">sub 3</a>
                </li>
                <li>
                  <a href="#">sub 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <img
                  src={`${PUBLIC_URL}/images/settings/user-settings.png`}
                  alt=""
                />{" "}
                {`${user?.first_name} ${user?.last_name}`}
              </a>
              <ul>
                <li>
                  <Link to="/setting">{t("menu-settings")}</Link>
                </li>
                <li>
                  <Link onClick={handleLogout} to="/signin">
                    {t("logout")}
                  </Link>
                </li>
              </ul>
            </li>
            <LanguageSwitcher />
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails,
});

export default connect(mapStateToProps, { logout })(AuthHeader);
