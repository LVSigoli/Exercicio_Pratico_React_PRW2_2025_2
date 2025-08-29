// Styles
import styles from './styles.module.css'

export const TableColumns = ({ columns }) => {
  return columns.map((column, index) => (
    <tr key={index}>
      <th className={styles.th}>
        <p>{column}</p>
      </th>
    </tr>
  ))
}
