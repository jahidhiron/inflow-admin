import React, { useState } from "react";
import { resetPassword } from "../../stores/actions/user.actions.types";
import OtpInput from "react-otp-input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AdminChangePasswordOtpForm({
  email,
  password,
  loading,
  forgotPassword,
}) {
  const { t } = useTranslation();
  const [otp, setOtp] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onResendClick = () => {
    dispatch(forgotPassword({ data: { email } }));
  };

  const onSubmit = (e) => {
    e.preventDefault(0);
    dispatch(
      resetPassword({
        data: {
          email,
          password,
          token: otp,
        },
        callback: () => {
          navigate("/signin");
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
              inputStyle={"input-field input-text"}
              containerStyle={"input-wrap otp-box"}
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="input-wrap">
            <input
              type="submit"
              disabled={!otp}
              onClick={onSubmit}
              className="input-submit"
              value={
                loading
                  ? `${t("submitting-btn")}`
                  : `${t("update-password-btn")}`
              }
            />
          </div>
          <div className="input-wrap forgot-password">
            {t("did-not-receive-the-code")}?{" "}
            <span onClick={onResendClick} style={{ cursor: "pointer" }}>
              &nbsp;{t("resend-link")}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminChangePasswordOtpForm;
