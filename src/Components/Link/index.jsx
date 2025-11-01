import React from 'react'

export default function Link({ to }) {
    const handleClick = (e) => {
        e.preventDefault();

        console.log('User navigating to', to)
    }
  return (
    <a onClick={handleClick} href={to}></a>
  )
}
