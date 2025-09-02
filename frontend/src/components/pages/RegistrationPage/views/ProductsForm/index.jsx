// Components
import { ButtonRow } from './components/ButtonsRow'
import { Input } from '../../../../structure/Input/index'

// Hooks
import { useProductForm } from './hooks/useProductForm'

// Utils
import { FORM_TYPES } from '../../../../../utils'

// Styles
import styles from './styles.module.css'

export const ProductsForm = ({
  view,
  selectedProduct,
  onClose,
  onConfirmClick,
}) => {
  // Hook
  const {
    product,
    errors,
    handleFieldChange,
    handleCancelClick,
    handleConfirmClick,
  } = useProductForm({
    selectedProduct,
    onConfirmClick,
    closePanel: onClose,
  })

  // Functions
  function handleSubmit(e) {
    e.preventDefault()
    handleConfirmClick()
  }

  return (
    <>
      {FORM_TYPES?.PRODUCT === view ? (
        <h2>Cadastro de Produto</h2>
      ) : (
        <h2>Editar Produto</h2>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          fitWidth
          required
          name={'name'}
          value={product.name}
          errors={errors.name}
          title="Nome do Produto"
          onChange={e =>
            handleFieldChange('name', e.target.value)
          }
        />

        <Input
          fitWidth
          required
          type="number"
          name={'price'}
          value={product.price}
          errors={errors.price}
          title="Preço"
          onChange={e =>
            handleFieldChange(
              'price',
              parseFloat(e.target.value)
            )
          }
        />

        <ButtonRow onCancel={handleCancelClick} />
      </form>
    </>
  )
}
