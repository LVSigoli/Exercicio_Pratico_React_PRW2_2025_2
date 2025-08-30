import { API } from '../../interceptor'

export async function createProduct({ nome, preco }) {
  const url = 'produtos'

  const response = await API.post(url, { nome, preco })

  return response.data
}
