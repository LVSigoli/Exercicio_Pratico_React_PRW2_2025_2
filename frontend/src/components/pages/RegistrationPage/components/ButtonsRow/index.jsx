// Components
import { Button } from '../../../../structure/Button'

// Utils
import { FORM_TYPES } from '../../../../../utils/fomTypes'

// Styles
import styles from './styles.module.css'

export const ButtonsRow = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <Button
        variant="default"
        label="Novo produto"
        onClick={() => onClick(FORM_TYPES.PRODUCT)}
      />

      <Button
        variant="default"
        label="Novo usuário"
        onClick={() => onClick(FORM_TYPES.USER)}
      />
    </div>
  )
}
