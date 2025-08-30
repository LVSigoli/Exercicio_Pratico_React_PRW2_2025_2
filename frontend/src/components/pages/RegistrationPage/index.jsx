// Components
import { Table } from '../../structure/Table'
import { FormViews } from './components/FormViews'
import { ButtonsRow } from './components/ButtonsRow'
import { SidePanel } from '../../structure/SidePanel'

// Utils
import { FORM_TYPES } from '../../../utils/fomTypes'
import { PRODUCTS_COLUMNS, USER_COLUMNS } from './utils'

// Hooks
import { useRegistratinPage } from './hooks/useRegistrationPage'
import { useDataContext } from '../../../contexts/Datacontext/indes'

// Styles
import styles from './styles.module.css'

export default function RegistrationPage() {
  // Hooks
  const {
    view,
    isVisible,
    sidePanelRef,
    togglePanel,
    openSidePanel,
  } = useRegistratinPage()
  const {
    users,
    products,
    handleCreateUser,
    handleDeleteUser,
    handleDeleProduct,
    handleCreateProduct,
  } = useDataContext()

  // Functions

  function handleEditProductClick(product) {
    openSidePanel(FORM_TYPES.PRODUCT_EDIT)
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

  return (
    <div className={styles.container}>
      <h1>Seja bem vindo à página de cadastros!</h1>

      <ButtonsRow onClick={handleButtonClick} />

      <div className={styles.content}>
        <Table
          title="Clientes"
          content={users}
          columns={USER_COLUMNS}
          onEditClick={handleCreateUserClick}
          onDeleteClick={handleDeleteUser}
        />

        <Table
          title="Produtos"
          content={products}
          columns={PRODUCTS_COLUMNS}
          onEditClick={handleCreateProductClick}
          onDeleteClick={handleDeleProduct}
        />
      </div>

      <SidePanel
        ref={sidePanelRef}
        visible={isVisible}
        onClose={togglePanel}
      >
        <FormViews currentView={view} />
      </SidePanel>
    </div>
  )
}
