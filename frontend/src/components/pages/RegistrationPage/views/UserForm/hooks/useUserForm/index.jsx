// External Libraries
import { useEffect, useState } from 'react'

// Utils
import { makeInitialOption } from '../utils'
import { parseProductToOption } from './utils'
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
      const success =
        view === FORM_TYPES.USER
          ? createUser()
          : updatePurchases()

      if (!success) return

      setErrors('')
    } catch (error) {
      console.error(error)
    }
  }

  function createUser() {
    const validationError = checkErrors(name)
    setErrors(validationError)

    if (validationError) return false

    onConfirm(name)

    setName('')
    closePanel()
  }

  function updatePurchases() {
    const validationError = checkOptionErros(selectedOption)
    setOptionErrors(validationError)

    if (validationError) return false

    onConfirm(selectedOption)
    setSelectedOption(makeInitialOption)
  }

  function handleNameChange(value) {
    setName(value)
  }

  function handleCancelClick() {
    setName('')
    setErrors('')
    closePanel()
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
      currentUser?.produtos
    ),
    handleNameChange,
    handleCancelClick,
    handleConfirmClick,
    handleOptionSelection,
  }
}
