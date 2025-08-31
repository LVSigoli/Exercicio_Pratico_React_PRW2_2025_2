// Styles
import styles from './styles.module.css'

export const Option = ({ option, isSelected, onClick }) => {
  // Function
  function handleSelection() {
    onClick(option)
  }

  return (
    <div
      className={`${styles.container} ${
        isSelected ? styles.selected : ''
      }`}
      onClick={handleSelection}
    >
      {option.label}
    </div>
  )
}
