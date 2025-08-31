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

      <div className={styles['table-wrapper']}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            {renderColumns()}
          </thead>

          <tbody>
            <TableContent
              content={content}
              canEdit={canEdit}
              editLabel={editLabel}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            />
          </tbody>
        </table>
      </div>
    </div>
  )
}
