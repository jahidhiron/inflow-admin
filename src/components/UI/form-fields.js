import { useField, Field } from "formik";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { processState } from "../../data/processData";
import { useTranslation } from "react-i18next";

const modifyClasses = (className, meta) => {
  if (meta.touched) {
    let isInvalid = meta.error;
    if (isInvalid && className && !className.includes("is-invalid"))
      className = className + " is-invalid";
    if (!isInvalid && className && !className.includes("is-valid"))
      className = className + " is-valid";
  }
  return className;
};

export const TextInput = ({
  label,
  labelClassname = "",
  isRequired = false,
  isCapitalize = false,
  ...props
}) => {
  const { t } = useTranslation();
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  props.className = modifyClasses(props.className, meta);

  return (
    <>
      {label && (
        <label htmlFor={props.id || props.name} className={labelClassname}>
          {t(label)}
          {isRequired && <span style={{ color: "#E67A66" }}>*</span>}
        </label>
      )}
      <Field
        {...field}
        {...props}
        placeholder={t(props.placeholder)}
        onChange={(e) => {
          let value = e.target.value;
          if (isCapitalize) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
          }
          setValue(value);
        }}
      />
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </>
  );
};

export const SelectInput = ({
  label,
  labelClassname = "form-label",
  options,
  isRequired = false,
  setItem = null,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  props.className = modifyClasses(props.className, meta);

  return (
    <>
      {label && (
        <label htmlFor={props.id || props.name} className={labelClassname}>
          {label}
          {isRequired && <span style={{ color: "#E67A66" }}>*</span>}
        </label>
      )}
      <Field
        as="select"
        {...field}
        {...props}
        onChange={(e) => {
          const { value } = e.target;
          setValue(value);
          if (setItem) {
            setItem(value);
          }
        }}
      >
        {options &&
          options.length > 0 &&
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.key}
              </option>
            );
          })}
      </Field>
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </>
  );
};

export const PhoneInputComp = ({
  label = "Your Telephone Number",
  labelClassname = "form-label",
  placeholder,
  onChange,
  errors,
  isRequired = false,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  props.className = modifyClasses(props.className, meta);

  return (
    <>
      <label htmlFor={props.id || props.name} className={labelClassname}>
        {label}
        {isRequired && <span style={{ color: "#E67A66" }}>*</span>}
      </label>
      <PhoneInput
        value={props.value}
        country={"sa"}
        inputClass={props.className}
        inputStyle={{ width: "100%", height: "48px" }}
        inputProps={{
          name: field.name,
          onBlur: field.onBlur,
        }}
        onChange={(phone) => setValue(phone)}
        onlyCountries={["sa"]}
      />
      {meta.error ? (
        <div
          className="invalid-feedback"
          style={{ display: meta.error && meta.touched ? "block" : "none" }}
        >
          {meta.error}
        </div>
      ) : null}
    </>
  );
};

export const PasswordInput = ({
  label,
  labelClassname = "form-label",
  isRequired = false,
  ...props
}) => {
  const { t } = useTranslation();
  const [field, meta] = useField(props);
  const [type, setType] = React.useState("password");
  props.className = modifyClasses(props.className, meta);

  return (
    <>
      {label && (
        <label htmlFor={props.id || props.name} className={labelClassname}>
          {t(label)}
          {isRequired && <span style={{ color: "#E67A66" }}>*</span>}
        </label>
      )}
      <Field
        {...field}
        {...props}
        type={type}
        placeholder={t(props.placeholder)}
        autoComplete="on"
      />
      <span
        className="eye-icon"
        onClick={() =>
          setType((type) => (type === "password" ? "text" : "password"))
        }
      ></span>
    </>
  );
};
