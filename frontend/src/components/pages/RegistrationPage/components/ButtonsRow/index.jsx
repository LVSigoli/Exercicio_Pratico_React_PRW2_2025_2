// Components
import { Button } from '../../../../structure/Button'

// Styles
import styles from './styles.module.css'

export const ButtonsRow = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <Button
        variant="default"
        label="Novo produto"
        onClick={onClick}
      />

      <Button
        variant="default"
        label="Novo usuário"
        onClick={onClick}
      />
    </div>
  )
}
