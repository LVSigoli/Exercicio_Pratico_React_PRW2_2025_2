export function parseProductToOption(
  products,
  userProducts
) {
  const validArrays =
    Array.isArray(products) && Array.isArray(userProducts)

  if (!validArrays) return []

  if (!userProducts?.length) return []

  const userProductIds = userProducts.map(p => p.id) || []

  return products
    .filter(product => !userProductIds.includes(product.id))
    .map(product => buildOptions(product))
}

function buildOptions(product) {
  return {
    value: product.id,
    label: `${product.nome} R$ ${product.preco}`,
  }
}
