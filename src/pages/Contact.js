import React from 'react'
import linked from '../IMG/linkedIn96.png';
import gitHub from '../IMG/gitHubBlack.png';
import instagram from '../IMG/instagram96.png';
import emailIcon from '../IMG/email96.png';
import phoneIcon from '../IMG/phone96.png';

class Contact extends React.Component {
  state = {
    showContact: false,
    contactForm: false,
    contactToMe: false,
    iconUpLinked: false,
    iconUpGitHub: false,
    iconUpInsta: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showContact: true,
      })
    }, 20);

    setTimeout(() => {
      this.setState({
        contactForm: true,
      })
    }, 40)
    setTimeout(() => {
      this.setState({
        contactToMe: true,
      })
    }, 600)

    setInterval(() => {
      this.iconUp();
    }, 5000)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  iconUp = () => {
    this.setState({
      iconUpLinked: true,
    })
    this.iconDown();

    setTimeout(() => {
      this.setState({
        iconUpGitHub: true,
      })
    }, 100);

    setTimeout(() => {
      this.setState({
        iconUpInsta: true,
      })
    }, 200);
  }

  iconDown = () => {
    setTimeout(() => {
      this.setState({
        iconUpLinked: false,
      })
    }, 350)

    setTimeout(() => {
      this.setState({
        iconUpGitHub: false,
      })
    }, 450);

    setTimeout(() => {
      this.setState({
        iconUpInsta: false,
      })
    }, 550);
  }

  render() {
    const classes = ['contact'];
    if (this.state.showContact) classes.push('contact--showIt')

    const classesDetails = ['contact__wrapContactToMe']
    if (this.state.contactToMe) classesDetails.push('contact__wrapContactToMe--onPosition');

    const classesForm = ['form'];
    if (this.state.contactForm) {
      classesForm.push('form--onPosition');
    }

    const classesIconLinked = ['platform__img'];
    if (this.state.iconUpLinked) classesIconLinked.push('platform__img--linkedUp')

    const classesIconGitHub = ['platform__img'];
    if (this.state.iconUpGitHub) classesIconGitHub.push('platform__img--gitHubUp')

    const classesIconInsta = ['platform__img'];
    if (this.state.iconUpInsta) classesIconInsta.push('platform__img--instaUp')

    return (
      <section className={classes.join(' ')}>
        <div className='bars__itemContact'>
          <div className='bars__textContact'>
            Contact Me - Contact Me - Contact Me -
            Contact Me - Contact Me - Contact Me -
            Contact Me - Contact Me - Contact Me -
          </div>
        </div>

        <div className={classesDetails.join(' ')}>
          <div className="contact__textWrap">
            <h2 className='contact__text'>
              If you want to get more information, contact me to start cooperation,
           write to me, I will definitely answer!</h2>
            <h2 className='contact__text'>I also encourage you to visit me on other platforms!</h2>
          </div>

          <div className="platform">
            <a href="https://www.linkedin.com/in/mateusz-raty%C5%84ski-7b5737198/"><img src={linked} alt="linkedInIcon" className={classesIconLinked.join(' ')} /></a>
            <a href="https://github.com/Matthave"><img src={gitHub} alt="gitHubIcon" className={classesIconGitHub.join(' ')} /></a>
            <a href="https://www.instagram.com/i.mr.fit/"><img src={instagram} alt="instagramIcon" className={classesIconInsta.join(' ')} /></a>
          </div>

          <div className="contactDetails">
            <img src={emailIcon} alt="emailIcon" className="contactDetails__emailIcon" />
            <div className="contactDetails__email">matthevr@gmail.com</div>
            <img src={phoneIcon} alt="phoneIcon" className="contactDetails__phoneIcon" />
            <div className="contactDetails__phone">+48 609 404 940</div>
          </div>
        </div>

        <form className={classesForm.join(' ')} action="">
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
        <div className='bars__itemContact'>
          <div className='bars__textContact'>
            Contact Me - Contact Me - Contact Me -
            Contact Me - Contact Me - Contact Me -
            Contact Me - Contact Me - Contact Me -
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
