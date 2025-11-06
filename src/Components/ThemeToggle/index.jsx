import React from 'react'
import { changeTheme } from '../../store/slices/themeSlice'
import { useSelector, useDispatch } from 'react-redux'
import Button from '../Button/index.jsx'

export default function Toggle() {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(changeTheme(theme === "" ? "grinch" : ""))
    }

  return (
    <Button primary rounded onClick={handleClick}>
      {theme === "" ? 'grinch' : 'christmas'}
    </Button>
  )
}
