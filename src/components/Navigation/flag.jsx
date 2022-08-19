import React, { Component, useState } from "react";
import amFlag from "./am_flag.png";
import enFlag from "./en_flag.png";

import { useTranslation } from "react-i18next";

export default function Flag() {
  const { i18n } = useTranslation()
  const [bool, setBool] = useState(i18n.language === 'am' ? true : false)

  const switcher = (lang) => {
    setBool(!bool)
    i18n.changeLanguage(bool ? 'en' : 'am')
  }

  return (
    <button className="toggle_lan ps-4 pb-4 ps-xl-0 pb-xl-0" onClick={switcher}>
      <img src={bool ? amFlag : enFlag} alt="flag" />
    </button>
  );
}
