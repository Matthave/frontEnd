import React from 'react'

class AboutM extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAboutMe: false,
    }

    this.currentIndexOfSection = -1;
    this.withHold = false;
  }

  componentWillUnmount() {
    document.body.style.overflow = 'visible';
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showAboutMe: true
      })
    }, 20);
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelector('.about').addEventListener('wheel', (event) => this.scrollDirection(event))
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = Math.floor(rect.bottom);
    const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
    return isVisible;
  }

  activeDots = () => {
    const liList = document.querySelectorAll('.navigationAbout__listItem');
    liList.forEach((li, index) => {
      if (index === this.currentIndexOfSection) {
        li.classList.add('navigationAbout__listItem--active')
      } else {
        li.classList.remove('navigationAbout__listItem--active')
      }
    })
  }

  clickHandleDots = (index) => {
    this.currentIndexOfSection = index;
    this.scrollToElement();
  }

  scrollDirection = (event) => {
    if (this.withHold) return;
    this.withHold = true;

    setTimeout(() => {
      this.withHold = false;
    }, 1000);

    const direction = event.deltaY > 0 ? 1 : -1;

    this.scroll(direction);
  }

  scroll = (direction) => {
    const sectionElements = document.querySelectorAll('.aboutM')

    if (direction === 1) {
      const isLastSection = this.currentIndexOfSection === sectionElements.length - 1;
      if (isLastSection) return;
    } else if (direction === -1) {
      const isFirstSection = this.currentIndexOfSection === 0;
      if (isFirstSection) return;
    }

    this.currentIndexOfSection += direction;

    this.scrollToElement();
  }

  scrollToElement = () => {
    this.activeDots();
    const sectionEle = document.querySelectorAll('.aboutM')
    sectionEle[this.currentIndexOfSection].scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  render() {
    const classes = ['about'];
    if (this.state.showAboutMe) classes.push('about--showIt')

    const sectionElements = [...document.querySelectorAll('.aboutM')];
    const liList = sectionElements.map((ele, index) => (
      <div key={index}>
        <li onClick={() => this.clickHandleDots(index)} className="navigationAbout__listItem"></li>
      </div>
    ))

    return (
      <section className={classes.join(' ')}>
        <div className='bars__itemAbout'>
          <div className='bars__textAbout'>
            About Me - About Me -
            About Me - About Me -
            About Me - About Me -
          </div>
        </div>
        <div className="aboutMWrap">
          <div className="aboutM aboutM--start">
            <h1 className='aboutM__text aboutM__text--start'>
              <strong className='aboutM__hi'>Hi,</strong>I am a FrontEnd developer who some time ago started the adventure
               with programming and creating the appearance of websites and web applications.
               I invite you to see my projects in the portfolio tab.
             </h1>
          </div>

          <div className="aboutM">
            <div className='aboutM__headingContainer'>
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
            <div className='aboutM__headingContainer'>
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
            <div className='aboutM__headingContainer'>
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
        <aside className="navigationAbout">
          <ul className="navigationAbout__list">
            {liList}
          </ul>
        </aside>
      </section>
    )
  }
}
export default AboutM
