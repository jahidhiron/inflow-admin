import React from "react";
import { login } from "../../stores/actions/user.actions.types";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AdminOtpForm({ credentials, initSignIn, otp, setOtp, loading }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onResendClick = () => {
    dispatch(initSignIn(...credentials));
  };

  const onSubmit = (e) => {
    e.preventDefault(0);
    dispatch(
      login({
        data: {
          ...credentials,
          otp,
        },
        callback: () => {
          navigate("/dashboard");
        },
      })
    );
  };

  return (
    <>
      <div className="login-main-inner align-center">
        <h2 className="medium-margin">{t("enter-security-code-label")}</h2>
        <p>{t("please-check-your-email-for-security-code")}</p>
        <form>
          <div className="input-wrap otp-box">
            <OtpInput
              inputType="number"
              containerStyle={"input-wrap otp-box"}
              inputStyle={"input-field input-text"}
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="input-wrap">
            <button type="submit" onClick={onSubmit} className="input-submit">
              {loading
                ? `${t("submitting-btn")}`
                : `${t("signin-form-field-submit-btn")}`}
            </button>
          </div>
          <div className="input-wrap forgot-password">
            {`${t("not-received-the-code")}`}?{" "}
            <span onClick={onResendClick} style={{ cursor: "pointer" }}>
              {" "}
              &nbsp;{`${t("resend-link")}`}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
export default AdminOtpForm;
