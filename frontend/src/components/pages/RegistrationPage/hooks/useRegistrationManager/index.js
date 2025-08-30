// Hooks
import { useDataContext } from '../../../../../contexts/Datacontext/indes'

// Utils
import { FORM_TYPES } from '../../../../../utils'

export function useRegistrationManager({ openSidePanel }) {
  // Hooks
  const {
    users,
    products,
    selectedProduct,
    handleCreateUser,
    handleDeleteUser,
    handleDeleProduct,
    handleCreateProduct,
    handleProductSelection,
  } = useDataContext()

  // Functions
  function handleEditProductClick(product) {
    openSidePanel(FORM_TYPES.PRODUCT_EDIT)

    handleProductSelection(product)
  }

  function handleEditUserClick(user) {
    openSidePanel(FORM_TYPES.PURCHASE)
  }

  function handleCreateUserClick(view) {
    openSidePanel(FORM_TYPES.USER)
  }

  function handleCreateProductClick(view) {
    openSidePanel(FORM_TYPES.PRODUCT)
  }

  function handleButtonClick(view) {
    switch (view) {
      case FORM_TYPES.USER:
        return openSidePanel(FORM_TYPES.USER)

      case FORM_TYPES.PRODUCT:
        return openSidePanel(FORM_TYPES.PRODUCT)

      default:
        return null
    }
  }

  return {
    users,
    products,
    selectedProduct,
    handleCreateUser,
    handleDeleteUser,
    handleDeleProduct,
    handleCreateProduct,
    handleCreateProduct,
    handleButtonClick,
    handleEditUserClick,
    handleCreateUserClick,
    handleEditProductClick,
    handleCreateProductClick,
  }
}
