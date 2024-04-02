import React from "react";
import SwitcherFunctionality from "./SwitcherFunctionality";

export default function LanguageSwitcher() {
  return (
    <div className="language-wrap">
      <div className="language-box">
        <ul className="language-dropdown">
          <SwitcherFunctionality />
        </ul>
      </div>
    </div>
  );
}
