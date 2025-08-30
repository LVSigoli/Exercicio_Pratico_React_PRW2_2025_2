// Components
import { Button } from '../../../../structure/Button'

// Utils
import { parseValues } from './utils'

// Styles
import styles from './styles.module.css'

export const TableContent = ({
  content,
  onEditClick,
  onDeleteClick,
}) => {
  // Constants
  const lastIndex = content?.length - 1
  const validContent = Array.isArray(content) ? content : []

  // Functions
  function verifyLastIndex(index) {
    return index !== lastIndex ? styles['tr-border'] : ''
  }

  function handleEditClick(e, item) {
    e.stopPropagation()
    onEditClick(item)
  }

  function handleDeleteClick(e, item) {
    e.stopPropagation()
    onDeleteClick(item)
  }

  return validContent?.map((item, index) => {
    const values = Object.entries(item)
      .filter(([key]) => key !== 'id')
      .map(([, value]) => parseValues(value))

    return (
      <tr
        key={item.id}
        className={`${styles.tr} ${verifyLastIndex(index)}`}
        onClick={() => onEditClick(item)}
      >
        {values.map((val, i) => (
          <td className={styles.td} key={i}>
            <p>{val}</p>
          </td>
        ))}

        <td className={styles['btn-td']}>
          <Button
            label="Editar"
            variant="default"
            onClick={e => handleEditClick(e, item)}
          />

          <Button
            label="Remover"
            variant="danger"
            onClick={e => handleDeleteClick(e, item)}
          />
        </td>
      </tr>
    )
  })
}
