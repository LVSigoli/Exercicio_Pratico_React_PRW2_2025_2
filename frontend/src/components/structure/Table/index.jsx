// Components
import { TableColumns } from './components/TableColumns'
import { TableContent } from './components/TableContent'

// Styles
import styles from './styles.module.css'

export const Table = ({ columns, content, onRowClick, onDeleteClick }) => {
  return (
    <div className={styles.container}>
      <h3>Titulo</h3>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <TableColumns columns={columns} />
        </thead>

        <tbody className={styles.tbody}>
          <TableContent
            content={content}
            onRowClick={onRowClick}
            onDeleteClick={onDeleteClick}
          />
        </tbody>
      </table>
    </div>
  )
}
