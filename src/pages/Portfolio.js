import React from 'react'

const myWorks = [
  { id: 1, title: 'Personal Trainer Site', class: '__trainer', link: 'https://matthave.github.io/PersonalTrainer/' },
  { id: 2, title: 'KyoKushin Site', class: '__kyokushin', link: 'https://matthave.github.io/Kyokushin/' },
  { id: 3, title: 'Christmas Draw', class: '__christmas', link: 'http://www.christmasdraw.pl/' },
  { id: 4, title: 'My CvOnline vol.1', class: '__cvVol1', link: 'https://matthave.github.io/lookAtThisAwesomeCv/' },
  { id: 5, title: 'My CvOnline vol.2', class: '__cvVol2', link: 'https://matthave.github.io/cvOnline/' }
]

class Portfolio extends React.Component {
  state = {
    showPortfolio: false,
    hexOnPosition: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showPortfolio: true,
      })
    }, 20);

    setTimeout(() => {
      this.setState({
        hexOnPosition: true,
      })
    }, 100);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }
  render() {
    const classes = ['portfolio'];
    if (this.state.showPortfolio) classes.push('portfolio--showIt')

    let hexClasses = [''];
    if (this.state.hexOnPosition) hexClasses = 'work--onPosition';

    const works = myWorks.map((work) => (
      <a href={work.link} key={work.id} className={`work work${work.class} ${hexClasses}`}>
        <div className="cover"><h2 className="work__text">{work.title}</h2></div>
      </a>
    ))

    return (
      <section className={classes.join(' ')}>
        <div className='bars__itemPortfolio'>
          <div className='bars__textPortfolio'>
            Portfolio - Portfolio -
            Portfolio - Portfolio -
            Portfolio - Portfolio -
        </div>
        </div>
        <section className="worksContainer">
          {works}
        </section>
        <div className='bars__itemPortfolio'>
          <div className='bars__textPortfolio'>
            Portfolio - Portfolio -
            Portfolio - Portfolio -
            Portfolio - Portfolio -
        </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
