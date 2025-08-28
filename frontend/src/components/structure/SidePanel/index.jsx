// External Libraries
import React from 'react'

// Styles
import styles from './styles.module.css'

export const SidePanel = React.forwardRef(({ children, visible = false }, ref) => {
  return (
    <>
      <div className={`${styles.backdrop} ${visible ? styles.visible : styles.hidden}`} />
      <div ref={ref} className={`${styles.container} ${visible ? styles.visible : styles.hidden}`}>
        {children}
      </div>
    </>
  )
})
