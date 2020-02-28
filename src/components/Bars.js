import React from 'react'

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
        <div className="bars__textUnder">Technology I Use</div>
      </div>
    </section>
  )
}

export default Bars
