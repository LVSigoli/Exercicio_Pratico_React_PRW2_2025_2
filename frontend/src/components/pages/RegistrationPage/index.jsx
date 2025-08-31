// Components
import { Table } from '../../structure/Table'
import { FormViews } from './components/FormViews'
import { ButtonsRow } from './components/ButtonsRow'
import { SidePanel } from '../../structure/SidePanel'

// Utils
import { PRODUCTS_COLUMNS, USER_COLUMNS } from './utils'

// Hooks
import { useSidePanel } from './hooks/useSidePanel'
import { useRegistrationManager } from './hooks/useRegistrationManager'

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
  } = useSidePanel()
  const {
    users,
    products,
    selectedUser,
    selectedProduct,
    handleDeleteUser,
    handleDeleProduct,
    handleButtonClick,
    handleEditUserClick,
    handleEditProductClick,
  } = useRegistrationManager({ openSidePanel })

  return (
    <div className={styles.container}>
      <h1>Seja bem vindo à página de cadastros!</h1>

      <ButtonsRow onClick={handleButtonClick} />

      <div className={styles.content}>
        <Table
          canEdit
          title="Clientes"
          content={users}
          columns={USER_COLUMNS}
          onEditClick={handleEditUserClick}
          onDeleteClick={handleDeleteUser}
        />

        <Table
          canEdit
          title="Produtos"
          content={products}
          columns={PRODUCTS_COLUMNS}
          onEditClick={handleEditProductClick}
          onDeleteClick={handleDeleProduct}
        />
      </div>

      <SidePanel
        ref={sidePanelRef}
        visible={isVisible}
        onClose={togglePanel}
      >
        <FormViews
          currentView={view}
          currentUser={selectedUser}
          currentProduct={selectedProduct}
          onClose={togglePanel}
        />
      </SidePanel>
    </div>
  )
}
