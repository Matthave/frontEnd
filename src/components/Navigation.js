import React from 'react'
import { NavLink } from 'react-router-dom'
import smallLogo from '../IMG/Logo contentSize.png'

class Navigation extends React.Component {

  logoClickHandle = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li"><NavLink className='nav__link' to='/portfolio'>Portfolio</NavLink></li>
          <NavLink to='/'><img className='nav__smallLogo' onClick={this.logoClickHandle} src={smallLogo} alt="MyLogo" /></NavLink>
          <li className="nav__li"><NavLink className='nav__link' to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
