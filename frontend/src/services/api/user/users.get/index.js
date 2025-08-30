import { API } from '../../interceptor'

export async function getUsers() {
  const url = 'usuarios'

  const response = await API.get(url)

  return response.data
}
