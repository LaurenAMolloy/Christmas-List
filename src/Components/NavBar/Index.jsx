import React from 'react'
import Link from '../Link'
import ThemeToggle from '../ThemeToggle'

export default function NavBar() {
    const links = [
        {label: 'Home', path: '/'},
        {label: 'Wish List', path: '/wishlist'},
        {label: 'FAQ', path: '/faq'},
        {label: 'Table', path: '/table'}
    ]

    const renderedLinks = links.map((link) => {
        return (
        <Link 
          key={link.label} 
          to={link.path}
          className="text-black">
            {link.label}
        </Link>
        )
    });
    
  return (
    <>
        <div className="nav sticky top-0 flex flex-row justify-evenly">
           <div className="logo"></div>
           <div className="links flex flex-row">
           {renderedLinks}
           <ThemeToggle />
           </div>
        </div>
    </>
  )
}
