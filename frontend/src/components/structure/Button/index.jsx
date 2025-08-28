// Styles
import styles from './styles.module.css'

export const Button = ({ label, variant = 'default', fitWidth = false, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]} ${fitWidth ? styles.fitWidth : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
