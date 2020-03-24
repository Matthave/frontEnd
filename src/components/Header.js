import React from 'react'
import Cube from '../pages/Cube'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.scroll = this.scroll.bind(this)
  }
  state = {
    arrowDown: false,
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scroll)
    setTimeout(() => {
      this.setState({
        arrowDown: true,
      })
    }, 2500);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scroll)
  }

  scroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight === 0) {
      setTimeout(() => {
        this.setState({
          arrowDown: true,
        })
      }, 1000);
    } else if (scrollHeight > 0) {
      this.setState({
        arrowDown: false,
      })
    }
  }

  render() {
    return (
      <section className="header">
        <Cube />
        {this.state.arrowDown ? <div className="arrowDown"><i className="fas fa-chevron-down"></i></div> : null}

      </section>
    )
  }
}

export default Header
