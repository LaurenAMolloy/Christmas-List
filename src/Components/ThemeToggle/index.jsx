import React from 'react'
import { useTheme } from '../../context/ThemeContext.jsx'
import Button from '../Button/index.jsx'

export default function Toggle() {
    const { themeToggle, theme } = useTheme()

    const handleClick = () => {
        themeToggle()
    }

  return (
    <Button primary rounded onClick={handleClick}>
      {theme ? "Christmas Mode" : "Grinch Mode"}
    </Button>
  )
}
