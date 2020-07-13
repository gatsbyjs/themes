/* eslint-disable */ module.exports = {
  languageData: {
    plurals: function (n, ord) {
      var s = String(n).split("."),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2)
      if (ord)
        return n10 == 1 && n100 != 11
          ? "one"
          : n10 == 2 && n100 != 12
          ? "two"
          : n10 == 3 && n100 != 13
          ? "few"
          : "other"
      return n == 1 && v0 ? "one" : "other"
    },
  },
  messages: {
    Home: "Home",
    "Hello World": "Hello World",
    "This is in the Index page": "This is in the Index page",
    "Link to second page": "Link to second page",
    "Link to third page": "Link to third page",
    "Link to second page (german version)":
      "Link to second page (german version)",
    "Link to index page (english version)":
      "Link to index page (english version)",
    "Overview of languages": "Overview of languages",
    "Third page": "Third page",
    "This is the third page": "This is the third page",
    "Link to index page": "Link to index page",
    Data: "Data",
    "This page hasn't been translated yet":
      "This page hasn't been translated yet",
    Context: "Context",
  },
}
