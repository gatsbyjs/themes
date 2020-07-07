module.exports = (themeOptions) => {
  const basePath = themeOptions.basePath || `/`
  const contentPath = themeOptions.contentPath || `content/posts`
  const assetPath = themeOptions.assetPath || `content/assets`
  const excerptLength = themeOptions.excerptLength || 140
  const imageMaxWidth = themeOptions.imageMaxWidth || 1380

  return {
    basePath,
    contentPath,
    assetPath,
    excerptLength,
    imageMaxWidth,
  }
}
