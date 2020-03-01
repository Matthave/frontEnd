import React from 'react'
import { NavLink } from 'react-router-dom'

function Bars() {
  return (
    <section className="bars">
      <div className="bars__item">
        <div className='bars__text'>
          Thanks For Visit - M - Hello You -
          Thanks For Visit - M - Hello You -
          Thanks For Visit - M - Hello You -
        </div>
        <div className="bars__textUnder">Welcome!</div>
      </div>
      <div className="bars__item">
        <div className='bars__text bars__text--reverse'>
          WebSite Maker - Web Developer - FrontEnd -
          WebSite Maker - Web Developer - FrontEnd -
          WebSite Maker - Web Developer - FrontEnd -
          </div>
        <div className="bars__textUnder">About Your Artist</div>
      </div>
      <div className="bars__item">
        <div className='bars__text'>
          JavaScript - React - SASS - CSS -
          JavaScript - React - SASS - CSS -
          JavaScript - React - SASS - CSS -
        </div>
        <NavLink className="bars__textUnder" to='Technology'>Technology I Use</NavLink>
      </div>
    </section>
  )
}

export default Bars
