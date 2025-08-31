// Components
import { FORM_TYPES } from '../../../../../utils'
import { Button } from '../../../../structure/Button'
import { Input } from '../../../../structure/Input/index'

// Hooks
import { useProductForm } from './hooks/useProductForm'

// Styles
import styles from './styles.module.css'

export const ProductsForm = ({
  view,
  selectedProduct,
  onClose,
  onConfirmClick,
}) => {
  // Hook de produto
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
    </>
  )
}
