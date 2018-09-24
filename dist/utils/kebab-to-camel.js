const kebabToCamel = kebab => {
  return kebab.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase()
  })
}

export default kebabToCamel
