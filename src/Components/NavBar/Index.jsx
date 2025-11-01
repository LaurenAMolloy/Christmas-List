import React from 'react'

export default function NavBar({ currentPage, setCurrentPage }) {

    const handleClick = () => {
        setCurrentPage(window.EventTarget.pathname)
      }

  return (
    <>
        <div className="mb-5">
            <ul className="flex flex-row justify-between">
                <li onClick={() => handleClick("Home")}>Home</li>
                <li onClick={() => handleClick("WishList")}>Wish List</li>
                <li onClick={() => handleClick("FAQ")}>FAQ</li>
            </ul>
        </div>
    </>
  )
}
