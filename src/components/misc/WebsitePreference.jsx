import { useTranslation } from "react-i18next";
import { errorMessage, successMessage } from "../../utilities/notification";
import { logout } from "../../stores/actions/user.actions.types";
import { Link, useNavigate } from "react-router-dom";

const WebsitePreference = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const updateSitePreference = async (request) => {
    try {
      const callback = (data) => {
        if (data.success) {
          //   successMessage(t("set-site-preference-succ"));

          const callback = (data) => {
            if (data.success) {
              props.setPreference(data?.data);
            }
          };
          props.getSitePreference({ callback });
        }
      };
      props.updateSitePreference({
        data: request,
        callback,
      });
    } catch (error) {
      errorMessage(error.message);
    }
  };

  const handleLogout = () => {
    try {
      const callback = (data) => {
        if (data.success) {
          navigate("/signin");
          successMessage(t("msg-logout-success"));
        }
      };
      logout({
        callback,
      });
    } catch (error) {
      errorMessage(error.message);
    }
  };

  return (
    <div className="content-box opened">
      <div className="box-title">
        <h2 className="no-margin-bottom">{t("website-preferences-label")}</h2>
      </div>
      <div className="c-row bottom-border portal-colors">
        <div className="setting-label">{t("change-portal-colors-label")}</div>
        <div className="colors-checkboxes">
          <div className="styled-check color-1">
            <input
              type="checkbox"
              checked={props?.preference?.color?.toUpperCase() === "#A537DC"}
              onChange={() => {
                updateSitePreference({ ...props.preference, color: "#A537DC" });
              }}
            />
            <span></span>
          </div>
          <div className="styled-check color-2">
            <input
              type="checkbox"
              checked={props?.preference?.color?.toUpperCase() === "#1C6DE5"}
              onChange={() => {
                updateSitePreference({ ...props.preference, color: "#1C6DE5" });
              }}
            />
            <span></span>
          </div>
          <div className="styled-check color-3">
            <input
              type="checkbox"
              checked={props?.preference?.color?.toUpperCase() === "#D524D9"}
              onChange={() => {
                updateSitePreference({ ...props.preference, color: "#D524D9" });
              }}
            />
            <span></span>
          </div>
          <a
            className="reset-btn"
            onClick={() => {
              updateSitePreference({ ...props.preference, color: "#A537DC" });
            }}
          >
            {t("reset-defaults-label")}
          </a>
        </div>
      </div>
      <div className="c-row bottom-border font-sizes">
        <div className="setting-label">{t("change-font-size-label")}</div>
        <div className="font-sizes">
          <span
            className={`font-size size-1 ${
              props?.preference?.font_size === "12" ? "checked" : ""
            }`}
            onClick={() => {
              updateSitePreference({ ...props.preference, font_size: "12" });
            }}
          >
            A
          </span>
          <span
            className={`font-size size-2 ${
              props?.preference?.font_size === "14" ? "checked" : ""
            }`}
            onClick={() => {
              updateSitePreference({ ...props.preference, font_size: "14" });
            }}
          >
            A
          </span>
          <span
            className={`font-size size-3 ${
              props?.preference?.font_size === "16" ? "checked" : ""
            }`}
            onClick={() => {
              updateSitePreference({ ...props.preference, font_size: "16" });
            }}
          >
            A
          </span>
          <span
            className={`font-size size-4 ${
              props?.preference?.font_size === "18" ? "checked" : ""
            }`}
            onClick={() => {
              updateSitePreference({ ...props.preference, font_size: "18" });
            }}
          >
            A
          </span>
          <a
            className="reset-btn"
            onClick={() => {
              updateSitePreference({ ...props.preference, font_size: "14" });
            }}
          >
            {t("reset-defaults-label")}
          </a>
        </div>
      </div>
      <div className="c-row bottom-border">
        <div className="theme-mode">
          <div className="setting-label">{t("dark-theme-label")} </div>
          <div className="btn-div">
            <label className="switch-btn">
              <input
                type="checkbox"
                checked={props?.preference?.dark_theme === true}
                onChange={() => {
                  updateSitePreference({
                    ...props.preference,
                    dark_theme: !props?.preference?.dark_theme,
                  });
                }}
              />
              <span className="slider-btn round"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="c-row bottom-border no-border-bottom">
        <div className="contact-methods">
          <div className="setting-label">{t("authenticate-method-label")}</div>
          <div className="btn-div">
            <span className="email-label">{t("email-label")}</span>
            <label className="switch-btn">
              <input
                type="checkbox"
                checked={props?.preference?.otp_method === "PHONE"}
                onChange={() => {
                  updateSitePreference({
                    ...props.preference,
                    otp_method:
                      props?.preference?.otp_method === "EMAIL"
                        ? "PHONE"
                        : "EMAIL",
                  });
                }}
              />
              <span className="slider-btn round"></span>
            </label>
            <span className="phone-label">{t("phone-label")}</span>
          </div>
        </div>
        <Link
          className="sign-out-btn"
          style={{ marginTop: "142px" }}
          onClick={handleLogout}
          to="/signin"
        >
          {t("sign-out-label")}
        </Link>
      </div>
    </div>
  );
};

export default WebsitePreference;
