/*
  Lite version of https://github.com/heygrady/Units
 */

const dummyFn = (element, value) => (value.match(/px$/) ? parseFloat(value) : undefined)

const unitToPx = (() => {
  const runit = /^(-?[\d+\.\-]+)([a-z]+|%)$/i
  if (typeof document === 'undefined') return dummyFn
  const toPx = (elem, value, prop = 'width') => {
    const unit = (value.match(runit) || [])[2]

    if (convert && unit in convert) {
      return parseFloat(value) * convert[unit]
    }

    if (unit === 'px') {
      return parseFloat(value)
    }

    if (unit === 'rem' || unit === 'em') {
      if (unit === 'rem') {
        elem = docElement
      }

      const { fontSize } = window.getComputedStyle(elem)

      return parseFloat(value) * parseFloat(fontSize)
    }

    const inlineValue = elem.style[prop]
    elem.style[prop] = value
    const pxSize = !elem.style[prop] ? 0 : parseFloat(window.getComputedStyle(elem)[prop])
    elem.style[prop] = inlineValue

    return pxSize
  }

  let testElem = document.createElement('test')
  const docElement = document.documentElement

  const conversions = {
    in: null,
    mm: 1 / 25.4,
    cm: 1 / 2.54,
    pt: 1 / 72,
    pc: 1 / 6,
  }

  docElement.appendChild(testElem)
  const convert = Object.keys(conversions).reduce((accumulator, unit) => {
    if (conversions[unit] === null) {
      accumulator[unit] = toPx(testElem, '1' + unit)
      return accumulator
    }
    accumulator[unit] = conversions[unit] * accumulator.in
    return accumulator
  }, {})

  docElement.removeChild(testElem)
  testElem = undefined

  return toPx
})()

export default unitToPx
