import "@reach/skip-nav/styles.css"

export const onRouteUpdate = ({ prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector(`[data-reach-skip-link]`)
    if (skipLink) {
      skipLink.focus()
    }
  }
}
