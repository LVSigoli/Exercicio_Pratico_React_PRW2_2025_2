import { API } from '../../interceptor'

export async function removePurchase({
  userId,
  productId,
}) {
  const url = `compras/${productId}/${userId}`

  const response = await API.delete(url)

  return response
}
