// Styles
import styles from './styles.module.css'

export const Button = ({ label, variant = 'default', onClick }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  )
}
