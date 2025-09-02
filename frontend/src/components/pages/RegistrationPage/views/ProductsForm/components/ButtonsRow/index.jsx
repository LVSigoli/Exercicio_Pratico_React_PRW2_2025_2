// components
import { Button } from '../../../../../../structure/Button'

// Styles
import styles from './styles.module.css'

export const ButtonRow = ({ onCancel }) => {
  return (
    <div className={styles.container}>
      <Button
        fitWidth
        variant="danger"
        label="Cancelar"
        onClick={onCancel}
      />
      <Button
        fitWidth
        type="submit"
        variant="confirm"
        label="Confirmar"
      />
    </div>
  )
}
