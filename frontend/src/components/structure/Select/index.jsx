// External Libraries
import { useState } from 'react'

// Components
import { OptionsPanel } from './components/OptionsPanel'

// Assets
import { Chevron } from '../../../assets/icons/Chevron'

// Styles
import styles from './styles.module.css'

export const Select = ({
  title,
  errors,
  options,
  selectedOption,
  onOptionSelect,
}) => {
  // States
  const [isOpen, setIsOpen] = useState(false)

  // Functions
  function handlePanelClick() {
    setIsOpen(prev => !prev)
  }

  function handleOptionclick(option) {
    onOptionSelect(option)
    setIsOpen(false)
  }

  return (
    <div className={styles.container}>
      <h3 className={errors ? styles.errorTitle : ''}>
        {title}
      </h3>

      <div
        className={`${styles['selection-panel']} ${
          errors ? styles.errorBorder : ''
        }`}
        onClick={handlePanelClick}
      >
        {!!selectedOption.label ? (
          <p>{selectedOption.label}</p>
        ) : (
          <p
            className={
              styles['selection-panel-placeholder']
            }
          >
            Escolha uma opção...
          </p>
        )}
        <div
          className={isOpen ? '' : styles['chevron-down']}
        >
          <Chevron fill="#e5e7eb" />
        </div>
      </div>

      {errors && (
        <p className={styles.errorMessage}>{errors}</p>
      )}

      {isOpen ? (
        <div className={styles['panel-wrapper']}>
          <OptionsPanel
            options={options}
            selected={selectedOption.value}
            onOptionSelect={handleOptionclick}
          />
        </div>
      ) : null}
    </div>
  )
}
