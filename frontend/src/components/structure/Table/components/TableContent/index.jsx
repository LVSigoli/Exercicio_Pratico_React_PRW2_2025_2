import { Button } from '../../../../structure/Button'

// Styles
import styles from './styles.module.css'

export const TableContent = ({ content, onRowClick, onDeleteClick }) => {
  return content.map((row, rowIndex) => (
    <tr className={styles.tr} key={rowIndex} onClick={() => onRowClick(row)}>
      {row.map((cell, cellIndex) => (
        <td className={styles.td} key={cellIndex}>
          {cell}
        </td>
      ))}

      <td className={styles.td}>
        <Button variant="danger" label="Remover" onClick={onDeleteClick} />
      </td>
    </tr>
  ))
}
