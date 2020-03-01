import React from 'react'
import linked from '../IMG/linkedIn96.png';
import gitHub from '../IMG/gitHubBlack.png';
import instagram from '../IMG/instagram96.png';

class Contact extends React.Component {
  state = {
    showContact: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showContact: true,
      })
    }, 20);
  }
  render() {
    const classes = ['contact'];
    if (this.state.showContact) classes.push('contact--showIt')
    return (
      <section className={classes.join(' ')}>
        <div className='bars__itemContact'>
          <div className='bars__textContact'>
            Contact Me - Contact Me - Contact Me -
            Contact Me - Contact Me - Contact Me -
            Contact Me - Contact Me - Contact Me -
          </div>
        </div>

        <div className="contact__wrapContactToMe">
          <div className="contact__textWrap">
            <h2 className='contact__text'>
              If you want to get more information, contact me to start cooperation,
           write to me, I will definitely answer!</h2>
            <h2 className='contact__text'>I also encourage you to visit me on other platforms!</h2>
          </div>

          <div className="platform">
            <img src={linked} alt="" className="platform__img" />
            <img src={gitHub} alt="" className="platform__img" />
            <img src={instagram} alt="" className="platform__img" />
          </div>

          <div className="contactDetails">
            <div className="contactDetails__email">matthevr@gmail.com</div>
            <div className="contactDetails__phone">+48 609 404 940</div>
          </div>
        </div>

        <form className='form' action="">
          <label className='form__label' htmlFor="Name">Full Name*
          <input id='Name' className='form__input' type="text" required />
          </label>

          <label className='form__label' htmlFor="">Email Adress*
            <input className='form__input' type="text" required />
          </label>

          <label className='form__label' htmlFor="">Phone*
            <input className='form__input' type="text" required />
          </label>

          <label className='form__label' htmlFor="">What Can I do for You?
            <textarea className='form__textArea'></textarea>
          </label>
          <div className='form__btnContainer'>
            <button className='form__btn'>SEND</button>
            <button className="form__btnCopy"></button>
            <button className="form__btnCopy2"></button>
          </div>
        </form>
      </section>
    )
  }
}

export default Contact
