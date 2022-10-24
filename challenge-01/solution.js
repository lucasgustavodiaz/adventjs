export default function contarOvejas(ovejas) {
  return ovejas.filter(({ name, color }) => {
    const lowerCaseName = name.toLowerCase()
    return color === 'rojo' && lowerCaseName.includes('n') && lowerCaseName.includes('a')
  })
}
