import { API } from '../../interceptor'

export async function createUser(name) {
  const url = 'usuarios'

  const response = await API.post(url, { nome: name })

  return response
}
