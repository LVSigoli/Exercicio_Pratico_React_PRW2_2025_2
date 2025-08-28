// Components
import { Button } from '../../structure/Button'
import { Header } from '../../structure/Header'
import { Input } from '../../structure/Input/index.'
import { SidePanel } from '../../structure/SidePanel'
import { ButtonsRow } from './components/ButtonsRow'

// Hooks
import { useRegistratinPage } from './hooks/useRegistrationPage'

// Styles
import styles from './styles.module.css'

export default function RegistrationPage() {
  // Hooks
  const { sidePanelRef, isVisible, handleButtonClick } = useRegistratinPage()

  return (
    <div className={styles.container}>
      <Header text="Seja bem vindo à página de cadastros!" />

      <ButtonsRow onClick={handleButtonClick} />

      <SidePanel visible={isVisible} ref={sidePanelRef}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <Header text="Teste de Painel" />
          <Input title="teste" fitWidth type="text" label="teste" placeholder="testando" />
          <Input title="teste" fitWidth type="text" label="teste" placeholder="testando" />
          <Input title="teste" fitWidth type="text" label="teste" placeholder="testando" />
          <Input title="teste" fitWidth type="text" label="teste" placeholder="testando" />

          <div className={styles['btn-wrapper']}>
            <Button variant="confirm" fitWidth label="Confirmar" onClick={handleButtonClick} />
            <Button variant="danger" fitWidth label="Cancelar" onClick={handleButtonClick} />
          </div>
        </div>
      </SidePanel>
    </div>
  )
}
