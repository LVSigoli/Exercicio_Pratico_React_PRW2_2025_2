import styles from './styles.module.css'

export const Input = ({
  title,
  label,
  value,
  placeholder,
  type = 'text',
  fitWidth = false,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles['input-name']}>{title}</p>

      <input
        type={type}
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${fitWidth ? styles.fitWidth : ''}`}
      />
    </div>
  )
}
