import React from 'react'
import { NavLink } from 'react-router-dom'
import smallLogo from '../IMG/NewLogoSmallTransparent.png'

class Navigation extends React.Component {
  state = {
    navFlag: false,
    itemNavAboutMe: false,
    itemNavPortfolio: false,
    itemNavContact: false,
  }

  logoClickHandle = () => {
    this.scrollHeightMenu()
  }

  scrollHeightMenu = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight === 0 && this.state.navFlag === false && this.props.homePageMounted) {
      this.setState({
        navFlag: true,
        itemNavAboutMe: true,
      });

      setTimeout(() => {
        this.setState({
          itemNavPortfolio: true,
        })
      }, 200);

      setTimeout(() => {
        this.setState({
          itemNavContact: true,
        })
      }, 400);
      return
    } else if (scrollHeight === 0 && this.state.navFlag === true) {
      this.setState({
        navFlag: false,
        itemNavContact: false,
      });

      setTimeout(() => {
        this.setState({
          itemNavPortfolio: false,
        })
      }, 250);

      setTimeout(() => {
        this.setState({
          itemNavAboutMe: false,
        })
      }, 500);
      return
    } else if (scrollHeight > 0) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return
    }
  }

  componentDidMount() {
    const myLogo = document.querySelector('.nav__smallLogo');
    myLogo.addEventListener('mouseup', () => this.clickUp(myLogo))
    myLogo.addEventListener('touchend', () => this.clickUp(myLogo))

    document.addEventListener('scroll', () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight !== 0) {
        this.setState({
          navFlag: false,
          itemNavAboutMe: false,
          itemNavPortfolio: false,
          itemNavContact: false,
        })
      }
    })

    const nav = document.querySelector('.nav');
    setTimeout(() => {
      nav.style.top = '0';
      nav.style.opacity = '1';
    }, 1750);
  }

  clickUp = (myLogo) => {
    myLogo.style.transform = 'translateY(5px)'
    setTimeout(() => {
      myLogo.style.transform = 'translateY(0px)'
    }, 100);
  }

  render() {
    const classesBarsNav = ['barsNav'];
    const classesItemNavAboutMe = ['barsLi barsLi__aboutMe'];
    const classesItemNavPortfolio = ['barsLi barsLi__portfolio'];
    const classesItemNavContactMe = ['barsLi barsLi__contact'];

    if (this.state.barsNav) classesBarsNav.push('barsNav--showIt')
    if (this.state.itemNavAboutMe) classesItemNavAboutMe.push('barsLi__itemNavAboutMe')
    if (this.state.itemNavPortfolio) classesItemNavPortfolio.push('barsLi__itemNavPortfolio')
    if (this.state.itemNavContact) classesItemNavContactMe.push('barsLi__itemNavContact')

    return (
      <>
        <nav className="nav">
          <ul className="nav__ul">
            <li className="nav__li"><NavLink className='nav__link' title='Portfolio' to='/portfolio'>Portfolio</NavLink></li>
            <NavLink to='/'><img className='nav__smallLogo' onClick={this.logoClickHandle} src={smallLogo} alt="MyLogo" /></NavLink>
            <li className="nav__li"><NavLink className='nav__link' title='Contact' to='/contact'>Contact</NavLink></li>
          </ul>
        </nav>
        <nav className={classesBarsNav.join(' ')}>
          <ul className="barsUl">
            <NavLink to='AboutYourArtist'>
              <li className={classesItemNavAboutMe.join(' ')}>
                <div className="bars__item">
                  <div className='bars__text'>
                    About Your Artist - About Your Artist - About Your Artist - About Your Artist -
                    About Your Artist - About Your Artist - About Your Artist - About Your Artist -
                    About Your Artist - About Your Artist - About Your Artist - About Your Artist -
               </div>
                </div>
              </li>
            </NavLink>

            <NavLink to='portfolio'>
              <li className={classesItemNavPortfolio.join(' ')}>
                <div className="bars__item ">
                  <div className='bars__text bars__text--reverse'>
                    Portfolio - Portfolio - Portfolio - Portfolio - Portfolio - Portfolio -
                    Portfolio - Portfolio - Portfolio - Portfolio - Portfolio - Portfolio -
                    Portfolio - Portfolio - Portfolio - Portfolio - Portfolio - Portfolio -
                 </div>
                </div>
              </li>
            </NavLink>

            <NavLink to='contact'>
              <li className={classesItemNavContactMe.join(' ')}>
                <div className="bars__item">
                  <div className='bars__text'>
                    Contact Me - Contact Me - Contact Me - Contact Me - Contact Me -
                    Contact Me - Contact Me - Contact Me - Contact Me - Contact Me -
                    Contact Me - Contact Me - Contact Me - Contact Me - Contact Me -
               </div>
                </div>
              </li>
            </NavLink>

          </ul>
        </nav>
      </>
    )
  }
}

export default Navigation
