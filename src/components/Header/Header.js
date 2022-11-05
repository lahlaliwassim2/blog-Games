import './Header.css'
import React from 'react'

const Header = (props) => {
  return (
    <div style={{color:props.color}}>{props.text}</div>
  )
}

export default Header