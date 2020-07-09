/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function (n, ord) {
      var s = String(n).split("."),
        v0 = !s[1]
      if (ord) return "other"
      return n == 1 && v0 ? "one" : "other"
    },
  },
  messages: {
    Home: "Startseite",
    "Hello World": "Hallo Welt",
    "This is in the Index page": "Dies ist die Index Seite",
    "Link to second page": "Link zur zweiten Seite",
    "Link to third page": "Link zur dritten Seite",
    "Link to second page (german version)":
      "Link zur zweiten Seite (Deutsche Version)",
    "Link to index page (english version)":
      "Link zur Index Seite (Englische Version)",
    "Overview of languages": "\xDCbersicht der Sprachen",
    "Third page": "Dritte Seite",
    "This is the third page": "Dies ist die dritte Seite",
    "Link to index page": "Link zur Index Seite",
    Data: "Daten",
    "This page hasn't been translated yet":
      "Diese Seite wurde noch nicht \xFCbersetzt",
    Context: "Seiten Context",
  },
}
