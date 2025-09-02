// Styles
import styles from './styles.module.css'

export const Button = ({
  label,
  type = 'button',
  variant = 'default',
  fitWidth = false,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${
        styles[`btn--${variant}`]
      } ${fitWidth ? styles.fitWidth : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
