import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MainFooter = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return <div className="w-full h-[50px] bg-slate-700"></div>;
};

export default MainFooter;
