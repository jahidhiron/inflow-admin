import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const { PUBLIC_URL } = process.env;

function PrivateSidebar() {
  const [active, setActive] = useState("dashboard");
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const [isBodyClassAdded, setIsBodyClassAdded] = useState(false); 
  const handleToggleClass = () => { 
    document.body.classList.toggle('showSidebar'); 
    setIsBodyClassAdded(!isBodyClassAdded);
};
const removeBodyClass = () => { 
  document.body.classList.remove('showSidebar'); 
  setIsBodyClassAdded(!isBodyClassAdded);
};

  useEffect(() => {
    if (pathname) {
      if (pathname?.includes("dashboard")) {
        setActive("dashboard");
      } else if (pathname?.includes("card")) {
        setActive("card");
      } else if (
        pathname?.includes("plan") ||
        pathname?.includes("create-plan")
      ) {
        setActive("plan");
      } else if (
        pathname !== "/transaction-detail" &&
        pathname?.includes("transaction")
      ) {
        setActive("transaction");
      } else if (pathname?.includes("setting")) {
        setActive("setting");
      } else if (
        pathname?.includes("companies") ||
        pathname?.includes("company-detail") ||
        pathname?.includes("cr-info") ||
        pathname?.includes("directory-list") ||
        pathname?.includes("transaction-detail") ||
        pathname?.includes("manage-employee") ||
        pathname?.includes("select-plan") ||
        pathname?.includes("manage-plan")
      ) {
        setActive("companies");
      }
    }
  }, [pathname]);

  return (
    <div className="setting-sidebar">
      <div className="setting-sidebar-inner">
        <img src={`${PUBLIC_URL}/images/settings/logo-white.png`} alt="" />
        <img src={`${PUBLIC_URL}/images/Cross-Icon.png`} alt="" className="closeSidebar" onClick={handleToggleClass} />
        <ul className="settings-nav">
          <li className={`${active === "dashboard" ? "current-item" : ""}`} onClick={removeBodyClass}>
            <Link to="/dashboard" onClick={() => setActive("dashboard")}>
              <img src={`${PUBLIC_URL}/images/settings/dashboard.png`} alt="" />
              {t("page-title-dashboard")}
            </Link>
          </li>
          <li className={`${active === "card" ? "current-item" : ""}`} onClick={removeBodyClass}>
            <Link to="/cards" onClick={() => setActive("card")}>
              <img
                src={`${PUBLIC_URL}/images/settings/CreditCard.png`}
                alt=""
              />
              {t("sidebar-card-title")}
            </Link>
          </li>
          <li className={`${active === "plan" ? "current-item" : ""}`} onClick={removeBodyClass}>
            <Link to="/plans" onClick={() => setActive("plan")}>
              <img
                src={`${PUBLIC_URL}/images/settings/transactions.png`}
                alt=""
              />
              {t("sidebar-plan-title")}
            </Link>
          </li>
          <li className={`${active === "companies" ? "current-item" : ""}`} onClick={removeBodyClass}>
            <Link to="/companies" onClick={() => setActive("companies")}>
              <img src={`${PUBLIC_URL}/images/settings/companies.png`} alt="" />
              {t("menu-companies")}
            </Link>
          </li>
          <li className={`${active === "setting" ? "current-item" : ""}`} onClick={removeBodyClass}>
            <Link to="/setting" onClick={() => setActive("setting")}>
              <img src={`${PUBLIC_URL}/images/settings/settings.png`} alt="" />
              {t("menu-settings")}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PrivateSidebar;
