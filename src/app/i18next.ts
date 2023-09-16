import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import fa from "@/locales/fa.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { ...en },
    pt: { ...fa },
  },
  lng: "en",
});
