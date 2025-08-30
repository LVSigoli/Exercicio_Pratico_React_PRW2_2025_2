// External Libraries
import { useEffect, useState, useRef } from 'react'

export function useSidePanel() {
  // Refs
  const sidePanelRef = useRef(null)

  // States
  const [view, setView] = useState('products')
  const [isVisible, setIsVisible] = useState(false)

  // Effects
  useEffect(() => {
    function handleClickOutside(event) {
      const hasSidePanelRef =
        sidePanelRef.current &&
        !sidePanelRef.current.contains(event.target)

      if (hasSidePanelRef) setIsVisible(false)
    }

    document.addEventListener(
      'mousedown',
      handleClickOutside
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      )
    }
  }, [])

  // Functions
  function togglePanel() {
    setIsVisible(prev => !prev)
  }

  function handleButtonClick() {
    togglePanel()
  }

  function openSidePanel(view) {
    setView(view)
    togglePanel()
  }

  return {
    view,
    isVisible,
    sidePanelRef,
    togglePanel,
    openSidePanel,
    handleButtonClick,
  }
}
