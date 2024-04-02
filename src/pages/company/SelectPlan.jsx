const SelectPlan = () => {
  return (
    <div className="settings-main-inner">
      <div className="settings-container">
        <div className="inside-nav">
          <h2>Pricing</h2>
        </div>

        <div className="plan-options">
          <div className="pricing-methods">
            Pricing Method{" "}
            <select className="select-field">
              <option selected>Select Team Size</option>
            </select>
          </div>
          <div className="renew-period">
            Renew Period{" "}
            <select className="select-field">
              <option selected>Every month</option>
            </select>
          </div>
          <div className="plan-type">
            <span className="yearly-plan">Yearly Save 10%</span>
            <span className="monthly-plan">Monthly</span>
          </div>
        </div>
        <div className="plan-boxes-wrap">
          <div className="basic-plan planBox">
            <h2 className="plan-title">Basic Plan</h2>
            <div className="plan-price">
              <span className="label">From only</span>$40<span>/month</span>
            </div>
            <ul className="plan-features">
              <li>
                Access to core inFlow features (e.g., essential funds
                management, funding source addition, and BFM linking limited to
                1 bank account){" "}
              </li>
              <li>
                Limited access to parts for transferring funds between card
                programs{" "}
              </li>
              <li>Limited support (e.g., email support)</li>
            </ul>
            <a href="#" className="purchase-btn">
              Purchase Plan
            </a>
          </div>
          <div className="pro-plan planBox">
            <h2 className="plan-title">
              Professional Plan <span>Most Popular</span>
            </h2>
            <div className="plan-price">
              <span className="label">From only</span>$50<span>/month</span>
            </div>
            <ul className="plan-features">
              <li>Access to all Basic Plan features</li>
              <li>
                Additional features for raising funds and managing balances for
                funding sources along with an increased number of bank account
                linking for BFM{" "}
              </li>
              <li>Priority support (e.g., email and phone support)</li>
            </ul>
            <a href="#" className="purchase-btn">
              Purchase Plan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
