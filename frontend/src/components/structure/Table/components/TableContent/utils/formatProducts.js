export function formatProducts(products) {
  if (!products?.length) return ''
  return products.map(p => p.nome).join(', ')
}
