import React, { useState } from "react";
import ForgetPassForm from "../../components/Forms/forgetpassform";
import { forgotPassword } from "../../stores/actions/user.actions.types";
import { connect } from "react-redux";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import ResetPassForm from "../../components/Forms/resetpassform";
import AdminChangePasswordOtpForm from "../../components/Forms/adminChangePasswordOtpForm";

const ForgetPassword = (props) => {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const forgetPassword = async (request, setSubmitting) => {
    const callback = (data) => {
      if (data.success) {
        store.addNotification({
          title: "Success",
          message:
            "Email successfully sent to your email address for resetting your password!",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
            duration: 2000,
            onScreen: true,
          },
        });
      }
      setSubmitting(false);
      setStep(2);
    };
    setEmail(request.email);
    props.forgotPassword({ data: request, callback });
  };
  const setNewPassword = (password) => {
    setPassword(password);
    setStep(3);
  };
  return (
    <>
      {step === 1 ? (
        <ForgetPassForm
          forgetPassword={forgetPassword}
          loading={props.visible}
        />
      ) : step === 2 ? (
        <ResetPassForm setPassword={setNewPassword} />
      ) : step === 3 ? (
        <AdminChangePasswordOtpForm email={email} password={password} />
      ) : null}
    </>
  );
};

const mapStateToProps = ({ app: { visible } }) => ({
  visible,
});

export default connect(mapStateToProps, {
  forgotPassword,
})(ForgetPassword);
