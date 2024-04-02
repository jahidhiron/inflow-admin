import { Link } from "react-router-dom";

const ManagePlan = () => {
  return (
    <div className="settings-main-inner">
      <div className="settings-container">
        <ul className="plan-tabs">
          <li className="current_item">
            <a href="manage-plan.html">Plans</a>
          </li>
          <li>
            <a href="cards.html">Payment Method</a>
          </li>
        </ul>
        <div className="plan-details">
          <div className="plan-heading">
            <b>Basic Plan </b>
            <div className="plan-status">
              <span className="status status-active">Active</span>
            </div>
            <ul className="manage-subscriptions">
              <li>
                <a>Manage</a>
                <ul>
                  <li>
                    <Link to="/manage-plan">Change plan</Link>
                  </li>
                  <li>
                    <Link to="/select-plan">Renew plan</Link>
                  </li>
                  <li>
                    <a>Cancel plan</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="plan-price">
            $40<span>/month</span>
          </div>
          <div className="plan-dates">
            <span>Renew on: 22/Jan/2024</span>{" "}
            <span>Purchased on: 22/Nov/2023</span>
          </div>
        </div>
        <div className="inside-nav">
          <h2>Plans History</h2>
        </div>

        <div className="plan-box col-count-6">
          <div className="plan-col col-1">
            <span>Plan</span> <b>Basic Plan | $20/mo Yearly</b>
          </div>
          <div className="plan-col col-2">
            <span>Total amount</span>
            <strong>$350</strong>{" "}
          </div>
          <div className="plan-col col-3">
            <span>Billed 0n</span>
            <strong>13 Mar 2024</strong>{" "}
          </div>
          <div className="plan-col col-4">
            <span>Next billing</span>
            <strong>12 Dec 2024</strong>{" "}
          </div>
          <div className="plan-col col-5">
            Status <span className="status status-active">Active</span>
          </div>
          <div className="plan-col col-6">
            <a href="#">Change Plan</a> <span className="delete-icon"></span>
          </div>
        </div>

        <div className="plan-box col-count-6">
          <div className="plan-col col-1">
            <span>Plan</span> <b>Basic Plan | $20/mo Yearly</b>
          </div>
          <div className="plan-col col-2">
            <span>Total amount</span>
            <strong>$350</strong>{" "}
          </div>
          <div className="plan-col col-3">
            <span>Billed 0n</span>
            <strong>13 Mar 2024</strong>{" "}
          </div>
          <div className="plan-col col-4">
            <span>Next billing</span>
            <strong>12 Dec 2024</strong>{" "}
          </div>
          <div className="plan-col col-5">
            Status <span className="status status-expired">Expired</span>
          </div>
          <div className="plan-col col-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ManagePlan;
