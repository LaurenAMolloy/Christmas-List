import React from 'react'
import { changeTheme } from '../../store/slices/themeSlice'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/index.jsx'

export default function Toggle() {
    const mode = useSelector((state) => state.theme.mode)

    const handleClick = () => {
        dispatch(changeTheme(mode === "" ? "grinch" : ""))
    }

  return (
    <Button primary rounded onClick={handleClick}>
      {theme === "" ? 'grinch' : 'christmas'}
    </Button>
  )
}
