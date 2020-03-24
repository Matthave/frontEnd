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
    const { homePageShowIt, homePageMounted } = this.state;
    return (
      <div className={homePageShowIt ? 'homePage homePage--showIt' : 'homePage'}>
        <Header />
        <Bars />
        <Gallery />
        <Bars2 />
        <Navigation style={{ diplay: 'none' }} homePageMounted={homePageMounted} />
      </div>
    )
  }
}

export default HomePage
