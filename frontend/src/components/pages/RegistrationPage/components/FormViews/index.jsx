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
    handleCreatePurchase,
    handleDeletePurchase,
  } = useDataContext()

  // Functions
  function renderForms() {
    switch (currentView) {
      case FORM_TYPES.USER:
        return (
          <UserForm
            onClose={onClose}
            view={FORM_TYPES.USER}
            onConfirm={handleCreateUser}
          />
        )

      case FORM_TYPES.PRODUCT:
        return (
          <ProductsForm
            view={FORM_TYPES.PRODUCT}
            onClose={onClose}
            onConfirmClick={handleCreateProduct}
          />
        )

      case FORM_TYPES.PURCHASE:
        return (
          <UserForm
            currentUser={currentUser}
            view={FORM_TYPES.PURCHASE}
            onClose={onClose}
            onDelete={handleDeletePurchase}
            onConfirm={handleCreatePurchase}
          />
        )

      case FORM_TYPES.PRODUCT_EDIT:
        return (
          <ProductsForm
            view={FORM_TYPES.PRODUCT_EDIT}
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
