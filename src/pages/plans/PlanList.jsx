import { Link } from "react-router-dom";

const PlanList = () => {
  return (
    <div className="settings-main-inner">
      <div className="settings-container listOfPlans">
        <div className="inside-nav">
          <h2>List of Plans</h2>
          <div className="actions">
            <Link className="btn" to="/create-plan">
              Create Private Plan
            </Link>
            <Link className="btn" to="/create-plan">
              Create Plan
            </Link>
          </div>
        </div>
        <div className="plan-box header-row hide-on-mobile">
          <div className="plan-col col-1">
            <b>Plan</b>
          </div>
          <div className="plan-col col-2">
            <b>Created on</b>
          </div>
          <div className="plan-col col-3">
            <b>Status</b>
          </div>
          <div className="plan-col col-4">
            <b>Actions</b>
          </div>
        </div>
        <div className="plan-box">
          <div className="plan-col col-1">
            <div className="mobileLabel hide-on-desktop">Plan:</div>
            <b>Basic Plan | $20/mo Yearly</b>
          </div>
          <div className="plan-col col-2">
            <div className="mobileLabel hide-on-desktop">Created on:</div>
            13 Mar 2023{" "}
          </div>
          <div className="plan-col col-3">
            <div className="mobileLabel hide-on-desktop">Status:</div>
            <span className="status status-active">Active</span>
          </div>
          <div className="plan-col col-4">
            <div className="mobileLabel hide-on-desktop">Actions:</div>
            <a href="#">Edit Plan</a> <span className="delete-icon"></span>
          </div>
        </div>
        <div className="plan-box">
          <div className="plan-col col-1">
            <div className="mobileLabel hide-on-desktop">Plan:</div>
            <b>Basic Plan | $20/mo Yearly</b>
          </div>
          <div className="plan-col col-2">
            <div className="mobileLabel hide-on-desktop">Created on:</div>
            13 Mar 2023{" "}
          </div>
          <div className="plan-col col-3">
            <div className="mobileLabel hide-on-desktop">Status:</div>
            <span className="status status-active">Active</span>
          </div>
          <div className="plan-col col-4">
            <div className="mobileLabel hide-on-desktop">Actions:</div>
            <a href="#">Edit Plan</a> <span className="delete-icon"></span>
          </div>
        </div>
        <div className="plan-box">
          <div className="plan-col col-1">
            <div className="mobileLabel hide-on-desktop">Plan:</div>
            <b>Basic Plan | $20/mo Yearly</b>
          </div>
          <div className="plan-col col-2">
            <div className="mobileLabel hide-on-desktop">Created on:</div>
            13 Mar 2023{" "}
          </div>
          <div className="plan-col col-3">
            <div className="mobileLabel hide-on-desktop">Status:</div>
            <span className="status status-active">Active</span>
          </div>
          <div className="plan-col col-4">
            <div className="mobileLabel hide-on-desktop">Actions:</div>
            <a href="#">Edit Plan</a> <span className="delete-icon"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanList;
