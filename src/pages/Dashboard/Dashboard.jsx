import React from "react";
import { useTranslation } from "react-i18next";
import CompanyList from "../../components/Tables/CompanyList";
const { PUBLIC_URL } = process.env;

const Dashboard = (props) => {
  const { t } = useTranslation();

  return (
    <div className="settings-main-inner">
      <div className="settings-container">
        <div className="dashboard-container">
          <h2>Overview</h2>
          <div className="dashboard-overview">
            <div>
              <div className="total-companies">
                <b>241</b>
                <span>Companies</span>
              </div>
            </div>
            <div>
              <b>147K</b>
              <span>Total Revenue</span>
            </div>
            <div>
              <b>1024</b>
              <span>Total Cards</span>
            </div>
            <div>
              <b>576K</b>
              <span>Total Transactions</span>
            </div>
          </div>
          <div className="overview-filter">
            From:{" "}
            <select className="start-date">
              <option selected>7/9/2023</option>
              <option>7/9/2023</option>
              <option>7/9/2023</option>
              <option>7/9/2023</option>
            </select>
            &nbsp;To:{" "}
            <select className="end-date">
              <option selected>7/9/2023</option>
              <option>7/9/2023</option>
              <option>7/9/2023</option>
              <option>7/9/2023</option>
            </select>
          </div>
          <img src={`${PUBLIC_URL}/images/overview.png`} alt="" />
        </div>

        <div className="dashboard-companies">
          <div className="companies-list">
            <div className="inside-nav companies-list">
              <h2>
                <span>List of</span> Companies
              </h2>
              <a href="#" className="pull-right">
                <img src={`${PUBLIC_URL}/images/ArrowUpRight.png`} alt="" />
              </a>
            </div>

            <CompanyList listFrom="dashboard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
