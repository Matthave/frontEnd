import React from 'react'
import { NavLink } from 'react-router-dom'

class AboutM extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAboutMe: false,
    }
    this.sectionElements = document.querySelectorAll('.aboutM');
    this.sectionArray = [...this.sectionElements];
    this.currentIndexOfSection = this.sectionArray.findIndex(this.isScrolledIntoView);
    this.currentIndexOfSection = Math.max(this.currentIndexOfSection, 0);
    this.withHold = false;
    this.initialY = null;
    this.initialX = null;

    this.startTouch = this.startTouch.bind(this)
    this.moveTouch = this.moveTouch.bind(this)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showAboutMe: true
      })
    }, 20);
    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, behavior: 'auto' });

    document.addEventListener('wheel', (event) => this.scrollDirection(event))
    document.addEventListener('touchstart', this.startTouch, false);
    document.addEventListener('touchmove', this.moveTouch, false);

    document.addEventListener('swipeUp', () => this.scroll(1));
    document.addEventListener('swipeDown', () => this.scroll(-1));
    this.sectionElements = document.querySelectorAll('.aboutM')
    this.clickHandleDots(0);
    this.activeDots();
  }


  componentWillUnmount() {
    document.body.style.overflow = 'visible';
    document.removeEventListener('touchstart', this.startTouch, false);
    document.removeEventListener('touchmove', this.moveTouch, false);
  }


  startTouch(event) {
    event.preventDefault();
    this.initialX = event.touches[0].clientX;
    this.initialY = event.touches[0].clientY;
  }

  moveTouch(event) {
    if (!this.initialX || !this.initialY) return;
    const currentX = event.touches[0].clientX;
    const currentY = event.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        document.dispatchEvent(new Event('swipeLeft'))
      } else {
        document.dispatchEvent(new Event('swipeRight'))
      }
    } else {
      if (diffY > 0) {
        document.dispatchEvent(new Event('swipeUp'))
      } else {
        document.dispatchEvent(new Event('swipeDown'))
      }
    }

    this.initialX = null;
    this.initialY = null;
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
    const aboutMeElements = document.querySelectorAll('.aboutM')
    liList.forEach((li, index) => {
      if (index === this.currentIndexOfSection) {
        li.classList.add('navigationAbout__listItem--active')
      } else {
        li.classList.remove('navigationAbout__listItem--active')
      }
    })

    aboutMeElements.forEach((element, index) => {
      if (index === this.currentIndexOfSection) {
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateX(0px)'
        }, 500);
      } else {
        element.style.opacity = '0%';
        setTimeout(() => {
          element.style.transform = 'translateX(-100px)'
        }, 200);
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


    if (direction === 1) {
      const isLastSection = this.currentIndexOfSection === this.sectionElements.length - 1;
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
    this.sectionElements[this.currentIndexOfSection].scrollIntoView({
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
            completed in my <strong> <NavLink to='/portfolio'>portfolio</NavLink></strong>.
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

          <div className="aboutM">
            <div className='aboutM__headingContainer'>
              <p className='aboutM__title'>Techniques</p>
              <p className="aboutM__titleFront">Skills</p>
            </div>
            <div className='aboutM__text'>
              <ul className="aboutM__icons">
                <li><i className="fab fa-js"></i></li>
                <li><i className="fab fa-react"></i></li>
                <li><i className="fas fa-code"></i></li>
                <li><i className="fab fa-css3"></i></li>
                <li><i className="fab fa-sass"></i></li>
              </ul>

              <ul className="aboutM__nameIcons">
                <li className="aboutM__iconsItem">Java Script</li>
                <li className="aboutM__iconsItem">React.js</li>
                <li className="aboutM__iconsItem">HTML5</li>
                <li className="aboutM__iconsItem">CSS3</li>
                <li className="aboutM__iconsItem">SASS</li>
                <li className="aboutM__iconsItem">jQuery</li>
                <li className="aboutM__iconsItem">AJAX</li>
                <li className="aboutM__iconsItem">NPM</li>
                <li className="aboutM__iconsItem">Node.js</li>
                <li className="aboutM__iconsItem">Express</li>
                <li className="aboutM__iconsItem">MongoDB</li>
                <li className="aboutM__iconsItem">Git</li>
              </ul>
            </div>
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
