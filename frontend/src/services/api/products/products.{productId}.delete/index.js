import { API } from '../../interceptor'

export async function removeProducts(productId) {
  const url = `produtos/${productId}`

  const response = await API.delete(url)

  return response
}
