import React from 'react'

class Portfolio extends React.Component {
  state = {
    showPortfolio: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showPortfolio: true,
      })
    }, 20);
  }
  render() {
    const classes = ['portfolio'];
    if (this.state.showPortfolio) classes.push('portfolio--showIt')
    return (
      <section className={classes.join(' ')}>
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
