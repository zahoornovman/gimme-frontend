import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    welcome_banner_1: "Make offers and requests...",
    welcome_banner_2: "...barter with others",
    learn_to: "Hello, let's learn how to use React-Intl",
    price_display:
      "How {n, number, ::currency/USD} is displayed in your selected language",
    number_display:
      "This is how {n, number} is formatted in the selected locale",
    start_today: "Start Today: {d, date}",
    // menu
    about_project: "About the project",
    contact_us: "Contact us",
  },
  [LOCALES.GERMAN]: {
    welcome_banner_1: "Angebote und Anfragen stellen...",
    welcome_banner_2: "...mit anderen tauschen",
    learn_to: "Hallo, lass uns lernen, wie man React-Intl benutzt",
    price_display:
      "Wie {n, number, ::currency/USD} in Ihrer ausgewählten Sprache angezeigt wird",
    number_display:
      "Auf diese Weise werden {n, number} im ausgewählten Gebietsschema formatiert",
    start_today: "Beginnen Sie heute: {d, date}",
    // menu
    about_project: "Über das Projekt",
    contact_us: "Kontaktiere uns",
  },
};
