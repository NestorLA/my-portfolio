import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import language_es from "./translations/es/language.json";
import language_en from "./translations/en/language.json";
i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: { language: language_es },
    en: { language: language_en },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
