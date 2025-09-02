// Components
import { Option } from '../Options'
import { EmpetyMessage } from './components/EmptyMessage'

// Styles
import styles from './styles.module.css'

export const OptionsPanel = ({
  options,
  selected,
  onOptionSelect,
}) => {
  // Functions
  function renderOptions() {
    return options?.map(option => (
      <Option
        key={option.value}
        option={option}
        isSelected={selected === option.value}
        onClick={onOptionSelect}
      />
    ))
  }

  return (
    <div className={styles.container}>
      {!options?.length ? (
        <EmpetyMessage />
      ) : (
        renderOptions()
      )}
    </div>
  )
}
