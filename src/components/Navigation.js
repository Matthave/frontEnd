import React from 'react'
import smallLogo from '../IMG/Logo contentSize.png'

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__ul">
        <img className='nav__smallLogo' src={smallLogo} alt="MyLogo" />
        <li className="nav__li">Hello!</li>
        <li className="nav__li">About 'M'</li>
        <li className="nav__li">Portfolio</li>
        <li className="nav__li">Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation
