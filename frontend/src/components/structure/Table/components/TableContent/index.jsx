// Components
import { Button } from '../../../../structure/Button'

// Utils
import { formatProducts } from './utils/formatProducts'

// Styles
import styles from './styles.module.css'

export const TableContent = ({
  content,
  onRowClick,
  onDeleteClick,
}) => {
  const lastIndex = content.length - 1

  function verifyLastIndex(index) {
    return index !== lastIndex ? styles['tr-border'] : ''
  }

  return content.map((item, index) => (
    <tr
      key={item.id}
      className={`${styles.tr} ${verifyLastIndex(index)}`}
      onClick={() => onRowClick(item)}
    >
      <td className={styles.td}>
        <p>{item.nome}</p>
      </td>

      <td className={styles.td}>
        <p>{formatProducts(item.produtos)}</p>
      </td>

      <td className={styles['btn-td']}>
        <Button
          label="Remover"
          variant="danger"
          onClick={e => onDeleteClick(item.id)}
        />
      </td>
    </tr>
  ))
}
