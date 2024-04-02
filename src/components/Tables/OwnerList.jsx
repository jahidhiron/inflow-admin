import { useTranslation } from "react-i18next";

const OwnerList = ({ parties }) => {
  const { t } = useTranslation();

  return (
    <div className="directors-listings">
      <h4>{t("label-owners")}</h4>
      <div className="table-row col-count-5 header hide-on-mobile">
        <div className="table-col">{t("th-label-owner-name")}</div>
        <div className="table-col">{t("th-label-owner-id")}</div>
        <div className="table-col">{t("th-label-owner-dob")}</div>
        <div className="table-col">{t("th-label-owner-relation")}</div>
        <div className="table-col">{t("th-label-owner-nationality")}</div>
      </div>{" "}
      {parties?.map((party, index) => (
        <div className="table-row col-count-5" key={index}>
          <div className="table-col">{party?.name || "---"}</div>
          <div className="table-col">{party?.identity?.id || "---"}</div>
          <div className="table-col">1{party?.birthDate || "---"}</div>
          <div className="table-col">{party?.relation?.name || "---"}</div>
          <div className="table-col">{party?.nationality?.name || "---"}</div>
        </div>
      ))}
    </div>
  );
};

export default OwnerList;
