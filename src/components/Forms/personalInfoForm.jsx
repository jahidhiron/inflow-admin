import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "../UI/form-fields";
import { useTranslation } from "react-i18next";

const phoneRegex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;

const PersonalInfoForm = (props) => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className="profile-info">
        <Formik
          enableReinitialize
          initialValues={{
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            phone: props.user.phone,
          }}
          validationSchema={Yup.object({
            first_name: Yup.string().required(t("first-name-required")),
            last_name: Yup.string().required(t("last-name-required")),
            phone: Yup.string().matches(
              phoneRegex,
              t("form-field-warning-phone-invalid")
            ),
          })}
          onSubmit={(values, { setSubmitting }) => {
            const request = {
              first_name: values.first_name,
              last_name: values.last_name,
              phone: values.phone,
            };
            props.updateUserPreference(request);
            setSubmitting(false);
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className="profile-info">
                <fieldset>
                  <TextInput
                    label={t("form-field-label-first-name")}
                    name="first_name"
                    id="first_name"
                    type="text"
                    placeholder="Adam"
                    isCapitalize={true}
                  />
                </fieldset>
                <fieldset>
                  <TextInput
                    label={t("form-field-label-last-name")}
                    name="last_name"
                    id="last_name"
                    type="text"
                    placeholder="Smith"
                    isCapitalize={true}
                  />
                </fieldset>
                <fieldset>
                  <TextInput
                    label={t("form-field-label-phone")}
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="9876542545"
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

export default PersonalInfoForm;
