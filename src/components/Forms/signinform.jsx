import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput, PasswordInput } from "../UI/form-fields";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// cr number
// 2052101150

const SignInForm = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(t("form-field-warning-email-address-invalid"))
            .required(t("form-field-warning-email-address-required")),
          password: Yup.string().required(
            t("form-field-warning-password-required")
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const request = {
            email: values.email,
            password: values.password,
          };
          props.signIn(request);
          props.setCredentials(request);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, isValidating }) => (
          <Form onSubmit={handleSubmit}>
            <div className="input-wrap">
              <TextInput
                label={t("form-field-label-email-address")}
                name="email"
                id="email"
                type="email"
                placeholder="emailaddress@email.com"
                className="input-field input-text"
              />
            </div>
            <div className="input-wrap">
              <PasswordInput
                label={t("form-field-label-password")}
                name="password"
                id="password"
                type="password"
                placeholder={t("form-field-placeholder-password")}
                className="input-field input-password"
              />
            </div>
            <div className="input-wrap">
              <input
                type="submit"
                className="input-submit"
                value={`${
                  !props.loading
                    ? t("signin-form-field-submit-btn")
                    : t("submitting-btn")
                }`}
              />
            </div>

            <div className="input-wrap forgot-password">
              {`${t("forgot-password")}`}?
              <Link to="/forgot-pass"> {`${t("reset-here")}`}</Link>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default SignInForm;
