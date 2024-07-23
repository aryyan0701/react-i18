import React from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
  
  const { t } = useTranslation();

  const languages = [
    { code: "en", lang: "English" },
    { code: "hi", lang: "Hindi" },
    { code: "mr", lang: "Marathi" },
    { code: "gu", lang: "Gujarati" },
  ];

  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <>
      <nav className="flex w-full h-20 bg-stone-400 dark:bg-slate-900 text-black dark:text-white justify-between p-3 px-5 items-center">
        <div className="flex space-x-2 items-center">
          <h2 className="text-xl text-black dark:text-white font-mono font-semibold">
         {t('heading')}
          </h2>
        </div>
        <div>
          <label
            htmlFor="language-select"
            className="block text-sm font-medium text-gray-900"
          >
            Language
          </label>
          <div className="flex space-x-2 items-center">
            <select
              id="language-select"
              className="w-full rounded-lg border-gray-300 text-gray-700 font-mono"
              onChange={changeLanguage}
              value={i18n.language}
            >
              {languages.map((lng) => (
                <option key={lng.code} value={lng.code}>
                  {lng.lang}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
