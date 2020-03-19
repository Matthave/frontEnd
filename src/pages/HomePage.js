import React from 'react'
import Header from '../components/Header';
import Bars from '../components/Bars';
import Gallery from '../components/Gallery';
import Bars2 from '../components/Bars2';

class HomePage extends React.Component {
  state = {
    homePageShowIt: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        homePageShowIt: true
      })
    }, 20)

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  render() {
    const classes = ['homePage'];
    if (this.state.homePageShowIt) classes.push(' homePage--showIt')
    return (
      <div className={classes.join(' ')}>
        <Header />
        <Bars />
        <Gallery />
        <Bars2 />
      </div>
    )
  }
}

export default HomePage
