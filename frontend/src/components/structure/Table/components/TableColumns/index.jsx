// Styles
import styles from './styles.module.css'

export const TableColumns = ({ columns }) => {
  return columns.map((column, index) => (
    <th key={index} className={styles.th}>
      <p>{column}</p>
    </th>
  ))
}
