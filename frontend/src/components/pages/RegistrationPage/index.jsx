// Components
import { Button } from '../../structure/Button'
import { Header } from '../../structure/Header'
import { FormPanel } from '../../structure/FormPanel'

// Styles
import styles from './styles.module.css'
import { useRegistratinPage } from './hooks/useRegistrationPage'
import { Input } from '../../structure/Input/index.'

export default function RegistrationPage() {
  // Hooks
  const { sidePanelRef, isVisible, handleButtonCLick } = useRegistratinPage()

  return (
    <div className={styles.container}>
      <Header label="Seja bem vindo à página de cadastros!" />

      <div className={styles['btn-wrapper']}>
        <Button variant="default" label={'Novo produto'} onClick={handleButtonCLick} />
        <Button variant="default" label={'Novo usuário'} onClick={handleButtonCLick} />
        <Button variant="default" label={'Nova compra'} onClick={handleButtonCLick} />
      </div>

      <Input title="teste" type="text" label="teste" placeholder="testando" />

      <FormPanel visible={isVisible} ref={sidePanelRef} />
    </div>
  )
}
