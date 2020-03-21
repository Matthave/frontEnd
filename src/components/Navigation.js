import React from 'react'
import { NavLink } from 'react-router-dom'
import smallLogo from '../IMG/NewLogoSmallTransparent.png'

class Navigation extends React.Component {

  logoClickHandle = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  componentDidMount() {
    const myLogo = document.querySelector('.nav__smallLogo');
    myLogo.addEventListener('mouseup', () => this.clickUp(myLogo))
    myLogo.addEventListener('touchend', () => this.clickUp(myLogo))

    const nav = document.querySelector('.nav');
    setTimeout(() => {
      nav.style.top = '0';
      nav.style.opacity = '1';
    }, 1750);
    console.log(nav)
  }

  clickUp = (myLogo) => {
    myLogo.style.transform = 'translateY(5px)'
    setTimeout(() => {
      myLogo.style.transform = 'translateY(0px)'
    }, 100);
  }

  render() {
    return (
      <nav className="nav">
        <ul className="nav__ul">
          <li className="nav__li"><NavLink className='nav__link' title='Portfolio' to='/portfolio'>Portfolio</NavLink></li>
          <NavLink to='/'><img className='nav__smallLogo' onClick={this.logoClickHandle} src={smallLogo} alt="MyLogo" /></NavLink>
          <li className="nav__li"><NavLink className='nav__link' title='Contact' to='/contact'>Contact</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
