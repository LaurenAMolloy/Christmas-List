import React from 'react'
import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export default function Button({
    //Props passed to component
    //children = content
    //booleans = styles
    //rest = events
    children,
    primary,
    success,
    warning,
    danger,
    outline,
    rounded,
    border,
    ...rest
}) {

    //Classes
    //ClassNames takses an object
    //Keys are classnames
    //Values are booleans
    //If true that className is applied
    //ClassName is deciding which classname to apply
    const classes = twMerge(classNames('flex items-center justify-center px-3 py-1.5', {
            'bg-red-500 text-white hover:bg-red-700': primary,
            'bg-green-500 text-white hover:bg-green-700': success,
            'border-yellow-400 bg-yellow-400 text-white': danger,
            'rounded-full': rounded,
            'bg-white border border-red-500 text-red-500 hover:bg-red-500 hover:text-white': outline && primary,
            'bg-white border border-green-500 text-green-500 hover:bg-green-500 hover:text-white': outline && success,
            'bg-white border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white': outline && danger
    })
    );


  return (
    <button {...rest} className = {classes}>
        {children}
    </button>
  )
}
