import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { companyCard } from "../../stores/actions/company.actions.types";
import { useEffect, useState } from "react";
const { PUBLIC_URL } = process.env;

const CompanyCardList = (props) => {
  const { t } = useTranslation();
  const companyId = props.companyId;

  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    if (companyId) {
      getCardList();
    }
  }, [companyId]);

  const getCardList = () => {
    const callback = (data) => {
      if (data.success) {
        setCardList(data?.data);
      }
    };

    props.companyCard({ callback, companyId });
  };

  console.log(cardList);

  return (
    <section className="cards-data">
      <h2 className="main-title">{t("label-card")}</h2>
      <div className="transactions-date-flter">
        <div className="company-filters">
          <div className="search-wrap">
            <input
              className="search-input company-search-input"
              type="text"
              placeholder="Search by last 4 digits"
            />
          </div>
          <select className="select-field">
            <option value="" selected>
              All Cards
            </option>
            <option>Visa</option>
            <option>Master</option>
          </select>
        </div>{" "}
      </div>{" "}
      <div className="cards-data-list">
        <div className="table-row col-count-5 header hide-on-mobile">
          <div className="table-col">{t("label-card-number")}</div>
          <div className="table-col">{t("label-expiration-date")}</div>
          <div className="table-col">{t("label-remaining-limit-sar")}</div>
          <div className="table-col">{t("label-type")}</div>
          <div className="table-col">{t("label-linked-to")}</div>
        </div>
        {cardList?.map((card) => (
          <div className="table-row col-count-5" key={card.id}>
            <div className="table-col">
              <span className="mobileLabel">Card Number:</span>
              <img src={`${PUBLIC_URL}/images/emp1.png`} alt="back" />{" "}
              <b>{card?.card_number_masked}</b>
            </div>
            <div className="table-col">
              <span className="mobileLabel">Expiration Date:</span>
              09/20
            </div>
            <div className="table-col">
              <span className="mobileLabel">Remaining Limit (SAR):</span>
              350.45
            </div>
            <div className="table-col">
              <span className="mobileLabel">Type:</span>
              <span className="status status-active">{card?.type}</span>
            </div>
            <div className="table-col">
              <span className="mobileLabel">Linked to:</span>
              Adam smith{" "}
              <img src={`${PUBLIC_URL}/images/settings.svg`} alt="settings" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.app.visible,
});
export default connect(mapStateToProps, {
  companyCard,
})(CompanyCardList);
