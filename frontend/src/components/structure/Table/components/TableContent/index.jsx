// Components
import { Button } from '../../../../structure/Button'

// Utils
import { parseValues } from './utils'

// Styles
import styles from './styles.module.css'

export const TableContent = ({
  canEdit,
  content,
  editLabel,
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
    if (canEdit) onEditClick(item)
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
      >
        {values.map((val, i) => (
          <td className={styles.td} key={i}>
            <p>{val}</p>
          </td>
        ))}
        <td className={styles['btn-td']}>
          {canEdit ? (
            <Button
              variant="default"
              label={editLabel}
              onClick={e => handleEditClick(e, item)}
            />
          ) : null}

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
