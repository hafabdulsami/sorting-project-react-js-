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
          <p className='initial-line'>A Sorting Algorithm is used to rearrange a given array or list of elements according to a comparison operator on the elements. The comparison operator is used to decide the new order of elements in the respective data structure. Different type of algorithm are given below:</p>
       </div>
       
    </header>
  )
}

export default Header