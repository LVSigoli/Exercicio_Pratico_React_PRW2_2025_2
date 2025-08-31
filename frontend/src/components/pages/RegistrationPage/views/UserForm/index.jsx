// Components
import { Table } from '../../../../structure/Table'
import { ButtonsRow } from './components/ButtonsRow'
import { Select } from '../../../../structure/Select'
import { Input } from '../../../../structure/Input/index'

// Hooks
import { useUserForm } from './hooks/useUserForm'
import { useDataContext } from '../../../../../contexts/Datacontext/indes'

// Utils
import { PRODUCTS_COLUMNS } from './utils'
import { FORM_TYPES } from '../../../../../utils'

// Styles
import styles from './styles.module.css'

export const UserForm = ({
  view,
  currentUser,
  onClose,
  onDelete,
  onConfirm,
}) => {
  // Hooks
  const { products } = useDataContext()
  const {
    name,
    errors,
    selectedOption,
    productOptions,
    handleNameChange,
    handleCancelClick,
    handleConfirmClick,
    handleOptionSelection,
  } = useUserForm({
    products,
    onConfirm,
    currentUser,
    closePanel: onClose,
  })

  // Functions
  function handleSubmit(e) {
    e.preventDefault()
    handleConfirmClick()
  }

  function handleDelete(product) {
    if (!onDelete) return

    const purchase = {
      productId: product.id,
      userId: currentUser.id,
    }

    onDelete(purchase)
  }

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

        <Select
          options={productOptions}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelection}
        />

        {FORM_TYPES.PURCHASE === view ? (
          <div>
            <Table
              title="Produtos"
              canEdit={false}
              columns={PRODUCTS_COLUMNS}
              content={currentUser?.produtos}
              onDeleteClick={handleDelete}
            />
          </div>
        ) : null}

        <ButtonsRow onCancel={handleCancelClick} />
      </form>
    </div>
  )
}
