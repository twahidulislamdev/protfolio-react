import React, { Children } from 'react'

const Button = ({btnTxt, className}) => {
  return (
    <button className={` ${className} `}>{btnTxt}</button>
  )
}

export default Button