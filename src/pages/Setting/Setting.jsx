import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  getUserPreference,
  updateUserPreference,
  getSitePreference,
  updateSitePreference,
} from "../../stores/actions/user.actions.types";
import { useTranslation } from "react-i18next";
import PersonalInfoForm from "../../components/Forms/personalInfoForm";
import ChangeEmailForm from "../../components/Forms/changeEmailForm";
import UpdatePasswordForm from "../../components/Forms/updatePasswordForm";
import WebsitePreference from "../../components/misc/WebsitePreference";
import { errorMessage, successMessage } from "../../utilities/notification";
import { userslice } from "../../stores/slices/user";
import { useDispatch } from "react-redux";
const { PUBLIC_URL } = process.env;

const initialUserPreference = {
  email: "",
  first_name: "",
  last_name: "",
  phone: "",
};

const initialSitePreference = {
  color: "",
  font_size: "",
  dark_theme: null,
  otp_method: "",
};

const Setting = (props) => {
  const { t } = useTranslation();
  const [expandable, setExpandable] = useState("personal");
  const [loading, setLoading] = useState(false);
  const [userPreference, setUserPreference] = useState(initialUserPreference);
  const [sitePreference, setSitePreference] = useState(initialSitePreference);

  const dispatch = useDispatch();

  const handleToggle = (event) => {
    const clickedDiv = event.currentTarget.parentNode;
    clickedDiv.classList.toggle("opened");
  };

  useEffect(() => {
    getUserPreference();
  }, []);

  useEffect(() => {
    getSitePreference();
  }, []);

  const getUserPreference = () => {
    const callback = (data) => {
      if (data.success) {
        setUserPreference(data?.data);
      }
    };
    props.getUserPreference({ callback });
  };

  const getSitePreference = () => {
    const callback = (data) => {
      if (data.success) {
        setSitePreference(data?.data);
      }
    };
    props.getSitePreference({ callback });
  };

  const updateUserPreference = async (request) => {
    try {
      setLoading(true);

      const callback = (data) => {
        if (data.success) {
          dispatch(userslice.actions.loginAction(data.data));
          successMessage(t("information-update-succ"));
        }
        setLoading(false);
      };
      props.updateUserPreference({
        data: request,
        callback,
      });
    } catch (error) {
      errorMessage(error.message);
    }
  };

  return (
    <div className="settings-main-inner">
      <div className="settings-container settings-page">
        <div className="settings-container-left">
          <div
            className="content-box opened"
            // className={`content-box ${
            //   expandable === "personal" ? "opened" : ""
            // }`}
          >
            <div
              className="box-title"
              onClick={handleToggle}
              // onClick={() => setExpandable("personal")}
            >
              <h2>{t("personal-information")}</h2>
            </div>
            <div className="c-row">
              <div className="profile-pic">
                <img src={`${PUBLIC_URL}/images/user-pic.png`} alt="" />
              </div>
            </div>
            <div className="c-row">
              <PersonalInfoForm
                user={userPreference}
                updateUserPreference={updateUserPreference}
                loading={loading}
                setExpandable={setExpandable}
              />
            </div>
          </div>
        </div>
        <div className="settings-container-right">
          <div
            className="content-box"
            // className={`content-box ${expandable === "email" ? "opened" : ""}`}
            // onClick={() => setExpandable("email")}
          >
            <div className="box-title" onClick={handleToggle}>
              <h2>{t("change-email-address-label")}</h2>
            </div>
            <div className="c-row">
              <ChangeEmailForm
                user={userPreference}
                updateUserPreference={updateUserPreference}
                loading={loading}
                setExpandable={setExpandable}
                expandable={expandable}
              />
            </div>
          </div>
          <div
            className="content-box"
            // className={`content-box ${
            //   expandable === "password" ? "opened" : ""
            // }`}
            // onClick={() => setExpandable("password")}
          >
            <div className="box-title" onClick={handleToggle}>
              <h2>{t("update-password-label")}</h2>
            </div>
            <div className="c-row">
              <div className="profile-info">
                <from>
                  <UpdatePasswordForm
                    updateUserPreference={updateUserPreference}
                    loading={loading}
                    setExpandable={setExpandable}
                    expandable={expandable}
                  />
                </from>
              </div>
            </div>
          </div>
          {/* <WebsitePreference
            preference={sitePreference}
            setPreference={setSitePreference}
            updateSitePreference={props.updateSitePreference}
            getSitePreference={getSitePreference}
          /> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.visible,
});
export default connect(mapStateToProps, {
  getUserPreference,
  updateUserPreference,
  getSitePreference,
  updateSitePreference,
})(Setting);
