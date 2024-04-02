import { useTranslation } from "react-i18next";

const CompanyAddress = ({ company }) => {
  const { t } = useTranslation();

  return (
    <div className="directors-listings">
      <h4>{t("label-address")}</h4>
      <div className="table-row col-count-6 style-2">
        <div className="table-col">
          {t("label-address")}{" "}
          <b>{company?.extended_cr_info?.address?.general?.address}</b>
        </div>
        <div className="table-col">
          {t("label-email")} <b>{company?.business_email}</b>
        </div>
        <div className="table-col">
          {t("label-teelephone")} <b>{company?.company_phone}</b>
        </div>
        <div className="table-col">
          {t("label-postal")}{" "}
          <b>
            {company?.address?.general?.postalBox1 ||
              company?.address?.general?.postalBox2 ||
              "---"}
          </b>
        </div>
        <div className="table-col">
          {t("label-building-number")} <b>3245</b>
        </div>
        <div className="table-col">
          {t("label-additional-number")} <b>2344</b>
        </div>
      </div>
      <div className="table-row col-count-6 style-2">
        <div className="table-col">
          {t("label-street-name")} <b>Almanar st</b>
        </div>
        <div className="table-col">
          {t("label-city")} <b>{company?.city ? company?.city : "---"}</b>
        </div>
        <div className="table-col">
          {t("label-zip-code")} <b>{company?.zip ? company?.zip : "---"}</b>
        </div>
        <div className="table-col">
          {t("label-unit-number")} <b>3</b>
        </div>
        <div className="table-col">
          {t("label-district")} <b>Alyasmeen</b>
        </div>
        <div className="table-col">
          {t("label-fax")} <b>{company?.address?.general?.fax1 || "---"}</b>
        </div>
      </div>
    </div>
  );
};

export default CompanyAddress;
