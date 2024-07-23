import i18 from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          greeting: "Hello, welcome!",
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है!",
        },
      },
      mr: {
        translation: {
          greeting: "नमस्कार स्वागत आहे!",
        },
      },
      gu: {
        translation: {
          greeting: "હેલો, સ્વાગત છે!",
        },
      },
    },
  });
