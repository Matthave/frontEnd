import React from 'react'

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
      </section>
    )
  }
}

export default Contact
