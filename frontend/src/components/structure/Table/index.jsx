// Components
import { TableContent } from './components/TableContent'

// Styles
import styles from './styles.module.css'

export const Table = ({
  title,
  columns,
  content,
  canEdit = true,
  editLabel = 'Editar',
  onEditClick,
  onDeleteClick,
}) => {
  // Functions
  function renderColumns() {
    return columns.map((column, index) => (
      <tr key={index}>
        <th className={styles.th}>
          <p>{column}</p>
        </th>
      </tr>
    ))
  }

  return (
    <div className={styles.container}>
      <h3>{title}</h3>

      <table className={styles.table}>
        <thead className={styles.thead}>
          {renderColumns()}
        </thead>

        <tbody>
          <div className={styles.tbody}>
            <TableContent
              content={content}
              canEdit={canEdit}
              editLabel={editLabel}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            />
          </div>
        </tbody>
      </table>
    </div>
  )
}
