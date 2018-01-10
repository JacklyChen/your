export default (min, max) => {
  min = ~~min
  max = ~~max
  if (min > max) {
    const tmp = max
    max = min
    min = tmp
  }
  return ~~(Math.random() * (max - min + 1)) + min
}
