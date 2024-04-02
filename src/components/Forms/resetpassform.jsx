import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { PasswordInput } from "../UI/form-fields";
import { useTranslation } from "react-i18next";

const ResetPassForm = (props) => {
  const { t } = useTranslation();

  return (
    <div className="login-main-inner">
      <h2>{t("create-new-password-label")}</h2>

      <Formik
        initialValues={{
          password: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required(t("form-field-warning-password-required"))
            .matches(
              /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
              t("form-field-warning-password")
            ),
          confirmpassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            t("form-field-warning-password-missmatch")
          ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          props.setPassword(values.password);
          setSubmitting(false);
        }}
      >
        {({ handleSubmit, isSubmitting, isValidating }) => (
          <Form onSubmit={handleSubmit} className="">
            <div className="input-wrap">
              <PasswordInput
                label="form-field-label-password"
                name="password"
                id="password"
                type="password"
                placeholder="form-field-placeholder-password"
                labelClassname="form-label"
                className="input-field input-password"
                isRequired
              />
            </div>
            <div className="input-wrap">
              <PasswordInput
                label="form-field-label-confirm-password"
                name="confirmpassword"
                id="confirmpassword"
                type="password"
                placeholder="form-field-placeholder-confirm-password"
                labelClassname="form-label"
                className="input-field input-password"
                isRequired
              />
            </div>
            <div className="input-wrap">
              <input
                className="input-submit"
                type="submit"
                disabled={isSubmitting || isValidating || props.loading}
                value={
                  isSubmitting
                    ? `${t("submitting-btn")}`
                    : `${t("request-otp")}`
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ResetPassForm;
