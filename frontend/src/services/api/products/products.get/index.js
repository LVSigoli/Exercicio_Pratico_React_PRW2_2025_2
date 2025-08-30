import { API } from '../../interceptor'

export async function getProducts() {
  const url = 'produtos'

  const response = await API.get(url)

  return response.data
}
