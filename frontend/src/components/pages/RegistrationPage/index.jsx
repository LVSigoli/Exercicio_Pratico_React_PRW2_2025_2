// Components
import { UserForm } from './views/UserForm'
import { Table } from '../../structure/Table'
import { ButtonsRow } from './components/ButtonsRow'
import { SidePanel } from '../../structure/SidePanel'

// Utils
import { PRODUCTS_COLUMNS, USER_COLUMNS } from './utils'

// Hooks
import { useUsers } from '../../../hooks/useUsers'
import { useProducts } from '../../../hooks/useProducts'
import { useRegistratinPage } from './hooks/useRegistrationPage'

// Styles
import styles from './styles.module.css'
import { ProductsForm } from './views/ProductsForm'

export default function RegistrationPage() {
  // Hooks
  const {
    isVisible,
    sidePanelRef,
    togglePanel,
    handleButtonClick,
  } = useRegistratinPage()

  const {
    users,
    loading,
    refreshUsers,
    handleDeleteUser,
    handleCreateuser,
    handleEditUserClick,
  } = useUsers({ togglePanel })

  const {
    products,
    loadingProducts,
    handleDeleProduct,
    handleCreateProduct,
    handleEditProductsClick,
  } = useProducts({ togglePanel, refreshUsers })

  return (
    <div className={styles.container}>
      <h1>Seja bem vindo à página de cadastros!</h1>

      <ButtonsRow onClick={handleButtonClick} />

      <div className={styles.content}>
        <Table
          title="Clientes"
          content={users}
          columns={USER_COLUMNS}
          onDeleteClick={handleDeleteUser}
          onEditClick={handleEditUserClick}
        />

        <Table
          title="Produtos"
          content={products}
          columns={PRODUCTS_COLUMNS}
          onDeleteClick={handleDeleProduct}
          onEditClick={handleEditProductsClick}
        />
      </div>
      <SidePanel
        ref={sidePanelRef}
        visible={isVisible}
        onClose={togglePanel}
      >
        {/* <UserForm
          togglePanel={togglePanel}
          onConfirmClick={handleCreateuser}
        /> */}

        <ProductsForm
          togglePanel={togglePanel}
          onConfirmClick={handleCreateProduct}
        />
      </SidePanel>
    </div>
  )
}
