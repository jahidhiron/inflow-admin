import { useTranslation } from "react-i18next";

const CompanyTransactionList = () => {
  const { t } = useTranslation();

  return (
    <section className="transactions-data">
      <h2 className="main-title">{t("label-transactions")}</h2>
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
      </div>
      <div className="company-transactions">
        <div className="transactions-row header hide-on-mobile">
          <div className="transaction-col col-1">{t("label-invoice")}</div>
          <div className="transaction-col col-2">{t("label-package")}</div>
          <div className="transaction-col col-3">{t("label-date")}</div>
          <div className="transaction-col col-4">{t("label-next-payment")}</div>
          <div className="transaction-col col-5">{t("label-amount-sar")}</div>
          <div className="transaction-col col-6">{t("label-status")}</div>
        </div>
        <div className="transactions-row">
          <div className="transaction-col col-1">
            <div className="mobileLabel">Invoice:</div>
            <b>123421</b>
          </div>
          <div className="transaction-col col-2">
            <div className="mobileLabel">Package:</div>
            Basic Plan
          </div>
          <div className="transaction-col col-3">
            <div className="mobileLabel">Date:</div>
            12 Jan 2023
          </div>
          <div className="transaction-col col-4">
            <div className="mobileLabel">Next Payment:</div>
            12 Feb 2023
          </div>
          <div className="transaction-col col-5">
            <div className="mobileLabel">Amount (SAR):</div>
            <span className="amount">1,400</span>
          </div>
          <div className="transaction-col col-6">
            <div className="mobileLabel">Status:</div>
            <span className="status status-archived">Delayed </span>
          </div>
        </div>{" "}
        {/* transactions-row */}
        <div className="transactions-row">
          <div className="transaction-col col-1">
            <div className="mobileLabel">Invoice:</div>
            <b>123421</b>
          </div>
          <div className="transaction-col col-2">
            <div className="mobileLabel">Package:</div>
            Basic Plan
          </div>
          <div className="transaction-col col-3">
            <div className="mobileLabel">Date:</div>
            12 Jan 2023
          </div>
          <div className="transaction-col col-4">
            <div className="mobileLabel">Next Payment:</div>
            12 Feb 2023
          </div>
          <div className="transaction-col col-5">
            <div className="mobileLabel">Amount (SAR):</div>
            <span className="amount">1,400</span>
          </div>
          <div className="transaction-col col-6">
            <div className="mobileLabel">Status:</div>
            <span className="status status-active">Paid </span>
          </div>
        </div>{" "}
        {/* transactions-row */}
        <div className="transactions-row">
          <div className="transaction-col col-1">
            <div className="mobileLabel">Invoice:</div>
            <b>123421</b>
          </div>
          <div className="transaction-col col-2">
            <div className="mobileLabel">Package:</div>
            Basic Plan
          </div>
          <div className="transaction-col col-3">
            <div className="mobileLabel">Date:</div>
            12 Jan 2023
          </div>
          <div className="transaction-col col-4">
            <div className="mobileLabel">Next Payment:</div>
            12 Feb 2023
          </div>
          <div className="transaction-col col-5">
            <div className="mobileLabel">Amount (SAR):</div>
            <span className="amount">1,400</span>
          </div>
          <div className="transaction-col col-6">
            <div className="mobileLabel">Status:</div>
            <span className="status status-active">Paid </span>
          </div>
        </div>{" "}
        {/* transactions-row */}
        <div className="transactions-row">
          <div className="transaction-col col-1">
            <div className="mobileLabel">Invoice:</div>
            <b>123421</b>
          </div>
          <div className="transaction-col col-2">
            <div className="mobileLabel">Package:</div>
            Basic Plan
          </div>
          <div className="transaction-col col-3">
            <div className="mobileLabel">Date:</div>
            12 Jan 2023
          </div>
          <div className="transaction-col col-4">
            <div className="mobileLabel">Next Payment:</div>
            12 Feb 2023
          </div>
          <div className="transaction-col col-5">
            <div className="mobileLabel">Amount (SAR):</div>
            <span className="amount">1,400</span>
          </div>
          <div className="transaction-col col-6">
            <div className="mobileLabel">Status:</div>
            <span className="status status-active">Paid </span>
          </div>
        </div>{" "}
        {/* transactions-row */}
        <div className="transactions-row">
          <div className="transaction-col col-1">
            <div className="mobileLabel">Invoice:</div>
            <b>123421</b>
          </div>
          <div className="transaction-col col-2">
            <div className="mobileLabel">Package:</div>
            Basic Plan
          </div>
          <div className="transaction-col col-3">
            <div className="mobileLabel">Date:</div>
            12 Jan 2023
          </div>
          <div className="transaction-col col-4">
            <div className="mobileLabel">Next Payment:</div>
            12 Feb 2023
          </div>
          <div className="transaction-col col-5">
            <div className="mobileLabel">Amount (SAR):</div>
            <span className="amount">1,400</span>
          </div>
          <div className="transaction-col col-6">
            <div className="mobileLabel">Status:</div>
            <span className="status status-active">Paid </span>
          </div>
        </div>{" "}
        {/* transactions-row */}
        <div className="transactions-row">
          <div className="transaction-col col-1">
            <div className="mobileLabel">Invoice:</div>
            <b>123421</b>
          </div>
          <div className="transaction-col col-2">
            <div className="mobileLabel">Package:</div>
            Basic Plan
          </div>
          <div className="transaction-col col-3">
            <div className="mobileLabel">Date:</div>
            12 Jan 2023
          </div>
          <div className="transaction-col col-4">
            <div className="mobileLabel">Next Payment:</div>
            12 Feb 2023
          </div>
          <div className="transaction-col col-5">
            <div className="mobileLabel">Amount (SAR):</div>
            <span className="amount">1,400</span>
          </div>
          <div className="transaction-col col-6">
            <div className="mobileLabel">Status:</div>
            <span className="status status-active">Paid </span>
          </div>
        </div>{" "}
        {/* transactions-row */}
      </div>
      {/* company-transactions */}
    </section>
  );
};

export default CompanyTransactionList;
