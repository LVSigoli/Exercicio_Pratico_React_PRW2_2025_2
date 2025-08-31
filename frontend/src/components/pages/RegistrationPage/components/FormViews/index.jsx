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
  const {
    handleCreateUser,
    handleCreateProduct,
    handleUpdateProduct,
  } = useDataContext()

  // Functions
  function renderForms() {
    switch (currentView) {
      case FORM_TYPES.USER:
        return (
          <UserForm
            view={FORM_TYPES.USER}
            onClose={onClose}
            onConfirmClick={handleCreateUser}
          />
        )

      case FORM_TYPES.PRODUCT:
        return (
          <ProductsForm
            onClose={onClose}
            onConfirmClick={handleCreateProduct}
          />
        )

      case FORM_TYPES.PURCHASE:
        return (
          <UserForm
            view={FORM_TYPES.PURCHASE}
            currentUser={currentUser}
            onClose={onClose}
            onConfirmClick={() => {}}
          />
        )

      case FORM_TYPES.PRODUCT_EDIT:
        return (
          <ProductsForm
            selectedProduct={currentProduct}
            onClose={onClose}
            onConfirmClick={handleUpdateProduct}
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
