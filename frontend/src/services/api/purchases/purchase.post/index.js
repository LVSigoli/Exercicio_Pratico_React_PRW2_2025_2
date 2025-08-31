import { API } from '../../interceptor'

export async function createPurchase({
  productId,
  userId,
}) {
  const url = 'compras'

  const response = await API.post(url, {
    id_usuario: userId,
    id_produto: productId,
  })

  return response
}
