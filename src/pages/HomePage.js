import React from 'react'
import Header from '../components/Header';
import Bars from '../components/Bars';
import Gallery from '../components/Gallery';
import Bars2 from '../components/Bars2';
import Navigation from '../components/Navigation'

class HomePage extends React.Component {
  state = {
    naviShow: false,
    homePageMounted: true,
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

  componentWillUnmount() {
    this.setState({
      homePageMounted: false,
    })
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
        <Navigation style={{ diplay: 'none' }} homePageMounted={this.state.homePageMounted} />
      </div>
    )
  }
}

export default HomePage
