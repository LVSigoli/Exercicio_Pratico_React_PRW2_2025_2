// Components
import { UserForm } from '../../views/UserForm'
import { ProductsForm } from '../../views/ProductsForm'

// Hooks
import { useDataContext } from '../../../../../contexts/Datacontext/indes'

// Utils
import { FORM_TYPES } from '../../../../../utils'

// Styles
import styles from './styles.module.css'

export const FormViews = ({
  currentView,
  currentUser,
  currentProduct,
  onClose,
}) => {
  // Hooks
  const { handleCreateProduct, handleCreateUser } =
    useDataContext()

  // Functions
  function renderForms() {
    switch (currentView) {
      case FORM_TYPES.USER:
        return (
          <UserForm
            onClose={onClose}
            onConfirmClick={handleCreateUser}
          />
        )

      case FORM_TYPES.PRODUCT:
        return (
          <ProductsForm
            onConfirmClick={handleCreateProduct}
            onClose={onClose}
          />
        )

      case FORM_TYPES.PURCHASE:
        return <UserForm />

      case FORM_TYPES.PRODUCT_EDIT:
        return (
          <ProductsForm
            selectedProduct={currentProduct}
            onClose={onClose}
          />
        )

      default:
        return null
    }
  }

  return (
    <div className={styles.container}>{renderForms()}</div>
  )
}
