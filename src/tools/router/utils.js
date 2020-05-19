export const isDef = v => typeof v !== 'undefined'

export const getUrl = (path) => {
  const href = window.location.href
  const i = href.indexOf('#')
  const base = i >= 0 ? href.slice(0, i) : href
  return `${base}#${path}`
}