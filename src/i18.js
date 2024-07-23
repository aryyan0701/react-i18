import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects:true,
    resources: {
      en: {
        translation: {
          heading:"Multi-language",
          greeting: "Hello, welcome!",
          descriptions:{
            line1:"Welcome again",
            line2: "You are on the multi language website."
          }
        },
      },
      hi: {
        translation: {
          heading:"बहु-भाषा",
          greeting: "नमस्ते, स्वागत है!",
          descriptions:{
            line1:"पुन: स्वागत है",
            line2: "आप बहुभाषा वेबसाइट पर हैं."
          }
        },
      },
      mr: {
        translation: {
          heading:"बहु-भाषा",
          greeting: "नमस्कार स्वागत आहे!",
          descriptions:{
            line1:"पुन्हा स्वागत",
            line2: "तुम्ही बहुभाषिक वेबसाइटवर आहात."
          }
        },
      },
      gu: {
        translation: {
          heading:"બહુ-ભાષા",
          greeting: "હેલો, સ્વાગત છે!",
          descriptions:{
            line1:"ફરી સ્વાગત છે",
            line2: "તમે બહુભાષી વેબસાઇટ પર છો."
          }
        },
      },
    },
    detection: {
      order: ['localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'sessionStorage'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
