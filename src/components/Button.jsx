import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'

export const Button = ({children , to}) => {
  return (
    <div>
        <Link to={to}>
            <button>{children}</button>
        </Link> 
    </div>
  )
}

export default Button;