const matchQueries = (rules, { width, height }) => {
  const entries = Object.keys(rules).map(className => {
    const rule = rules[className]
    return {
      minWidth: rule.minWidth != null ? rule.minWidth : 0,
      maxWidth: rule.maxWidth != null ? rule.maxWidth : Infinity,
      minHeight: rule.minHeight != null ? rule.minHeight : 0,
      maxHeight: rule.maxHeight != null ? rule.maxHeight : Infinity,
      className,
    }
  })

  const filtered = entries.filter(({ minWidth, maxWidth, minHeight, maxHeight }) => {
    if (height != null && width != null) {
      return minWidth <= width && width <= maxWidth && minHeight <= height && height <= maxHeight
    }
    if (height == null && width != null) {
      return minWidth <= width && width <= maxWidth
    }
    if (height != null && width == null) {
      return minHeight <= height && height <= maxHeight
    }
    return true
  })

  return filtered.map(entry => entry.className)
}

export default matchQueries
