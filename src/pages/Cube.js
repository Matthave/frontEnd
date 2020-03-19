import React from 'react'

class Cube extends React.Component {
  state = {
    cubeWrapMoveUp: false,
    frontCube: false,
    blacCube: false,
    greyRightSide: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        frontCube: true,
        cubeWrapMoveUp: true,
      })
    }, 400);

    setTimeout(() => {
      this.setState({
        blackCube: true,
        greyRightSide: true,
      })
    }, 1000);
  }

  render() {
    const classesCubeWrap = ['cubeWrap'];
    if (this.state.cubeWrapMoveUp) classesCubeWrap.push('cubeWrap--onPosition')

    const classesCube = ['cube'];
    if (this.state.frontCube) classesCube.push('cube--frontCube');

    const classesBlackLeft = ['blackLeft'];
    if (this.state.blackCube) classesBlackLeft.push('blackLeft--on');

    const classesBlackRight = ['blackRight'];
    if (this.state.blackCube) classesBlackRight.push('blackRight--on');

    const classesGrey = ['cube__right'];
    if (this.state.greyRightSide) classesGrey.push('cube__right--on');


    return (
      <div class={classesCubeWrap.join(' ')}>
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
