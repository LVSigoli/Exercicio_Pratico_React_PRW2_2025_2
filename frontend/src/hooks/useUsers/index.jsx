// External Libraries
import { useEffect, useState } from 'react'

// Serivices
import {
  getUsers,
  removeUser,
} from '../../services/api/user'

export function useUsers({ togglePanel }) {
  // States
  const [users, setUsers] = useState([])
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

  async function handleDeleteUser(userId) {
    try {
      setLoading(true)
      await removeUser(userId)

      await fetchUsers()
    } catch (error) {
      //TODO
      //showToast({variant = 'error', message: "Erro ao remover usuários"})
    } finally {
      setLoading(false)
      //TODO
      //showToast({variant = 'success', message: "Produto removido"})
    }
  }

  function handleUserRowClick() {
    togglePanel()
  }

  return {
    users,
    loading,
    refreshUsers: fetchUsers,
    handleDeleteUser,
    handleUserRowClick,
  }
}
