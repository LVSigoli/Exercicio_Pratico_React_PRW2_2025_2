// Components
import { Table } from '../../structure/Table'
import { Header } from '../../structure/Header'
import { useUsers } from '../../../hooks/useUsers'
import { ButtonsRow } from './components/ButtonsRow'
import { SidePanel } from '../../structure/SidePanel'

// Utils
import { USER_COLUMNS } from './utils'

// Hooks
import { useRegistratinPage } from './hooks/useRegistrationPage'

// Styles
import styles from './styles.module.css'

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
    handleRowClick,
    handleDeleteUser,
  } = useUsers({ togglePanel })

  return (
    <div className={styles.container}>
      <Header text="Seja bem vindo à página de cadastros!" />

      <ButtonsRow onClick={handleButtonClick} />

      <div className={styles.content}>
        <Table
          title="Clientes"
          content={users}
          columns={USER_COLUMNS}
          onRowClick={handleRowClick}
          onDeleteClick={handleDeleteUser}
        />
      </div>

      <SidePanel ref={sidePanelRef} visible={isVisible} />
    </div>
  )
}
