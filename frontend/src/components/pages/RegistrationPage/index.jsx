// Components
import { Table } from '../../structure/Table'
import { Header } from '../../structure/Header'
import { useUsers } from '../../../hooks/useUsers'
import { SidePanel } from '../../structure/SidePanel'
import { ButtonsRow } from './components/ButtonsRow'

// Hooks
import { useRegistratinPage } from './hooks/useRegistrationPage'

// Styles
import styles from './styles.module.css'

export default function RegistrationPage() {
  // Hooks
  const { sidePanelRef, isVisible, handleButtonClick } = useRegistratinPage()
  const { users, loading } = useUsers()

  console.log(users)

  return (
    <div className={styles.container}>
      <Header text="Seja bem vindo à página de cadastros!" />

      <ButtonsRow onClick={handleButtonClick} />

      <Table
        columns={['Nome', 'Idade', 'Cidade']}
        content={[
          ['João', 25, 'São Paulo'],
          ['Maria', 30, 'Rio de Janeiro'],
          ['Pedro', 22, 'Belo Horizonte'],
        ]}
      />

      <SidePanel visible={isVisible} ref={sidePanelRef}></SidePanel>
    </div>
  )
}
