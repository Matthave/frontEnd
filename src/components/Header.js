import React from 'react'

function Header(props) {
  const classes = ['introLogo'];
  if (props.introLogoMoveUp) classes.push('introLogo--onTop')

  return (
    <section className="header">
      <div className={classes.join(' ')}>
      </div>
    </section>
  )
}

export default Header
