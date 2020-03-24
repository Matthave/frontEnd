import React from 'react'
import { NavLink } from 'react-router-dom'

function AboutMeSection(props) {
  return (
    <div className="aboutM">
      <div className='aboutM__headingContainer'>
        <p className='aboutM__title'>{props.title}</p>
        <p className="aboutM__titleFront" title={props.frontTitle}>{props.frontTitle}</p>
      </div>
      <h3 className='aboutM__text'>
        {props.text}{props.index === 0 ? <strong><NavLink to='/portfolio'>portfolio</NavLink></strong> : null}
      </h3>
    </div>
  )
}

export default AboutMeSection
