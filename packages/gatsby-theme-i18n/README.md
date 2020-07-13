# gatsby-theme-i18n

A Gatsby theme for providing internationalization support to your Gatsby site by taking in a configuration file and creating prefixed, enriched pages for each language.

## Installation

1. Install `gatsby-theme-i18n`:

   ```shell
   npm install gatsby-theme-i18n
   ```

2. Add the configuration to your `gatsby-config.js` file:

   ```js:title=gatsby-config.js
   module.exports = {
     plugins: [
       {
         resolve: `gatsby-theme-i18n`,
         options: {
           defaultLang: `en`,
           configPath: require.resolve(`./i18n/config.json`),
         },
       },
     ],
   }
   ```

3. Create the folder `i18n` at the root of your project and create a file called `config.json` in it.

4. Add your locales to the config file and fill out these information:

   - `code`: The ISO 3166-1 alpha-2 code which will be used for the path prefix, as a unique identifier (e.g. for the `defaultLang` option)
   - `hrefLang`: The IETF language tag for the `<html lang="xx-XX" />` attribute. Also used for og tags
   - `name`: The english name of the locale
   - `localName`: The local name of the locale
   - `langDir`: The direction of language (e.g. "ltr", "rtl")
   - `dateFormat`: The tokens that [Moment.js](https://momentjs.com/docs/#/parsing/string-format/) accepts for date formatting. This can be used for dates on GraphQL queries

   Example config of English and German:

   ```json
   [
     {
       "code": "en",
       "hrefLang": "en-US",
       "name": "English",
       "localName": "English",
       "langDir": "ltr",
       "dateFormat": "MM/DD/YYYY"
     },
     {
       "code": "de",
       "hrefLang": "de-DE",
       "name": "German",
       "localName": "Deutsch",
       "langDir": "ltr",
       "dateFormat": "DD.MM.YYYY"
     }
   ]
   ```

5. Add a suffix/postfix to your MDX filenames, e.g. if you have your blogposts at `content/posts/my-title/index.mdx` you'll need to copy that file and place it with `index.de.mdx` in the same folder.

## Usage

By adding a suffix/postfix in your filenames you can define the locale that the document is in.

### Theme options

| Key           | Default Value | Description                                                                                     |
| ------------- | ------------- | ----------------------------------------------------------------------------------------------- |
| `defaultLang` | `en`          | The locale that is your default language. For this language no prefixed routes will be created. |
| `configPath`  | none          | Path to the config file                                                                         |

You can pass additional options in as they'll be forwarded to the plugin. You can query all options in GraphQL on the `themeI18N` type.
