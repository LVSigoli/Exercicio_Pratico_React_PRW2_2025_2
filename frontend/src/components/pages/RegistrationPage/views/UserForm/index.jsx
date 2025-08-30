// Components
import { Button } from '../../../../structure/Button'
import { Input } from '../../../../structure/Input/index'

// Hooks
import { useUserForm } from './hooks/useUserForm'

// Styles
import styles from './styles.module.css'

export const UserForm = ({ onClose, onConfirmClick }) => {
  // Hooks
  const {
    name,
    errors,
    handleNameChange,
    handleCancelClick,
    handleConfirmClick,
  } = useUserForm({
    onConfirmClick,
    closePanel: onClose,
  })

  function handleSubmit(e) {
    e.preventDefault()
    handleConfirmClick()
  }

  return (
    <div>
      <h2> Cadastro de usuário</h2>
      <form
        className={styles.form}
        onSubmit={e => handleSubmit(e)}
      >
        <Input
          fitWidth
          required
          value={name}
          errors={errors}
          title="Nome do usuário"
          onChange={e => handleNameChange(e.target.value)}
        />

        <div className={styles['btn-row']}>
          <Button
            fitWidth
            variant="danger"
            label="Cancelar"
            onClick={handleCancelClick}
          />
          <Button
            fitWidth
            type="submit"
            variant="confirm"
            label="Confirmar"
          />
        </div>
      </form>
    </div>
  )
}
