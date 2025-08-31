// External Libraries
import { useState } from 'react'

// Components
import { OptionsPanel } from './components/OptionsPanel'

// Assets
import { Chevron } from '../../../assets/icons/Chevron'

// Styles
import styles from './styles.module.css'

export const Select = ({
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
      <div
        className={styles['selection-panel']}
        onClick={handlePanelClick}
      >
        {!!selectedOption ? (
          <p>{selectedOption.label}</p>
        ) : (
          <p
            className={
              styles['selection-panel-placeholder']
            }
          >
            Esolha uma opção...
          </p>
        )}
        <div
          className={isOpen ? '' : styles['chevron-down']}
        >
          <Chevron fill="#e5e7eb" />
        </div>
      </div>

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
