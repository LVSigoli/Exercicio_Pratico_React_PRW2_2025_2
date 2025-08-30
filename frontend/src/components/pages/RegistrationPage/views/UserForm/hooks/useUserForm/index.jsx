import { useState } from 'react'

export function useUserForm({
  onConfirmClick,
  closePanel,
}) {
  // States
  const [name, setName] = useState('')
  const [errors, setErrors] = useState('')

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

      onConfirmClick(name)

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

  return {
    name,
    errors,
    handleNameChange,
    handleCancelClick,
    handleConfirmClick,
  }
}
