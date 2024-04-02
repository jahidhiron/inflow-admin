import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput,PasswordInput } from "../UI/form-fields";
import { useTranslation } from "react-i18next";

const passwordRegEx =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const UpdatePasswordForm = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="profile-info">
        <Formik
          enableReinitialize
          initialValues={{
            old_password: "",
            new_password: "",
            confirm_password: "",
          }}
          validationSchema={Yup.object({
            old_password: Yup.string().required(
              t("old-password-is-required-warning")
            ),
            new_password: Yup.string()
              .matches(passwordRegEx, t("form-field-warning-password"))
              .required(t("new-password-is-required-warning")),
            confirm_password: Yup.string()
              .oneOf(
                [Yup.ref("new_password"), ""],
                t("form-field-warning-password-missmatch")
              )
              .required(t("form-field-warning-confirm-password")),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const request = {
              old_password: values.old_password,
              new_password: values.new_password,
              confirm_password: values.confirm_password,
            };
            props.updateUserPreference(request);
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="profile-info">
              <div className="input-wrap"><PasswordInput
                label={t("old-password-label")}
                name="old_password"
                id="old_password"
                type="password"
                placeholder={t("enter-old-password-placeholder")}
                className="input-field input-password"
              /></div>
                 <div className="input-wrap"><PasswordInput
                label={t("new-password-label")}
                name="new_password"
                id="new_password"
                type="password"
                placeholder={t("enter-new-password-placeholder")}
                className="input-field input-password"
              /></div>
                <div className="input-wrap"><PasswordInput
                label={t("confirm-new-password-label")}
                name="confirm_password"
                id="confirm_password"
                type="password"
                placeholder={t("enter-confirm-password-placeholder")}
                className="input-field input-password"
              /></div>
                

                <fieldset style={{ display: "flex" }}>
                  {/* <input
                    type="button"
                    className="cancel-btn"
                    value={t("cancel-btn")}
                    onClick={() => props.setExpandable("")}
                  /> */}
                  <input
                    type="submit"
                    className="save-btn"
                    value={`${
                      props.loading
                        ? t("submitting-btn")
                        : t("save-changes-btn")
                    }`}
                  />
                </fieldset>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default UpdatePasswordForm;
