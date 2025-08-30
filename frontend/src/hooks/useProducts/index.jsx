// External libraries
import { useEffect, useState } from 'react'
import {
  getProducts,
  removeProducts,
} from '../../services/api/products'

export function useProducts({ togglePanel, refreshUsers }) {
  // States
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  // Effects
  useEffect(() => {
    fetchProducts()
  }, [])

  // Functions

  async function fetchProducts() {
    try {
      setLoading(true)

      const response = await getProducts()

      setProducts(response)
    } catch (error) {
      //Todo
      //showToast({variant:"error", message: Erro ao trazer produtos})
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function handleDeleProduct(product) {
    try {
      const id = product?.id
      setLoading(true)
      await removeProducts(id)

      await fetchProducts()
      refreshUsers()
    } catch (error) {
      //TODO
      //showToast({variant = 'error', message: "Erro ao remover usuários"})
    } finally {
      setLoading(false)
      //TODO
      //showToast({variant = 'success', message: "Produto removido"})
    }
  }

  function handleEditProductsClick() {
    togglePanel()
  }

  return {
    products,
    loadingProducts: loading,
    handleDeleProduct,
    handleEditProductsClick,
  }
}
