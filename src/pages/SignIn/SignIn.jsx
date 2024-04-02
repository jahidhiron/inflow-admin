import React, { useState } from "react";
import { connect } from "react-redux";
import { initSIgnIn } from "../../stores/actions/user.actions.types";
import { errorMessage, successMessage } from "../../utilities/notification";
import SignInForm from "../../components/Forms/signinform";
import { useTranslation } from "react-i18next";
import AdminOtpForm from "../../components/Forms/adminOtpForm";

const SignIn = (props) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState();
  const [credentials, setCredentials] = useState();

  const signIn = async (request) => {
    try {
      const callback = (data) => {
        if (data.success) {
          successMessage(t("msg-signin-success"));
          setStep(2);
        }
      };
      props.initSIgnIn({
        data: request,
        callback,
      });
    } catch (error) {
      errorMessage(error.message);
    }
  };

  return (
    <>
      {step === 1 ? (
        <div className="login-main-inner">
          <h2>{t("login-to-your-account")}</h2>
          <SignInForm
            loading={props.visible}
            setCredentials={setCredentials}
            signIn={signIn}
          />
        </div>
      ) : (
        <AdminOtpForm
          otp={otp}
          setOtp={setOtp}
          loading={props.visible}
          credentials={credentials}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  userDetails: state.user.userDetails,
  visible: state.app.visible,
});

export default connect(mapStateToProps, {
  initSIgnIn,
})(SignIn);
