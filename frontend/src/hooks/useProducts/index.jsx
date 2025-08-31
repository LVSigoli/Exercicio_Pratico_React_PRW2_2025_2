// External libraries
import { useEffect, useState } from 'react'

// Utils
import { makeInitialProduct } from '../../utils'

// Servicers
import {
  getProducts,
  createProduct,
  removeProducts,
  updateProduct,
} from '../../services/api/products'

export function useProducts({ refreshUsers }) {
  // States
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(
    makeInitialProduct
  )

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
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function handleCreateProduct(product) {
    try {
      setLoading(true)

      const payload = {
        nome: product.name,
        preco: product.price,
      }

      await createProduct(payload)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      await fetchProducts()
    }
  }

  function handleProductSelection(product) {
    setSelectedProduct(product)
  }

  async function handleUpdateProduct(product) {
    try {
      setLoading(true)

      const payload = {
        id: product.id,
        nome: product.name,
        preco: product.price,
      }

      await updateProduct(payload)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      await fetchProducts()
    }
  }

  return {
    products,
    selectedProduct,
    loadingProducts: loading,
    handleDeleProduct,
    handleUpdateProduct,
    handleCreateProduct,
    handleProductSelection,
  }
}
