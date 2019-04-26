if (process.env.NODE_ENV === 'production') {
  window.dataLayer = window.dataLayer || []

  function gtag() {
    dataLayer.push(arguments)
  }

  gtag('js', new Date())

  gtag('config', 'UA-138684893-1')
}
