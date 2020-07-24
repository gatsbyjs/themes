# Gatsby Themes

This is a repo for Gatsby's official
themes.

- `gatsby-theme-blog`
- [gatsby-theme-blog-core](packages/gatsby-theme-blog-core)
- `gatsby-theme-notes`
- `gatsby-theme-blog-darkmode`
- `gatsby-theme-ui-preset`

## Filing Issues and PRs

Please follow the [Gatsby contributing guidelines](https://www.gatsbyjs.org/contributing/how-to-contribute/).

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

Run the `gatsby-starter-theme` workspace

```sh
yarn start
```

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
