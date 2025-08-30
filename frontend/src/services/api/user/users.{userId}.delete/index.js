import { API } from '../../interceptor'

export async function removeUser(userId) {
  const url = `usuarios/${userId}`

  const response = await API.delete(url)

  return response
}
