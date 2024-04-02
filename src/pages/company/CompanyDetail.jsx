import { useTranslation } from "react-i18next";
import { errorMessage, successMessage } from "../../utilities/notification";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateCompanyStatus,
  companyDetail,
  companyInc,
} from "../../stores/actions/company.actions.types";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyEmployeeList from "../../components/Tables/CompanyEmployeeList";
import CompanyTransactionList from "../../components/Tables/CompanyTransactionList";
import CompanyCardList from "../../components/Tables/CompanyCardList";

const { PUBLIC_URL } = process.env;

const CompanyDetail = (props) => {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [company, setCompany] = useState(null);
  const [owner, setOwner] = useState(null);
  const [loadingReject, setLoadingReject] = useState(false);
  const { t } = useTranslation();
  const { companyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (companyId) {
      const callback = (data) => {
        if (data.success) {
          setCompany(data?.data);
          data?.data?.associated_users?.map((user) => {
            if (user?.user?.role === "OWNER") {
              setOwner(user?.user);
            }
          });
        } else {
          errorMessage(data.message);
        }
      };

      props.companyDetail({ callback, companyId });
    }
  }, [companyId]);

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

  const handleTabs = (event) => {
    const parentWithClassName = document.querySelector(".company-tabs-wrapper");

    const currentTabClass = event.currentTarget.className;

    if (currentTabClass == "transaction-tab") {
      if (!parentWithClassName.classList.contains(currentTabClass)) {
        parentWithClassName.classList.add("transaction-tab");
        parentWithClassName.classList.remove("cards-tab");
        parentWithClassName.classList.remove("employee-tab");
      }
    }
    if (currentTabClass == "cards-tab") {
      if (!parentWithClassName.classList.contains(currentTabClass)) {
        parentWithClassName.classList.remove("transaction-tab");
        parentWithClassName.classList.add("cards-tab");
        parentWithClassName.classList.remove("employee-tab");
      }
    }
    if (currentTabClass == "employee-tab") {
      if (!parentWithClassName.classList.contains(currentTabClass)) {
        parentWithClassName.classList.remove("transaction-tab");
        parentWithClassName.classList.remove("cards-tab");
        parentWithClassName.classList.add("employee-tab");
      }
    }
  };

  return (
    <div className="settings-main-inner">
      <div className="settings-container">
        <div className="back-nav">
          <a href="#" className="btn-back-new" onClick={() => navigate(-1)}>
            <img src={`${PUBLIC_URL}/images/arrow-left1.png`} alt="back" />{" "}
            {t("label-back-to-companies")}
          </a>
        </div>
        <div className="company-details">
          <div className="plan-box col-count-6 header-row">
            <div className="plan-col col-1">{t("label-company")}</div>
            <div className="plan-col col-2">{t("label-cr-number")}</div>
            <div className="plan-col col-3">{t("label-country")}</div>
            <div className="plan-col col-4">{t("label-city")}</div>
            <div className="plan-col col-5">{t("status-label")}</div>
            <div className="plan-col col-6">{t("label-action")}</div>
          </div>
          {/* plan-box.col-count-6.header-row */}
          <div className="plan-box col-count-6 content-row">
            <div className="plan-col col-1">
              <span className="mobileLabel">{t("label-company")}:</span>
              <span className="first-letter">{company?.company_name?.[0]}</span>
              <b>{company?.company_name}</b>
            </div>
            <div className="plan-col col-2">
              <span className="mobileLabel">{t("label-cr-number")}:</span>
              <b>{company?.company_cr_number} </b>
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
              <span className="mobileLabel">{t("status-label")}:</span>{" "}
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
          {/* plan-box.col-count-6.content-row */}
          <div className="view-full-details">
            <span
              className="more-btn"
              onClick={() => {
                navigate(`/company-detail/view-more/${companyId}`);
              }}
            >
              {t("view-more-btn")}
            </span>
          </div>
        </div>
        <section className="company-tabs-wrapper transaction-tab">
          <ul className="company-tabs">
            <li className="transaction-tab" onClick={handleTabs}>
              {t("tab-transactions")}
            </li>
            <li className="employee-tab" onClick={handleTabs}>
              {t("tab-employees")}
            </li>
            <li className="cards-tab" onClick={handleTabs}>
              {t("tab-cards")}
            </li>
          </ul>
          <CompanyTransactionList />
          <CompanyEmployeeList companyId={companyId} />
          <CompanyCardList companyId={companyId} />
        </section>
        <div className="pagination">
          <div className="pagination-pages">
            Rows per page:
            <select>
              <option selected>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
            </select>
          </div>
          <ul className="pagination-numbers">
            <li className="prev"></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <li>7</li>
            <li className="next"></li>
          </ul>
        </div>{" "}
        {/* pagination */}
      </div>

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
              Describe the reason of rejection, So that, the owner can solve the
              problem.
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
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.visible,
});
export default connect(mapStateToProps, {
  updateCompanyStatus,
  companyDetail,
  companyInc,
})(CompanyDetail);
