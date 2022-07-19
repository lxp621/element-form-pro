const arraySum = (list) => {
  return list.reduce((a, b) => (a + b), 0)
}
export const chunckBy = (list, contrast) => {
  if (!contrast.length) return
  let length = arraySum(contrast) - list.length >= 0 ? contrast.length : contrast.length + 1
  return Array.from({ length }, (v, i) => {
    let size = arraySum(contrast.slice(0, i))
    return contrast[i] ? list.slice(size, size + contrast[i]) : list.slice(size)
  })
}
