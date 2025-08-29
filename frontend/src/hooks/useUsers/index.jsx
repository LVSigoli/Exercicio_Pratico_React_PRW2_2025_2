// External Libraries
import { useEffect, useState } from 'react'

// Serivices
import { getUsers } from '../../services/api/user'

export function useUsers() {
  // States
  const [users, setUsers] = useState()
  const [loading, setLoading] = useState(false)

  // Effects
  useEffect(() => {
    fetchUsers()
  }, [])

  //Functions
  async function fetchUsers() {
    try {
      setLoading(true)

      const response = await getUsers()

      setUsers(response)
    } catch (error) {
      //TODO
      //showToast({variant = 'error', message: "Erro ao buscar usuários"})
    } finally {
      setLoading(false)
    }
  }

  return { users, loading }
}
