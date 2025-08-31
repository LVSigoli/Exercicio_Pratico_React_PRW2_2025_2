// Components
import { FORM_TYPES } from '../../../../../utils'
import { Table } from '../../../../structure/Table'
import { ButtonsRow } from './components/ButtonsRow'
import { Input } from '../../../../structure/Input/index'

// Hooks
import { useUserForm } from './hooks/useUserForm'

// Styles
import styles from './styles.module.css'

export const UserForm = ({
  view,
  currentUser,
  onClose,
  onConfirmClick,
}) => {
  // Hooks
  const {
    name,
    errors,
    handleNameChange,
    handleCancelClick,
    handleConfirmClick,
  } = useUserForm({
    currentUser,
    onConfirmClick,
    closePanel: onClose,
  })

  function handleSubmit(e) {
    e.preventDefault()
    handleConfirmClick()
  }

  const PRODUCTS_COLUMNS = ['Nome', 'Preço', '']

  return (
    <div>
      {FORM_TYPES.PURCHASE === view ? (
        <h2> Detalhes</h2>
      ) : (
        <h2>Cadastro de usuário</h2>
      )}

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

        {FORM_TYPES.PURCHASE === view ? (
          <div>
            <Table
              title="Produtos"
              canEdit={false}
              columns={PRODUCTS_COLUMNS}
              content={currentUser?.produtos}
              onDeleteClick={() => {}}
            />
          </div>
        ) : null}

        <ButtonsRow onCancel={handleCancelClick} />
      </form>
    </div>
  )
}
