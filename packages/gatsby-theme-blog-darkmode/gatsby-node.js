exports.onPreInit = ({reporter}) => {
    try {
        require("gatsby-theme-blog")
    } catch {
        reporter.error(`You do not appear to have \`gatsby-theme-blog\` installed.\n \`gatsby-theme-blog-darkmode\` is designed as an add-on to\n \`gatsby-theme-blog\` and will not work without it.`)
    }
}