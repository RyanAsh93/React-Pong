import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react'
import Stick1 from "./Stick1"
import Stick2 from "./Stick2"

export default class App extends React.Component {
  state = {
    squareX: 0,
    squareY: 10,
    dx: 5,
    dy: 4,
  };
  componentDidMount() {
    this.ticker = setInterval(() => {
      this.tick();
    }, 50);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.squareX > length - squareSize) {
      this.setState({
        dx: -5,
        squareX: length - squareSize,
      });
    }
    if (prevState.squareX < 1) {
      console.log(prevState.squareX);
      this.setState({
        dx: 5,
        squareX: 1,
      });
    }
    if (prevState.squareY > length - squareSize) {
      this.setState({
        dy: -4,
        squareY: length - squareSize,
      });
    }
    if (prevState.squareY < 1) {
      this.setState({
        dy: 4,
        squareY: 1,
      });
    }
  }
  tick() {
    const { squareX, squareY, dx, dy } = this.state;
    const newSquareX = squareX + dx;
    const newSquareY = squareY + dy;
    this.setState({
      squareX: newSquareX,
      squareY: newSquareY,
    });
  }
  render() {
    const { squareX, squareY } = this.state;
    return (
      <div style={styles}>
        <div style={{ ...squareStyles, top: squareY, left: squareX,}}></div>
        <Stick1 />
        <Stick2 />
      </div>
    );
  }
}
const length = 600;
const squareSize = 20;

const squareStyles = {
  position: "absolute",
  background: "white",
  width: `${squareSize}px`,
  height: `${squareSize}px`,
};
const styles = {
  position: "relative",
  background: "black",
  margin: "auto",
  border: "1px solid",
  width: `${length}px`,
  height: `${length}px`,
};
