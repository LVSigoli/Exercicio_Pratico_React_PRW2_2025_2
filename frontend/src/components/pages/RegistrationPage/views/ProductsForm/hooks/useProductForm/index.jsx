import { useState, useEffect } from 'react'
import {
  makeInitialErros,
  makeInitialProduct,
} from './utils'

export function useProductForm({
  selectedProduct,
  onConfirmClick,
  closePanel,
}) {
  // States
  const [errors, setErrors] = useState(makeInitialErros)
  const [product, setProduct] = useState(makeInitialProduct)

  useEffect(() => {
    if (selectedProduct) {
      setProduct({
        id: selectedProduct.id,
        name: selectedProduct.nome,
        price: selectedProduct.preco,
      })
    }

    return () => {
      setErrors(makeInitialErros)
      setProduct(makeInitialProduct)
    }
  }, [selectedProduct])

  // Functions
  function checkErrors(nextProduct = product) {
    return {
      name: !nextProduct?.name?.trim()
        ? 'Campo obrigatório'
        : '',
      price:
        nextProduct?.price <= 0
          ? 'O preço deve ser maior que 0'
          : '',
    }
  }

  // Handlers
  function handleFieldChange(key, value) {
    const updatedProduct = { ...product, [key]: value }
    setProduct(updatedProduct)
    setErrors(checkErrors(updatedProduct))
  }

  function handleCancelClick() {
    setProduct(makeInitialProduct)
    setErrors(makeInitialErros)
    closePanel()
  }

  function handleConfirmClick() {
    const validationErrors = checkErrors(product)
    setErrors(validationErrors)

    // Se houver algum erro, não continua
    if (Object.values(validationErrors).some(err => !!err))
      return

    onConfirmClick(product)
    setProduct(makeInitialProduct)
    setErrors(makeInitialErros)
    closePanel()
  }

  return {
    product,
    errors,
    handleFieldChange,
    handleCancelClick,
    handleConfirmClick,
  }
}
