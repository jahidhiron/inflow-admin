import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fullCrInfo } from "../../stores/actions/company.actions.types";
import { useEffect, useState } from "react";
import { errorMessage } from "../../utilities/notification";
import { useTranslation } from "react-i18next";
import Loading from "../../components/helpers/Loading";

const { PUBLIC_URL } = process.env;

const CrInformation = (props) => {
  const navigate = useNavigate();
  const [fullCrInfo, setFullCrInfo] = useState(null);
  const [loadingCrInfo, setLoadingCrInfo] = useState(false);
  const { companyId } = useParams();

  const { t } = useTranslation();

  useEffect(() => {
    if (companyId) {
      setLoadingCrInfo(true);
      const callback = (data) => {
        setLoadingCrInfo(false);

        if (data.success) {
          setFullCrInfo(data?.data);
        } else {
          errorMessage(data.message);
        }
      };

      props.fullCrInfo({ callback, companyId });
    }
  }, [companyId]);

  return (
    <>
      {loadingCrInfo ? (
        <Loading />
      ) : (
        <div className="settings-main-inner">
          <div className="settings-container pl-60">
            <div className="back-nav">
              <a href="#" className="btn-back-new" onClick={() => navigate(-1)}>
                <img src={`${PUBLIC_URL}/images/arrow-left1.png`} alt="back" />{" "}
                Back to companies
              </a>
            </div>
            <div className="inside-nav">
              <h2>{t("full-cr-info-label")}</h2>
            </div>

            <div className="full-cr-info">
              <div className="cr-details">
                <div className="cr-info-row">
                  <div>
                    <label>{t("cr-name-label")}</label>
                    <input
                      type="text"
                      value={fullCrInfo?.company?.extended_cr_info?.crName}
                      readOnly
                    />
                  </div>
                  <div>
                    <label>{t("cr-number-label")}</label>
                    <input
                      type="text"
                      value={fullCrInfo?.company?.extended_cr_info?.crNumber}
                      readOnly
                    />
                  </div>
                  <div>
                    <label>{t("cr-entity-number")}</label>
                    <input
                      type="text"
                      value={
                        fullCrInfo?.company?.extended_cr_info?.crEntityNumber
                      }
                      readOnly
                    />
                  </div>
                </div>

                <div className="cr-info-row">
                  <div>
                    <label>{t("issue-date-label")}</label>
                    <input
                      type="text"
                      value={fullCrInfo?.company?.extended_cr_info?.issueDate}
                      readOnly
                    />
                  </div>
                  <div>
                    <label>{t("expiry-date-label")}</label>
                    <input
                      type="text"
                      value={fullCrInfo?.company?.extended_cr_info?.expiryDate}
                      readOnly
                    />
                  </div>
                </div>

                <div className="cr-info-row">
                  <div>
                    <label>{t("cr-main-number")}</label>
                    <input
                      type="text"
                      value={
                        fullCrInfo?.company?.extended_cr_info?.crMainNumber
                      }
                      readOnly
                    />
                  </div>
                  <div>
                    <label>{t("cr-main-entity-number")}</label>
                    <input
                      type="text"
                      value={
                        fullCrInfo?.company?.extended_cr_info
                          ?.crMainEntityNumber
                      }
                      readOnly
                    />
                  </div>
                </div>
              </div>

              <div className="directorsDetails">
                <h3>{t("directors-label")}</h3>

                {fullCrInfo?.company?.extended_cr_info?.parties?.map(
                  (director, index) => (
                    <ul className="cr-info-row">
                      <li>
                        <span className="cr-counter">{index + 1}.</span>
                        <div>
                          <label>{t("name-label")}</label>
                          <input type="text" value={director?.name} readOnly />
                        </div>
                        <div>
                          <label>{t("date-of-birth-label")}</label>
                          <input
                            type="text"
                            value={director?.birthDate}
                            readOnly
                          />
                        </div>
                        <div>
                          <label>{t("designation-label")}</label>
                          <input
                            type="text"
                            value={director?.relation?.name}
                            readOnly
                          />
                        </div>
                        <div>
                          <label>{t("nationality-label")}</label>
                          <input
                            type="text"
                            value={director?.nationality?.name}
                            readOnly
                          />
                        </div>
                      </li>
                    </ul>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.visible,
});
export default connect(mapStateToProps, {
  fullCrInfo,
})(CrInformation);
