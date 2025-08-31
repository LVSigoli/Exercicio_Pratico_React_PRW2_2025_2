// External Libraries
import { useEffect, useState } from 'react'

// Utils
import { makeInitialUser } from '../../utils'

// Serivices
import {
  getUsers,
  createUser,
  removeUser,
} from '../../services/api/user'
import {
  createPurchase,
  removePurchase,
} from '../../services/api/purchases'

export function useUsers() {
  // States
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] =
    useState(makeInitialUser)
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
      console.log(error)
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
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function handleDeletePurchase(purchase) {
    try {
      setLoading(true)

      await removePurchase(purchase)
    } catch (error) {
      //TODO
      //showToast({variant = 'error', message: "Erro ao remover usuários"})
      console.log(error)
    } finally {
      fetchUsers()
      setLoading(false)
      //TODO
      //showToast({variant = 'success', message: "Produto removido"})
    }
  }

  async function handleCreateUser(name) {
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

  async function handleCreatePurchase(product) {
    try {
      setLoading(true)

      const purchase = {
        userId: selectedUser.id,
        productId: product.value,
      }

      await createPurchase(purchase)
    } catch (error) {
      //TODO
      //showToast({variant = 'success', message: "Produto removido"})
      console.log(error)
    } finally {
      setLoading(false)
      await fetchUsers()
    }
  }

  function handleUserSelection(user) {
    setSelectedUser(user)
  }

  return {
    users,
    loading,
    selectedUser,
    handleDeleteUser,
    handleCreateUser,
    handleUserSelection,
    handleCreatePurchase,
    handleDeletePurchase,
    refreshUsers: fetchUsers,
  }
}
