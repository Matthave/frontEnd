import React from 'react'
import smallLogo from '../IMG/NewLogoSmallTransparent.png'

function Footer() {
  return (
    <footer className="footer">
      <h3 className='footer__text'>Copyright © 2020 MattHave | Created: MattHave</h3>
      <img src={smallLogo} alt="My Small Logo M" className="footer__img" />
    </footer>
  )
}

export default Footer
