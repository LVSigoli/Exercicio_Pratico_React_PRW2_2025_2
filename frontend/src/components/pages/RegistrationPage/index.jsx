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
  const TEST_COLUMNS = [
    'Nome Completo',
    'Endereço Completo',
    'Email',
    'Telefone',
    '',
  ]

  const TEST_USERS = [
    {
      id: 1,
      nome: 'Lucas Vinicius Sigoli de Oliveira',
      endereco:
        'Rua das Flores, 123, Bairro Jardim das Acácias, Cidade Grande, Estado SP, 01234-567',
      email: 'lucas.vinicius.sigoli@example.com',
      telefone: '+55 (11) 91234-5678',
    },
    {
      id: 2,
      nome: 'Ana Beatriz da Silva Pereira',
      endereco:
        'Avenida Paulista, 1000, Bairro Bela Vista, São Paulo, SP, 01310-100',
      email: 'ana.beatriz.pereira@example.com',
      telefone: '+55 (11) 98765-4321',
    },
    {
      id: 3,
      nome: 'Carlos Eduardo de Souza Martins',
      endereco:
        'Rua 7 de Setembro, 456, Centro, Rio de Janeiro, RJ, 20031-010',
      email: 'carlos.martins@example.com',
      telefone: '+55 (21) 99876-5432',
    },
  ]

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

      <Table
        title="Teste"
        content={TEST_USERS}
        columns={TEST_COLUMNS}
        onRowClick={handleRowClick}
        onDeleteClick={handleDeleteUser}
      />

      <SidePanel ref={sidePanelRef} visible={isVisible} />
    </div>
  )
}
