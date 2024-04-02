import { useNavigate } from "react-router-dom";

const CreatePlan = () => {
  const navigate = useNavigate();

  return (
    <div className="settings-main-inner">
      <div className="settings-container">
        <div className="inside-nav" style={{ maxWidth: "910px" }}>
          <h2>Add details of plan</h2>
        </div>

        <div className="add-plan-details">
          <div className="form-row">
            <div>
              <label>Name of Plan</label>
              <input type="text" className="input-field" value="Premium Plan" />
            </div>
            <div>
              <label>Cost of Plan</label>
              <div className="plan-cost">
                <input type="text" className="input-field" value="60" />
                <select>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>INR</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div>
              <label>Renew period</label>
              <select className="select-field">
                <option value="Premium Plan" selected>
                  Premium Plan
                </option>
                <option value="Yearly Plan">Yearly Plan</option>
                <option value="Free Plan">Free Plan</option>
              </select>
            </div>
            <div>
              <label>Category of subscription plan</label>
              <select className="select-field">
                <option value="" selected>
                  Select
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <label>Describe Plan</label>
            <textarea> Details of plan</textarea>
          </div>
          <div className="form-row">
            <input
              type="button"
              value="Cancel"
              className="cancel-btn"
              onClick={() => navigate("/plans")}
            />
            <input type="button" value="Add" className="add-btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlan;
