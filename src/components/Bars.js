import React from 'react'
import { NavLink } from 'react-router-dom'

function Bars() {
  return (
    <section className="bars">
      <div className="bars__item">
        <div className='bars__text'>
          FrontEnd Developer - FrontEnd Developer -
          FrontEnd Developer - FrontEnd Developer -
          FrontEnd Developer - FrontEnd Developer -
        </div>
        <div className="bars__textUnder">FrontEnd Developer</div>
      </div>
      <div className="bars__item">
        <div className='bars__text bars__text--reverse'>
          WebSite Maker - WebSite Maker -
          WebSite Maker - WebSite Maker -
          WebSite Maker - WebSite Maker -
          </div>
        <div className="bars__textUnder">Web Developer</div>
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
