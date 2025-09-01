// External Libraries
import { useEffect, useState } from 'react'

// Utils
import { makeInitialOption } from '../utils'
import { FORM_TYPES } from '../../../../../../../utils'

export function useUserForm({
  view,
  products,
  currentUser,
  onConfirm,
  closePanel,
}) {
  // States
  const [name, setName] = useState('')
  const [errors, setErrors] = useState('')
  const [optionErrors, setOptionErrors] = useState('')
  const [selectedOption, setSelectedOption] = useState(
    makeInitialOption
  )

  // Effect
  useEffect(() => {
    if (currentUser) setName(currentUser.nome)

    return () => {
      setErrors('')
      setName('')
      setSelectedOption(makeInitialOption)
    }
  }, [currentUser])

  // Functions
  function checkErrors(value) {
    if (!value.trim()) return 'Campo obrigatório'

    return ''
  }

  function checkOptionErros(selectedOption) {
    if (!selectedOption?.value) return 'Campo Obrigatório'

    return ''
  }

  async function handleConfirmClick() {
    try {
      if (view === FORM_TYPES.USER) {
        const validationError = checkErrors(name)
        setErrors(validationError)

        if (validationError) return

        onConfirm(name)

        setName('')
      } else {
        const validationError =
          checkOptionErros(selectedOption)
        setOptionErrors(validationError)

        console.log(validationError)

        if (validationError) return

        onConfirm(selectedOption)
        setSelectedOption(makeInitialOption)
      }

      setErrors('')
      closePanel()
    } catch (error) {
      console.error(error)
    }
  }

  function handleNameChange(value) {
    setName(value)
  }

  function handleCancelClick() {
    setName('')
    setErrors('')
    closePanel()
  }

  function parseProductToOption(products) {
    if (
      !Array.isArray(products) ||
      !Array.isArray(currentUser?.produtos)
    ) {
      return []
    }

    if (currentUser?.produtos) {
      const userProductIds =
        currentUser?.produtos?.map(p => p.id) || []

      return products
        .filter(
          product => !userProductIds.includes(product.id)
        )
        .map(product => ({
          value: product.id,
          label: `${product.nome} R$ ${product.preco}`,
        }))
    }
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
    optionErrors,
    selectedOption,
    productOptions: parseProductToOption(
      products,
      currentUser
    ),
    handleNameChange,
    handleCancelClick,
    handleConfirmClick,
    handleOptionSelection,
  }
}
