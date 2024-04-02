import { useState } from "react";
import {
  directoryList,
  directorDetail,
} from "../../stores/actions/company.actions.types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Modal } from "react-bootstrap";
import Loading from "../helpers/Loading";
import { errorMessage } from "../../utilities/notification";

const DirectorList = (props) => {
  const [loadingDirector, setLoadingDirector] = useState(false);
  const [showDirectorModal, setShowDirectorModal] = useState(false);
  const [director, setDirector] = useState(null);
  const { t } = useTranslation();

  return (
    <>
      <div className="directors-listings">
        <h4>{t("directors-label")}</h4>
        <div className="table-row col-count-6 header hide-on-mobile">
          <div className="table-col">{t("th-label-director-name")}</div>
          <div className="table-col">{t("th-label-director-id")}</div>
          <div className="table-col">{t("th-label-director-dob")}</div>
          <div className="table-col">{t("th-label-director-designation")}</div>
          <div className="table-col">{t("th-label-director-nationality")}</div>
          <div className="table-col">{t("th-label-director-action")}</div>
        </div>

        {props?.directors?.map((item) => (
          <div className="table-row col-count-6">
            <div className="table-col">
              <span className="mobileLabel">
                {t("th-label-director-name")}:
              </span>
              {item.name}
            </div>
            <div className="table-col">
              <span className="mobileLabel">{t("th-label-director-id")}:</span>
              {item.id_number}
            </div>
            <div className="table-col">
              <span className="mobileLabel">{t("th-label-director-dob")}:</span>
              {item.birth_date}
            </div>
            <div className="table-col">
              <span className="mobileLabel">
                {t("th-label-director-designation")}:
              </span>
              {item.designation}
            </div>
            <div className="table-col">
              <span className="mobileLabel">
                {t("th-label-director-nationality")}:
              </span>
              {item.nationality}
            </div>
            <div className="table-col">
              <span className="mobileLabel">
                {t("th-label-director-action")}:
              </span>
              <Link
                onClick={() => {
                  setShowDirectorModal(true);
                  setLoadingDirector(true);

                  const callback = (data) => {
                    setLoadingDirector(false);
                    if (data.success) {
                      setDirector({ ...data?.data, ...item });
                    } else {
                      errorMessage(data.message);
                    }
                  };

                  props.directorDetail({ callback, directorId: item?.id });
                }}
              >
                {t("view-more-btn")}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Modal
        className="actv directorModal"
        show={showDirectorModal}
        onHide={() => {
          setShowDirectorModal(false);
          setDirector(null);
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h2>{t("director-Details-label")}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0 mt-3">
          {loadingDirector ? (
            <Loading />
          ) : (
            <div style={{ padding: "20px" }}>
              <div>
                <label>{t("name-label")}</label>
                <br />
                <input type="text" value={director?.name} readOnly />
              </div>
              <div>
                <label>{t("date-of-birth-label")}</label>
                <br />
                <input type="text" value={director?.birth_date} readOnly />
              </div>
              <div>
                <label>{t("nid-number-label")}</label>
                <br />
                <input type="text" value={director?.id_number} readOnly />
              </div>
              <div>
                <label>{t("designation-label")}</label>
                <br />
                <input type="text" value={director?.designation} readOnly />
              </div>
              <div>
                <label>{t("nationality-label")}</label>
                <br />
                <input type="text" value={director?.nationality} readOnly />
              </div>
              <div>
                <label>{t("attachment-label")}:</label>
                <br />
                <img src={director?.path} alt="attatchment" />
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.visible,
});
export default connect(mapStateToProps, { directoryList, directorDetail })(
  DirectorList
);
