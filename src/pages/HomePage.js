import React from 'react'
import Header from '../components/Header';
import Bars from '../components/Bars';
import Gallery from '../components/Gallery';
import Bars2 from '../components/Bars2';

class HomePage extends React.Component {
  state = {
    introLogoMoveUp: false
  }

  componentDidMount() {
    console.log('mount')
    setTimeout(() => {
      this.setState({
        introLogoMoveUp: true
      })
    }, 20)
  }

  render() {
    return (
      <>
        <Header introLogoMoveUp={this.state.introLogoMoveUp} />
        <Bars />
        <Gallery />
        <Bars2 />
      </>
    )
  }
}

export default HomePage
