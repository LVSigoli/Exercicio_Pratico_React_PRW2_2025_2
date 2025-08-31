// Components
import { Option } from '../Options'

// Styles
import styles from './styles.module.css'

export const OptionsPanel = ({
  options,
  selected,
  onOptionSelect,
}) => {
  return (
    <div className={styles.container}>
      {options?.map(option => (
        <Option
          key={option.value}
          option={option}
          isSelected={selected === option.value}
          onClick={onOptionSelect}
        />
      ))}
    </div>
  )
}
