import React from 'react'
import useNavigation from '../../hooks/use-navigation';

export default function Link({ to, children }) {
  const { navigate, currentPath } = useNavigation();

    const handleClick = (e) => {
        e.preventDefault();

        //console.log('User navigating to', to)

        navigate(to)
    }
  return (
    <a onClick={handleClick} href={to}>{children}</a>
  )
}
