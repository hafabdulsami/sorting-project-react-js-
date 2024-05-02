import React from 'react'
import './header.css'
import Logo from '../../assest/BlackLOGO.png'

const Header = () => {
  return (
    <header>
       <div className="head">
          <img src={Logo} alt="shs" className='logo'/>
       </div>
       <div className="main-heading">
          <h1>Sorting Algorithm</h1>
       </div>
       
    </header>
  )
}

export default Header