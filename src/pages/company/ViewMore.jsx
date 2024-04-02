import { connect } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { errorMessage, successMessage } from "../../utilities/notification";
import {
  companyInc,
  companyDetail,
  updateCompanyStatus,
} from "../../stores/actions/company.actions.types";
import DirectorList from "../../components/Tables/DirectorList";
import OwnerList from "../../components/Tables/OwnerList";
import CompanyGeneralInfo from "../../components/pages/viewMore/CompanyGeneralInfo";
import CompanyAddress from "../../components/pages/viewMore/CompanyAddress";
const { PUBLIC_URL } = process.env;

const ViewMore = (props) => {
  const [showAuthorizationModal, setShowAuthorizationModal] = useState(false);
  const [companyInc, setCompanyInc] = useState();
  const navigate = useNavigate();
  const [company, setCompany] = useState(null);
  const [rejectReason, setRejectReason] = useState("");
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [loadingReject, setLoadingReject] = useState(false);

  const { companyId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    if (companyId) {
      getCompanyDetail();
    }
  }, [companyId]);

  useEffect(() => {
    getCompanyInc();
  }, []);

  const getCompanyInc = () => {
    const callback = (data) => {
      if (data.success) {
        setCompanyInc(data?.data);
      } else {
        errorMessage(data.message);
      }
    };

    props.companyInc({ callback, companyId });
  };

  const getCompanyDetail = () => {
    const callback = (data) => {
      if (data.success) {
        setCompany(data?.data);
        // data?.data?.associated_users?.map((user) => {
        //   if (user?.user?.role === "OWNER") {
        //     setOwner(user?.user);
        //   }
        // });
      } else {
        errorMessage(data.message);
      }
    };

    props.companyDetail({ callback, companyId });
  };

  const handleUpdateCompnayStatus = (company, type) => {
    const id = company?.application[0]?.id;
    const status = company?.application[0]?.status;
    setShowRejectModal(false);

    if (status === type) {
      errorMessage(t("already-applied-status-error-message"));
    } else {
      if (type === "reject") {
        setLoadingReject(true);
      }
      const callback = (data) => {
        if (data.success) {
          successMessage(t("company-status-update-success"));
          if (type === "reject") {
            setShowRejectModal(false);
            setRejectReason("");
            setLoadingReject(false);
          }
          const callback = (data) => {
            if (data.success) {
              setCompany(data?.data);
            } else {
              errorMessage(data.message);
            }
          };
          props.companyDetail({ callback, companyId });
        } else {
          errorMessage(data.message);
        }
      };

      let payload = {};
      if (type === "APPROVED") {
        payload = { status: "APPROVED" };
      } else if (type === "DECLINED") {
        payload = {
          status: "DECLINED",
          rejection_reason: rejectReason,
        };
      } else if (type === "PENDING") {
        payload = { status: "PENDING" };
      }
      props.updateCompanyStatus({ callback, companyId: id, data: payload });
    }
  };

  return (
    <div className="settings-main-inner">
      <div className="settings-container">
        <div className="back-nav">
          <a className="btn-back-new" onClick={() => navigate(-1)}>
            <img src={`${PUBLIC_URL}/images/arrow-left1.png`} alt="back" />{" "}
            {t("back-link")}{" "}
          </a>
          <div className="pull-right action-buttons">
            <a href="#" className="btn-edit">
              {t("edit-btn")}{" "}
              <img src={`${PUBLIC_URL}/images/edit.svg`} alt="edit" />
            </a>
            <a href="#" className="btn-delete">
              {t("delete-btn")}{" "}
              <img src={`${PUBLIC_URL}/images/trash.svg`} alt="delete" />
            </a>
          </div>
        </div>
        <div className="company-details style-2">
          <div className="plan-box col-count-6 header-row">
            <div className="plan-col col-1">{t("label-company")}</div>
            <div className="plan-col col-2">{t("label-cr-number")}</div>
            <div className="plan-col col-3">{t("label-country")}</div>
            <div className="plan-col col-4">{t("label-city")}</div>
            <div className="plan-col col-5">{t("label-status")}</div>
            <div className="plan-col col-6">{t("label-action")}</div>
          </div>

          <div className="plan-box col-count-6 content-row">
            <div className="plan-col col-1">
              <span className="mobileLabel">
                {t("form-field-label-company-name")}:
              </span>
              <span className="first-letter">J</span>
              <b>{company?.company_name}</b>
            </div>
            <div className="plan-col col-2">
              <span className="mobileLabel">{t("label-cr-number")}:</span>
              <b>{company?.company_cr_number}</b>
            </div>
            <div className="plan-col col-3">
              <span className="mobileLabel">{t("label-country")}:</span>
              <b>{company?.country}</b>
            </div>
            <div className="plan-col col-4">
              <span className="mobileLabel">{t("label-city")}:</span>
              <b>{company?.city}</b>
            </div>
            <div className="plan-col col-5">
              <span className="mobileLabel">{t("label-status")}</span>{" "}
              <span
                className={`status status-${
                  company?.application[0]?.status === "PENDING"
                    ? "pending"
                    : company?.application[0]?.status === "APPROVED"
                    ? "active"
                    : company?.application[0]?.status === "DECLINED"
                    ? "archived"
                    : ""
                }`}
              >
                {company?.application[0]?.status?.toLowerCase()}
              </span>
            </div>
            <div className="plan-col col-6">
              <span className="mobileLabel">{t("label-actions")}:</span>
              <ul className="manage-subscriptions">
                <li>
                  <a>{t("label-change-status")}</a>
                  <ul>
                    <li>
                      <a
                        onClick={() =>
                          handleUpdateCompnayStatus(company, "PENDING")
                        }
                      >
                        {t("label-pending")}
                      </a>
                    </li>
                    <li>
                      <a onClick={() => setShowRejectModal(true)}>
                        {t("label-decliend")}
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() =>
                          handleUpdateCompnayStatus(company, "APPROVED")
                        }
                      >
                        {t("label-active")}
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <hr />
          <CompanyGeneralInfo company={company} />

          <hr />

          <div className="directors-nav">
            <Link to={`/cr-info/${companyId}`}>
              {t("view-cr")}{" "}
              <img src={`${PUBLIC_URL}/images/view.svg`} alt="view" />
            </Link>
            <Link onClick={() => setShowAuthorizationModal(true)}>
              {t("view-authorization-letter-label")}{" "}
              <img src={`${PUBLIC_URL}/images/view.svg`} alt="view" />
            </Link>
          </div>
        </div>

        <CompanyAddress company={company} />

        <OwnerList parties={company?.extended_cr_info?.parties || []} />

        <DirectorList directors={company?.directors || []} />

        <Modal
          className="actv authorizationModal"
          show={showAuthorizationModal}
          onHide={() => {
            setShowAuthorizationModal(false);
          }}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="p-0 mt-3">
            <img src={companyInc?.path} alt="Authorization Latter" />
          </Modal.Body>
        </Modal>

        <Modal
          className="actv rejectModal"
          show={showRejectModal}
          onHide={() => {
            setShowRejectModal(false);
          }}
        >
          <div style={{ padding: "20px" }}>
            <div
              className="btn-close-big"
              onClick={() => setShowRejectModal(false)}
            ></div>
            <Modal.Header closeButton>
              <Modal.Title>
                <h4>Application Rejected Successfully</h4>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0 mt-3">
              <p>
                Describe the reason of rejection, So that, the owner can solve
                the problem.
              </p>
              <textarea
                name="reject"
                onChange={(e) => setRejectReason(e.target.value)}
              ></textarea>
            </Modal.Body>
            <Modal.Footer>
              <button
                onClick={() => handleUpdateCompnayStatus(company, "DECLINED")}
                disabled={!rejectReason}
              >
                {loadingReject ? t("submitting-btn") : t("submit-btn")}
              </button>
            </Modal.Footer>
          </div>
        </Modal>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.visible,
});
export default connect(mapStateToProps, {
  companyInc,
  companyDetail,
  updateCompanyStatus,
})(ViewMore);
