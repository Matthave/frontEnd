import React from 'react'
import smallLogo from '../IMG/Logo contentSize.png'

function Footer() {
  return (
    <footer className="footer">
      <h3 className='footer__text'>Copyright © 2020 MattHave | Created: MattHave</h3>
      <img src={smallLogo} alt="" className="footer__img" />
    </footer>
  )
}

export default Footer
