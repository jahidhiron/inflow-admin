import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../UI/form-fields";
import { useTranslation } from "react-i18next";

const ChangeEmailForm = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="profile-info">
        <Formik
          enableReinitialize
          initialValues={{
            email: props.user.email,
          }}
          validationSchema={Yup.object({
            email: Yup.string().email(
              t("form-field-warning-email-address-invalid")
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const request = {
              email: values.email,
            };
            props.updateUserPreference(request);
            setSubmitting(false);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <fieldset>
                <TextInput
                  label={t("form-field-label-email-address")}
                  name="email"
                  id="email"
                  type="text"
                  placeholder="jhondoe@gmail.com"
                />
              </fieldset>

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
                    props.loading ? t("submitting-btn") : t("save-changes-btn")
                  }`}
                />
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>
    </React.Fragment>
  );
};

export default ChangeEmailForm;
