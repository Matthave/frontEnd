import React from 'react'
import Form from './Form';
import linked from '../IMG/linkedIn96.png';
import gitHub from '../IMG/gitHubBlack.png';
import instagram from '../IMG/instagram96.png';
import emailIcon from '../IMG/email96.png';
import phoneIcon from '../IMG/phone96.png';

class Contact extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showContact: false,
      contactForm: false,
      contactToMe: false,
      iconUpLinked: false,
      iconUpGitHub: false,
      iconUpInsta: false,
      emailSent: false,
      showSuccess: false,
      textArea: '',
      fullName: '',
      phone: '',
      email: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.intervalIndex = 0;
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

    this.intervalIndex = setInterval(() => {
      this.iconUp();
    }, 5000)

    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  componentWillUnmount() {
    this.setState({
      showContact: false,
      contactForm: false,
      contactToMe: false,
      iconUpLinked: false,
      iconUpGitHub: false,
      iconUpInsta: false,
      emailSent: false,
      showSuccess: false,
    })
    clearInterval(this.intervalIndex)
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = () => {
    const templateId = 'MattHave';
    const { textArea, fullName, email, phone } = this.state;

    this.sendFeedback(templateId, { message_html: textArea, from_name: fullName, reply_to: email, phone: phone, to_name: 'Matthave' })
  }

  sendFeedback(templateId, variables) {
    const { from_name, reply_to, message_html } = variables
    if (from_name === '' && reply_to === '' && message_html === '') {
      this.setState({
        fullName: 'Hey! What About Me?',
        email: 'Ups...You forgot about something',
        textArea: 'Same here!',
      })
      return
    }
    if (from_name === '') {
      this.setState({
        fullName: 'Hey! What About Me?',
      })
      return
    }
    if (reply_to === '') {
      this.setState({
        email: 'Ups...You forgot about something'
      })
      return
    }
    if (message_html === '') {
      this.setState({
        textArea: 'You should complete it'
      })
      return
    }
    if (reply_to.length < 5) {
      this.setState({
        email: 'Your email address is suspiciously short..'
      })
      return
    }
    if (reply_to === 'Your email address should have @') {
      this.setState({
        email: "Still not valid email adress..."
      })
      return
    }
    if (reply_to.indexOf('@') === -1) {
      this.setState({
        email: 'Your email address should have @'
      })
      return
    }

    window.emailjs.send(
      'matthevr@gmail.com', templateId,
      variables
    ).then(res => {
      this.setState({
        textArea: '',
        fullName: '',
        phone: '',
        email: '',
      })
      this.setState({
        emailSent: true,
      })
      setTimeout(() => {
        this.setState({
          showSuccess: true,
        })
      }, 100);
    })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }

  render() {
    const { showContact, contactToMe, contactForm, iconUpLinked, iconUpGitHub, iconUpInsta, fullName, email, phone, textArea, emailSent, showSuccess } = this.state

    return (
      <section className={showContact ? 'contact contact--showIt' : 'contact'}>
        <div className='bars__itemContact'>
          <div className='bars__textContact'>
            Contact Me - Contact Me - Contact Me -
            Contact Me - Contact Me - Contact Me -
            Contact Me - Contact Me - Contact Me -
          </div>
        </div>

        <div className={contactToMe ? 'contact__wrapContactToMe contact__wrapContactToMe--onPosition' : 'contact__wrapContactToMe'}>
          <div className="contact__textWrap">
            <h2 className='contact__text'>
              If you want to get more information or contact me to start cooperation,
           write to me, I will definitely answer!</h2>
            <h2 className='contact__text'>I also encourage you to visit me on other platforms!</h2>
          </div>

          <div className="platform">
            <a href="https://www.linkedin.com/in/mateusz-raty%C5%84ski-7b5737198/"><img src={linked} alt="linkedInIcon" className={iconUpLinked ? 'platform__img platform__img--linkedUp' : 'platform__img'} /></a>
            <a href="https://github.com/Matthave"><img src={gitHub} alt="gitHubIcon" className={iconUpGitHub ? 'platform__img platform__img--gitHubUp' : 'platform__img'} /></a>
            <a href="https://www.instagram.com/i.mr.fit/"><img src={instagram} alt="instagramIcon" className={iconUpInsta ? 'platform__img platform__img--instaUp' : 'platform__img'} /></a>
          </div>

          <div className="contactDetails">
            <img src={emailIcon} alt="emailIcon" className="contactDetails__emailIcon" />
            <div className="contactDetails__email">matthevr@gmail.com</div>
            <img src={phoneIcon} alt="phoneIcon" className="contactDetails__phoneIcon" />
            <div className="contactDetails__phone">+48 609 404 940</div>
          </div>
        </div>
        {emailSent ? <div className={showSuccess ? 'emailSent emailSent--showIt' : 'emailSent'}>Email was sent successfully! <br /> Check your email box too</div> :
          <Form
            fullName={fullName}
            email={email}
            phone={phone}
            textArea={textArea}
            contactForm={contactForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        }
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
