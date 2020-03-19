import React from 'react'

class Cube extends React.Component {
  state = {
    frontCube: false,
    blacCube: false,
    greyRightSide: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        frontCube: true,
      })
    }, 400);

    setTimeout(() => {
      this.setState({
        blackCube: true,
      })
    }, 1000);

    setTimeout(() => {
      this.setState({
        greyRightSide: true,
      })
    }, 1500);

  }

  render() {
    const classesCube = ['cube'];
    if (this.state.frontCube) classesCube.push('cube--frontCube');

    const classesBlackLeft = ['blackLeft'];
    if (this.state.blackCube) classesBlackLeft.push('blackLeft--on');

    const classesBlackRight = ['blackRight'];
    if (this.state.blackCube) classesBlackRight.push('blackRight--on');

    const classesGrey = ['cube__right'];
    if (this.state.greyRightSide) classesGrey.push('cube__right--on');


    return (
      <div class="wrap">
        <div class={classesCube.join(' ')}>
          <div class="cube__front">
            <div className={classesBlackLeft.join(' ')}></div>
          </div>
          <div class="cube__back"></div>
          <div class="cube__top"></div>
          <div class="cube__bottom"></div>
          <div class="cube__left"> </div>
          <div class={classesGrey.join(' ')}>
            <div className={classesBlackRight.join(' ')}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cube
