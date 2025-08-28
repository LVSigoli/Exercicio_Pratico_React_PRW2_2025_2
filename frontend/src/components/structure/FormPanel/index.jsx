import React from 'react'
import styles from './styles.module.css'

export const FormPanel = React.forwardRef(({ view, visible = false }, ref) => {
  return (
    <div ref={ref} className={`${styles.container} ${visible ? styles.visible : styles.hidden}`}>
      {view}
    </div>
  )
})
