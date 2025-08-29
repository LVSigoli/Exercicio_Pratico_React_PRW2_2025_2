// External Libraries
import { useEffect, useState, useRef } from 'react'

export function useRegistratinPage() {
  // Refs
  const sidePanelRef = useRef(null)

  // States
  const [view, setView] = useState('products')
  const [isVisible, setIsVisible] = useState(false)

  // Effects
  useEffect(() => {
    function handleClickOutside(event) {
      const hasSidePanelRef =
        sidePanelRef.current && !sidePanelRef.current.contains(event.target)

      if (hasSidePanelRef) setIsVisible(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Functions
  function toggleVisivible() {
    setIsVisible(prev => !prev)
  }

  function handleButtonClick() {
    toggleVisivible()
  }

  return { sidePanelRef, isVisible, handleButtonClick }
}
