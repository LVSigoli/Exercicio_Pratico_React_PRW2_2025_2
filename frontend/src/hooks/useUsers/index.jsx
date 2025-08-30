// External Libraries
import { useEffect, useState } from 'react'

// Serivices
import {
  createUser,
  getUsers,
  removeUser,
} from '../../services/api/user'
import { removePurchase } from '../../services/api/purchases'

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

  async function handleDeleteUser(user) {
    try {
      setLoading(true)

      const id = user?.id

      await removeUser(id)

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

  // Functions
  async function handleDeletePurchase(purchase) {
    try {
      setLoading(true)

      const {} = purchase

      await removePurchase(params)
    } catch (error) {
      //TODO
      //showToast({variant = 'error', message: "Erro ao remover usuários"})
    } finally {
      setLoading(false)
      //TODO
      //showToast({variant = 'success', message: "Produto removido"})
    }
  }

  async function handleCreateuser(name) {
    try {
      setLoading(true)

      await createUser(name)
    } catch (error) {
      console.log(error)
      //TODO
      //showToast({variant = 'success', message: "Produto removido"})
    } finally {
      setLoading(false)
      await fetchUsers()
    }
  }

  function handleEditPurchasesClick() {
    togglePanel()
  }

  function handleEditUserClick() {
    togglePanel()
  }

  return {
    users,
    loading,
    refreshUsers: fetchUsers,
    handleDeleteUser,
    handleCreateuser,
    handleEditUserClick,
    handleDeletePurchase,
    handleDeletePurchase,
  }
}
