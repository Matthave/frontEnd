import React from 'react'
import Cube from '../pages/Cube'

function Header(props) {
  const classes = ['introLogo'];
  if (props.introLogoMoveUp) classes.push('introLogo--onTop')

  return (
    <section className="header">
      <Cube />
    </section>
  )
}

export default Header
