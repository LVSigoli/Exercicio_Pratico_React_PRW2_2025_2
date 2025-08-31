// External Libraries
import { useEffect, useState, useRef } from 'react'

// Utils
import { FORM_TYPES } from '../../../../../utils'

export function useSidePanel() {
  // Refs
  const sidePanelRef = useRef(null)

  // States
  const [isVisible, setIsVisible] = useState(false)
  const [view, setView] = useState(FORM_TYPES.PRODUCT)

  // Effects
  useEffect(() => {
    const body = document.body
    body.style.overflow = isVisible ? 'hidden' : 'auto'
  }, [isVisible])

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
