import { API } from '../../interceptor'

export async function updateProduct({ id, nome, preco }) {
  const url = `produtos/${id}`

  const response = await API.put(url, { id, nome, preco })

  return response
}
