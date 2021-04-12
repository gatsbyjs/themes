<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  The Gatsby blog core theme
</h1>

A Gatsby theme for creating a blog child theme. It includes all of the data structures you need to get up and running building a blog and includes no additional theming or style opinions.

## Installation

### For a new site

If you're creating a new site and want to use the blog theme, you can use the blog theme starter. This will generate a new site that pre-configures use of the blog theme.

```shell
gatsby new my-themed-blog https://github.com/gatsbyjs/gatsby-starter-blog-theme-core
```

### For an existing site

1. Install the theme

```shell
npm install gatsby-theme-blog-core
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog-core`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
}
```

3. Add blog posts to your site by creating `md` or `mdx` files inside `/content/posts`.

   > Note that if you've changed the default `contentPath` in the configuration, you'll want to add your markdown files in the directory specified by that path.

4. Run your site using `gatsby develop` and navigate to your blog posts. If you used the above configuration, your URL will be `http://localhost:8000/blog`

## Usage

### Theme options

| Key                      | Default value    | Description                                                                                                 |
| ------------------------ | ---------------- | ----------------------------------------------------------------------------------------------------------- |
| `basePath`               | `/`              | Root url for all blog posts                                                                                 |
| `contentPath`            | `content/posts`  | Location of blog posts                                                                                      |
| `assetPath`              | `content/assets` | Location of assets                                                                                          |
| `mdxOtherwiseConfigured` | `false`          | Set this flag `true` if `gatsby-plugin-mdx` is already configured for your site.                            |
| `excerptLength`          | `140`            | Length of the auto-generated excerpt of a blog post                                                         |
| `imageMaxWidth`          | `1380`           | Set the max width of images in your blog posts. This applies to your featured image in frontmatter as well. |
| `filter`                 | `{}`             | Set the posts filter, for example: `{ frontmatter: { draft: {ne: true} } }`                                 |
| `limit`                  | `1000`           | Set the amount of pages that should be generated                                                            |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog-core`,
      options: {
        // basePath defaults to `/`
        basePath: `/blog`,
      },
    },
  ],
}
```

### Additional configuration

In addition to the theme options, there are a handful of items you can customize via the `siteMetadata` object in your site's `gatsby-config.js`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    // Used for the site title and SEO
    title: `My Blog Title`,
    // Used to provide alt text for your avatar
    author: `My Name`,
    // Used for SEO
    description: `My site description...`,
    // Used for resolving images in social cards
    siteUrl: `https://example.com`,
    // Used for social links in the root footer
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `GitHub`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
```

### Blog Post Fields

The following are the defined blog post fields based on the node interface in the schema

| Field       | Type     |
| ----------- | -------- |
| id          | String   |
| title       | String   |
| body        | String   |
| slug        | String   |
| date        | Date     |
| tags        | String[] |
| excerpt     | String   |
| image       | String   |
| imageAlt    | String   |
| socialImage | String   |

## Available components and styling

There are some existing components that you can import and use. Reference the full path to do so, e.g. `gatsby-blog-theme-core/src/components/post`.

Also note that there are classNames on elements in these components allowing you to target them with styles.
