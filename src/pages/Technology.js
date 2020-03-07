import React from 'react'

class Technolog extends React.Component {
  state = {
    showTechnology: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showTechnology: true
      })
    }, 20);
  }
  render() {
    const classes = ['technology'];
    if (this.state.showTechnology) classes.push('technology--showIt')
    return (
      <section className={classes.join(' ')}>
        <div className='bars__itemTechnology'>
          <div className='bars__textTechnology'>
            Technology - Technology -
            Technology - Technology -
            Technology - Technology -
				</div>
        </div>
      </section>
    )
  }
}
export default Technolog
