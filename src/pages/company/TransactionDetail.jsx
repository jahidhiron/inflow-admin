const { PUBLIC_URL } = process.env;

const TransactionDetail = () => {
  return (
    <div className="settings-main-inner">
      <div className="settings-container" style={{ maxWidth: "760px" }}>
        <div className="inside-nav">
          <h2>Transaction ID: 25MKL678F80695GRL</h2>{" "}
          <div className="actions">
            <span>
              Invoice:<b>1002532</b>
            </span>
          </div>
        </div>

        <div className="transactions-details">
          <div>
            <span>
              12 Jan 2019 | 22:55{" "}
              <strong>You transferred to Bank Account</strong>
            </span>
            <span>
              <strong className="credit align-right">-300 USD</strong>
            </span>
          </div>
          <div>
            <span>
              Billed by <b>Adam Smith</b>
            </span>
            <span>
              Transfer To <b>Banco Commercial S.A Arearl</b>
            </span>
          </div>
          <div>
            <span>
              Paid With <b>Manigo Balance</b>
            </span>
            <span>
              Currency Exchange (USD 1 = SAR 3.76){" "}
              <b>
                350.23 USD{" "}
                <img src={`${PUBLIC_URL}/images/arrow-left.png`} alt="" />{" "}
                1,315.48 SAR
              </b>
            </span>
          </div>
          <div>
            <span>
              Transaction ID <b>25MKL678F75978KRG</b>
            </span>
            <span>
              Transaction Type <b>Transfer to Bank Account</b> Completed
            </span>
          </div>

          <div className="border-tb">
            <span>
              Details{" "}
              <b>
                Sent to Banco Commercial S.A Arearl <br />
                <br />
                Fee
              </b>
            </span>
            <span>
              <b className="align-right">
                3,245.00 USD <br />
                <br /> 2.00 USD
              </b>{" "}
            </span>
          </div>
          <div className="total-amount">
            <span>
              <b>Total:</b>
            </span>
            <span>
              <b className="align-right">3,247.00 USD</b>
            </span>
          </div>
          <div>
            <b>Note:</b>
            <p>Reasons for Internal & External transfers text goes here</p>
          </div>
          <div>
            <b>Attachments:</b>{" "}
            <img src={`${PUBLIC_URL}/images/attachments.png`} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail;
