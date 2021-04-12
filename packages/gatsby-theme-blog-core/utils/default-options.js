module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const contentPath = themeOptions.contentPath || `content/posts`
  const assetPath = themeOptions.assetPath || `content/assets`
  const excerptLength = themeOptions.excerptLength || 140
  const imageMaxWidth = themeOptions.imageMaxWidth || 1380
  const filter = themeOptions.filter || {}
  const limit = themeOptions.limit || 1000
  return {
    basePath,
    contentPath,
    assetPath,
    excerptLength,
    imageMaxWidth,
    filter,
    limit,
  }
}
