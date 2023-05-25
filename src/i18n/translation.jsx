import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import pt from "./translations/pt.json";
import es from "./translations/es.json";
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: "en", // define o idioma padrão
    fallbackLng: "en", // define o idioma de fallback
    debug: true, // ativa o modo debug
    resources: {
      pt: pt,
      en: en,
      es: es,
    },
  });
export default i18n;
