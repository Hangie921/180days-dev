export function getRand (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export default {
  getRand
}
