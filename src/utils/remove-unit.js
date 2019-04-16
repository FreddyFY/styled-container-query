function removeUnit(value) {
  return value.replace(/[^-\d.]/g, '')
}

export default removeUnit
