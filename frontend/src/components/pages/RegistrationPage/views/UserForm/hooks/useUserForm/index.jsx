// External Libraries
import { useEffect, useState } from 'react'
import { makeInitialOption } from '../utils'

export function useUserForm({
  products,
  currentUser,
  onConfirm,
  closePanel,
}) {
  // States
  const [name, setName] = useState('')
  const [errors, setErrors] = useState('')
  const [selectedOption, setSelectedOption] = useState(
    makeInitialOption
  )

  // Effect
  useEffect(() => {
    if (currentUser) setName(currentUser.nome)

    return () => {
      setErrors('')
      setName('')
    }
  }, [currentUser])

  // Functions
  function checkErrors(value) {
    if (!value.trim()) return 'Campo obrigatório'

    return ''
  }

  async function handleConfirmClick() {
    try {
      const validationError = checkErrors(name)
      setErrors(validationError)

      if (validationError) return

      onConfirm(name)

      setName('')
      setErrors('')
      closePanel()
    } catch (error) {
      console.error(error)
    }
  }

  function handleNameChange(value) {
    setName(value)

    setErrors(checkErrors(value))
  }

  function handleCancelClick() {
    setName('')
    setErrors('')
    closePanel()
  }

  function parseProductToOption(products) {
    if (!Array.isArray(products)) return []

    return products.map(product => ({
      value: product.id,
      label: `${product.nome} R$${product.preco}`,
    }))
  }

  function handleOptionSelection(option) {
    if (option.value !== selectedOption.value) {
      return setSelectedOption(option)
    }

    setSelectedOption(makeInitialOption)
  }

  return {
    name,
    errors,
    selectedOption,
    productOptions: parseProductToOption(products),
    handleNameChange,
    handleCancelClick,
    handleConfirmClick,
    handleOptionSelection,
  }
}
