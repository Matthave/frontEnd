import React from 'react'
import myLogo from '../IMG/Logo contentSize.png'

class AboutM extends React.Component {
  state = {
    showAboutMe: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showAboutMe: true
      })
    }, 20);
  }

  render() {
    const classes = ['about'];
    if (this.state.showAboutMe) classes.push('about--showIt')
    return (
      <section className={classes.join(' ')}>
        <div className='bars__itemAbout'>
          <div className='bars__textAbout'>
            About Me - About Me -
            About Me - About Me -
            About Me - About Me -
          </div>
        </div>
        <div className="welcome">
          <h2 className="welcome__text">
            <strong>Hi,</strong>
            I am a FrontEnd developer who some time ago started
             the adventure with programming and creating the appearance
              of websites and web applications.
          </h2>
        </div>
        <div className="aboutMWrap">
          <div className="aboutM">
            <div className='aboutM__headingCointainer'>
              <img src={myLogo} alt="hexPassionWithMyLogo" className="aboutM__img" />
              <p className='aboutM__title'>passion</p>
              <p className="aboutM__titleFront">Project</p>
            </div>
            <h3 className='aboutM__text'>
              At the moment I create my own projects on which I use knowledge
              that I constantly expand every day.
              It doesn't bother me, on the contrary,
              it gives me a lot of satisfaction.
              I always try to be a project to do my best, realizing the importance of the smallest detail.
              You can see some of my projects that have already been
            completed in my <strong>portfolio</strong>.
  
          </h3>
          </div>

          <div className="aboutM">
            <div className='aboutM__headingCointainer'>
              <img src={myLogo} alt="hexPassionWithMyLogo" className="aboutM__img" />
              <p className='aboutM__title'>heart</p>
              <p className="aboutM__titleFront">I love IT</p>
            </div>
            <h3 className='aboutM__text'>
              I love working with interesting projects. During my own projects, when I have a free hand and everything "comes out in the wash", I can experiment and empower my creativity and imagination.
              Thanks to the fact that it is something that I love, I can work for hours without feeling the passing of time.
              That's why I live my belief
              "Do what you love and you'll never work a day in your life."
          </h3>
          </div>

          <div className="aboutM">
            <div className='aboutM__headingCointainer'>
              <img src={myLogo} alt="hexPassionWithMyLogo" className="aboutM__img" />
              <p className='aboutM__title'>time</p>
              <p className="aboutM__titleFront">Perfection</p>
            </div>
            <h3 className='aboutM__text'>
              I pay great attention to details.
              This is not even because of the desire to make the best project
              possible, but I just can't get past any aspect that requires
              more work or correction. It is a part of the work that
              requires a lot of time, but as the saying goes "the devil
              is in the details" and I feel much better when everything
              is in the highest order. I couldn't sleep without it.
          </h3>
          </div>
        </div>
      </section>
    )
  }
}
export default AboutM
