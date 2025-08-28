import { Button } from '../structure/Button'
import { Header } from '../structure/Header'
import styles from './styles.module.css'

export const RegistrationPage = () => {
  return (
    <div className={styles.container}>
      <Header label="Seja bem vindo à página de cadastros!" />

      <div className={styles['btn-wrapper']}>
        <Button variant="default" label={'Novo produto'} />
        <Button variant="default" label={'Novo usuário'} />
        <Button variant="default" label={'Nova compra'} />
      </div>
    </div>
  )
}
