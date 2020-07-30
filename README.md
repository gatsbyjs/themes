# Gatsby Themes

This is a repo for [Gatsby's official themes](https://www.gatsbyjs.org/docs/theme-api/).

- `gatsby-theme-blog`
- `gatsby-theme-blog-core`
- `gatsby-theme-notes`
- `gatsby-theme-blog-darkmode`
- `gatsby-theme-ui-preset`

These themes are Gatsby sites packaged as plugins, which you can configure for your own use.

## Installation

Clone the repository and `cd` into it

```sh
git clone https://github.com/gatsbyjs/themes
cd themes
```

Install dependencies

```sh
yarn
```

## Development

Before getting started, make sure that you have [set up your local dev environment](https://www.gatsbyjs.org/contributing/setting-up-your-local-dev-environment/) and that you’re on the latest version of `gatsby-dev-cli`.

You can start the `gatsby-starter-theme` workspace using `yarn start`. To work on the themes themselves, you can edit files in the `themes/packages` directory. For example, to change the blog theme's basic post template, you would open `themes/packages/gatsby-theme-blog-core/src/components/post.js`. These themes are then loaded via the Gatsby instance located in `starters`.

## Filing Issues and PRs

Please follow the [Gatsby contributing guidelines](https://www.gatsbyjs.org/contributing/how-to-contribute/).

## Testing

This repository is set up with Cypress tests that run automatically in GitHub. If you'd like to run them locally you can do so in develop mode or build mode.

For develop mode:

```sh
yarn e2e:dev
```

For build mode:

```sh
yarn e2e:ci
```

## License

MIT
