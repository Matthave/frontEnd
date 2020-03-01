import React from 'react'
import { NavLink } from 'react-router-dom'
import smallLogo from '../IMG/Logo contentSize.png'

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <NavLink to='/'><img className='nav__smallLogo' src={smallLogo} alt="MyLogo" /></NavLink>
        <li className="nav__li"><NavLink className='nav__link' exact to='/' >Hello!</NavLink></li>
        <li className="nav__li"><NavLink className='nav__link' to='/portfolio'>Portfolio</NavLink></li>
        <li className="nav__li"><NavLink className='nav__link' to='/contact'>Contact</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navigation
