import React, { useEffect } from "react";
import { ReactNotifications } from "react-notifications-component";
import Route from "../../routes";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    for (const el of document.querySelectorAll('[data-react-helmet="true"]')) {
      document.getElementsByTagName("head")[0].removeChild(el);
    }
    document.body.setAttribute("dir", i18n.dir());
  }, [i18n.language, i18n]);

  return (
    <React.Fragment>
      {i18n.language === "ar" && (
        <Helmet>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css"
          />
        </Helmet>
      )}
      <ReactNotifications />
      <Route />
    </React.Fragment>
  );
}

export default App;
