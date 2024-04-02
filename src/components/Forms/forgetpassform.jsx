import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../UI/form-fields";
import { useTranslation } from "react-i18next";

const ForgetPassForm = (props) => {
  const { t } = useTranslation();

  return (
    <div className="login-main-inner">
      <h2>{t("enter-your-registered-email")}</h2>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email(t("form-field-warning-email-address-invalid"))
            .required(t("form-field-warning-email-address-required")),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const request = {
            email: values.email,
          };

          props.forgetPassword(request, setSubmitting);
        }}
      >
        {({ handleSubmit, isSubmitting, isValidating }) => (
          <Form onSubmit={handleSubmit}>
            <div className="input-wrap">
              <TextInput
                label="form-field-label-email-address"
                name="email"
                id="email"
                type="email"
                placeholder="form-field-placeholder-email-address"
                labelClassname="form-label"
                className="input-field input-text"
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
                    : `${t("send-password-reset-link")}`
                }
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgetPassForm;
