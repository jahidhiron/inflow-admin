import { useTranslation } from "react-i18next";

const CompanyGeneralInfo = ({ company }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="table-row col-count-6 style-2">
        <div className="table-col">
          {t("label-entity-number")}{" "}
          <b>
            {company?.extended_cr_info?.crEntityNumber
              ? company?.extended_cr_info?.crEntityNumber
              : "---"}
          </b>
        </div>
        <div className="table-col">
          {t("label-entity-issue-date")}{" "}
          <b>
            {company?.extended_cr_info?.issueDate
              ? company?.extended_cr_info?.issueDate
              : "---"}
          </b>
        </div>
        <div className="table-col">
          {t("label-entity-expiry-date")}{" "}
          <b>
            {company?.extended_cr_info?.expiryDate
              ? company?.extended_cr_info?.expiryDate
              : "---"}
          </b>
        </div>
        <div className="table-col">
          {t("label-entity-business-type")}{" "}
          <b>{company?.business_type ? company?.business_type : "---"}</b>
        </div>
        <div className="table-col">
          {t("label-entity-period")} <b>99</b>
        </div>
        <div className="table-col">
          {t("label-entity-e-commerce")}{" "}
          <b>{company?.extended_cr_info?.isEcommerce ? "Yes" : "No"}</b>
        </div>
      </div>
      <div className="table-row col-count-6 style-2">
        <div className="table-col">
          {t("label-entity-start-date")} <b>22 jan 2023</b>
        </div>
        <div className="table-col">
          {t("label-entity-end-date")} <b>22 jan 2023</b>
        </div>
        <div className="table-col">
          {t("label-entity-fiscal-year")}{" "}
          <b>
            {company?.extended_cr_info?.fiscalYear
              ? company?.extended_cr_info?.fiscalYear
              : "---"}
          </b>
        </div>
        <div className="table-col">
          {t("label-entity-main-entity-number")}{" "}
          <b>
            {company?.extended_cr_info?.crMainEntityNumber
              ? company?.extended_cr_info?.crMainEntityNumber
              : "---"}
          </b>
        </div>
        <div className="table-col">
          {t("label-entity-cancellation")}{" "}
          <b>
            {company?.extended_cr_info?.cancellation
              ? company?.extended_cr_info?.cancellation
              : "---"}
          </b>
        </div>
        <div className="table-col">
          <b></b>
        </div>
      </div>
    </>
  );
};

export default CompanyGeneralInfo;
