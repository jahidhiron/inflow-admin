import { Link } from "react-router-dom";
import CompanyListTable from "../../components/Tables/CompanyList";

const CompanyList = () => {
  return (
    <div className="settings-main-inner">
      <div className="settings-container">
        <div className="companies-list">
          <div className="inside-nav companies-list">
            <h2>All Companies</h2>
            <div className="company-filters">
              <select className="select-field">
                <option value="" selected>
                  Filter by
                </option>
                <option>Status</option>
                <option>CR number</option>
              </select>
              <div className="search-wrap">
                <input
                  className="search-input company-search-input"
                  type="text"
                  placeholder="Search by name or CR"
                />
              </div>
            </div>
          </div>

          <CompanyListTable listFrom="company-list" />
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
