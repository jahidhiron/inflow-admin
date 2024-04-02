import { useTranslation } from "react-i18next";
import { companyEmployee } from "../../stores/actions/company.actions.types";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
const { PUBLIC_URL } = process.env;

const CompanyEmployeeList = (props) => {
  const [employeeList, setEmployeeList] = useState([]);
  const { t } = useTranslation();
  const companyId = props.companyId;

  useEffect(() => {
    if (companyId) {
      getCompanyList();
    }
  }, [companyId]);

  const getCompanyList = () => {
    const callback = (data) => {
      if (data.success) {
        setEmployeeList(data?.data);
      }
    };

    props.companyEmployee({ callback, companyId });
  };

  console.log(employeeList);

  return (
    <section className="employee-data">
      <h2 className="main-title">{t("title-employees")}</h2>
      <div className="transactions-date-flter">
        <input
          type="text"
          name="date-from"
          className="date-field date-from"
          placeholder="3/6/2022"
        />
        <span>{t("label-to")}</span>
        <input
          type="text"
          name="date-to"
          className="date-field date-to"
          placeholder="3/6/2022"
        />
        <div className="company-filters">
          <div className="search-wrap">
            <input
              className="search-input company-search-input"
              type="text"
              placeholder="Search by name or email"
            />
          </div>
        </div>{" "}
      </div>{" "}
      <div className="employee-data-list">
        <div className="table-row col-count-5 header hide-on-mobile">
          <div className="table-col">{t("th-employee-name")}</div>
          <div className="table-col">{t("label-email")}</div>
          <div className="table-col">{t("th-reg-date")}</div>
          <div className="table-col">{t("label-status")}</div>
          <div className="table-col">{t("label-actions")}</div>
        </div>{" "}
        {employeeList?.map((employee) => (
          <div className="table-row col-count-5" key={employee.id}>
            <div className="table-col">
              <span className="mobileLabel">Employee Name:</span>
              <img src={`${PUBLIC_URL}/images/emp1.png`} alt="back" />{" "}
              <b>{`${employee?.first_name} ${employee?.last_name}`}</b>
            </div>
            <div className="table-col">
              <span className="mobileLabel">Email:</span>
              {employee?.email}
            </div>
            <div className="table-col">
              <span className="mobileLabel">Reg. Date:</span>
              12 Jan 2023
            </div>
            <div className="table-col">
              <span className="mobileLabel">Status:</span>
              <span className="status status-active">Active</span>
            </div>
            <div className="table-col">
              <span className="mobileLabel">Actions:</span>
              <a href="#">{t("label-reset-password")}</a>
              <ul className="manage-subscriptions">
                <li>
                  {" "}
                  <a>{t("label-change-status")}</a>
                  <ul>
                    <li>
                      <a>{t("label-pending")}</a>
                    </li>
                    <li>
                      {" "}
                      <a>{t("label-decliend")}</a>
                    </li>
                    <li>
                      {" "}
                      <a>{t("label-active")}</a>
                    </li>
                  </ul>
                </li>
              </ul>
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
  companyEmployee,
})(CompanyEmployeeList);
