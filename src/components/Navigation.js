import React from 'react'
import { NavLink } from 'react-router-dom'
import smallLogo from '../IMG/NewLogoSmallTransparent.png'

class Navigation extends React.Component {

  logoClickHandle = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  componentDidMount() {
    const myLogo = document.querySelector('.nav__smallLogo');
    myLogo.addEventListener('mousedown', () => this.clickDown(myLogo))
    myLogo.addEventListener('mouseup', () => this.clickUp(myLogo))
  }

  clickDown = (myLogo) => {
    myLogo.style.transform = 'translateY(5px)'
  }

  clickUp = (myLogo) => {
    myLogo.style.transform = 'translateY(0)'
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
