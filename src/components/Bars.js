import React from 'react'
import { NavLink } from 'react-router-dom'

class Bars extends React.Component {
  componentDidMount() {
    const textWelcome = document.querySelector('.textWelcome')
    textWelcome.addEventListener('mouseup', () => this.textUp(textWelcome))

    textWelcome.addEventListener('touchend', () => this.textUp(textWelcome))
  }
  textUp = (textWelcome, color) => {
    textWelcome.style.top = '43%'
    setTimeout(() => {
      textWelcome.style.top = '50%'
    }, 100);
  }



  render() {
    return (
      <section className="bars">
        <div className="bars__item reference">
          <div className='bars__text'>
            Thanks For Visit - M - Hello You -
            Thanks For Visit - M - Hello You -
            Thanks For Visit - M - Hello You -
        </div>
          <div className="bars__textUnder textWelcome">Welcome!</div>
        </div>
        <div className="bars__item">
          <div className='bars__text bars__text--reverse'>
            WebSite Designer - Web Developer - FrontEnd -
            WebSite Designer - Web Developer - FrontEnd -
            WebSite Designer - Web Developer - FrontEnd -
          </div>
          <NavLink className="bars__textUnder" to='AboutYourArtist'>About Your Artist</NavLink>
        </div>
      </section>
    )
  }
}

export default Bars
