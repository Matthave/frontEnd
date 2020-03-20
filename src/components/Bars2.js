import React from 'react';
import { NavLink } from 'react-router-dom';

function Bars2() {
  return (
    <section className="bars">
      <div className='bars__item'>
        <div className='bars__text'>
          Portfolio - Portfolio - Portfolio -
          Portfolio - Portfolio - Portfolio -
          Portfolio - Portfolio - Portfolio -
          </div>
        <NavLink className="bars__textUnder" to='Portfolio'>Portfolio</NavLink>
      </div>
      <div className='bars__item'>
        <div className='bars__text bars__text--reverse'>
          Contact Me - Contact Me - Contact Me -
          Contact Me - Contact Me - Contact Me -
          Contact Me - Contact Me - Contact Me -
          </div>
        <NavLink className="bars__textUnder" to='Contact'>Contact Me</NavLink>
      </div>
    </section>
  )
}

export default Bars2
