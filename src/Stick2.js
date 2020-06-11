import React from 'react'

export default class Stick2 extends React.Component {
  state = {
    stickX: 700,
    stickY: 10,
    dx: 0,
    dy: 4,
  }
  componentDidMount() {
    this.ticker = setInterval(() => {
      this.tick()
    }, 50)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.stickX > length - stickSize) {
      this.setState({
        dx: 0,                      //shoudnt need X axis? ONLY Y-----
        stickX: length - stickSize,
      })
    }
    if (prevState.stickX < 0 ) {
      this.setState({
        dx: 0,
        stickX: 0,
      })
    }
    if (prevState.stickY > length - stickSize) {
      this.setState({
        dy: -4,
        stickY: length - stickSize,
      })
    }
    if (prevState.stickY < 1 ) {
      this.setState({
        dy: 4,
        stickY: 1,
      })
    }
  }
  tick() {
    const { stickX, stickY, dx, dy } = this.state
    const newStickX = stickX + dx
    const newStickY = stickY + dy
    this.setState({
      stickX: newStickX,
      stickY: newStickY,
    })
  }
  render() {
    const { stickX, stickY } = this.state
    return (
      <div style={stickStyles}>
        <div style={{...stickStyles, top: stickY, left: stickX}}></div>
      </div>
    )
  }
}
const length = 680
const stickSize = 102
const stickStyles = {
  position: "absolute",
  background: "white",
  width: "20px",
  height: "100px",
}