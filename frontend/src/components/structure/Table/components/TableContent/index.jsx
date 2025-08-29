// Components
import { Button } from '../../../../structure/Button'

// Utils
import { parseValues } from './utils'

// Styles
import styles from './styles.module.css'

export const TableContent = ({
  content,
  onRowClick,
  onDeleteClick,
}) => {
  // Constants
  const lastIndex = content.length - 1

  // Functions
  function verifyLastIndex(index) {
    return index !== lastIndex ? styles['tr-border'] : ''
  }

  return content.map((item, index) => {
    const values = Object.entries(item)
      .filter(([key]) => key !== 'id')
      .map(([, value]) => parseValues(value))

    return (
      <tr
        key={item.id}
        className={`${styles.tr} ${verifyLastIndex(index)}`}
        onClick={() => onRowClick(item)}
      >
        {values.map((val, i) => (
          <td className={styles.td} key={i}>
            <p>{val}</p>
          </td>
        ))}

        <td className={styles['btn-td']}>
          <Button
            label="Remover"
            variant="danger"
            onClick={() => onDeleteClick(item.id)}
          />
        </td>
      </tr>
    )
  })
}
