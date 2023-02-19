import { LOCALES } from "./locales";

export const messages = {
  [LOCALES.ENGLISH]: {
    //Header
    signOut: "Sign out",
    signIn: "Sign in",
    signUp: "Sign up",
    myGimme:"my Gimme",
    //Welcome Page
    welcome_banner_1: "Make offers and requests...",
    welcome_banner_2: "...barter with others",
    welcome_banner_3: "WIN",
    header_2: "Offers added in the last 24 hours",
    errorFetchingOffers:
      "Latest offers can't be displayed at the moment. We apologise for the inconvenience. 😖",
  },
  [LOCALES.GERMAN]: {
    //Header
    signOut: "Austragen",
    signIn: "Anmelden",
    signUp: "Anmeldung",
    myGimme:"mein Gimme",
    //Welcome Page
    welcome_banner_1: "Angebote und Anfragen stellen...",
    welcome_banner_2: "...mit anderen tauschen",
    welcome_banner_3: "GEWINNEN",
    header_2: "Angebote, die in den letzten 24 Stunden hinzugefügt wurden",
    errorFetchingOffers:
      "Aktuelle Angebote können derzeit nicht angezeigt werden. Wir entschuldigen uns für die Unannehmlichkeiten. 😖",
  },
};
