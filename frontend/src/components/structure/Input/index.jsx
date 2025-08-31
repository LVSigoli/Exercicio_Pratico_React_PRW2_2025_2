// Styles
import styles from './styles.module.css'

export const Input = ({
  name,
  title,
  value,
  errors,
  placeholder,
  type = 'text',
  disabled = false,
  required = false,
  fitWidth = false,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles['header-wrapper']}>
        <p
          className={`${styles['input-name']} ${
            errors ? styles.error : ''
          }`}
        >
          {title}
        </p>

        {required ? (
          <span className={styles.required}>*</span>
        ) : null}
      </div>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${
          errors ? styles['error-input'] : styles.input
        } ${fitWidth ? styles.fitWidth : ''} ${
          disabled ? styles.disabled : ''
        }`}
      />

      {errors ? (
        <p className={`caption ${styles.error}`}>
          {errors}
        </p>
      ) : null}
    </div>
  )
}
