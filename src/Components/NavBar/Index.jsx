import React from 'react'
import Link from '../Link'

export default function NavBar() {
    const links = [
        {label: 'Home', path: '/'},
        {label: 'Wish List', path: '/wishlist'},
        {label: 'FAQ', path: '/faq'}
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
        <div className="nav sticky top-0 flex flex-row justify-between">
           {renderedLinks}
        </div>
    </>
  )
}
