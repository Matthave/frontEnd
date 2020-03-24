import React from 'react'

class Cube extends React.Component {
  state = {
    cubeWrapMoveUp: false,
    frontCube: false,
    blackCube: false,
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
    const { cubeWrapMoveUp, frontCube, blackCube, greyRightSide } = this.state;

    return (
      <div className={cubeWrapMoveUp ? 'cubeWrap cubeWrap--onPosition' : 'cubeWrap'}>
        <div className={frontCube ? 'cube cube--frontCube' : 'cube '}>
          <div className="cube__front">
            <div className={blackCube ? 'blackLeft blackLeft--on' : 'blackLeft'}></div>
          </div>
          <div className="cube__back"></div>
          <div className="cube__top"></div>
          <div className="cube__bottom"></div>
          <div className="cube__left"> </div>
          <div className={greyRightSide ? 'cube__right cube__right--on' : 'cube__right'}>
            <div className={blackCube ? 'blackRight blackRight--on' : 'blackRight'}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cube
