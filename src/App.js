import React, { Component } from "react";
import "./App.css";

class TrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = { lights: { red: true, yellow: false, green: false } };
    this.time = 2000;
  }

  componentDidMount() {
    this.handleTimer();
  }

  handleTimer() {
    let values = Object.values(this.state.lights); //MUST SAVE a copy of boolean values
    setTimeout(() => {
      Object.keys(this.state.lights).forEach((on, index) => {
        this.setState(prevState => ({
          lights: {
            ...prevState.lights, // keep all other key-value pairs
            [on]: values[(index + 2) % 3] // get value of previous item
          }
        }));
      });
      this.handleTimer();
    }, this.time);
  }

  render() {
    return (
      <div className="trafficLight">
        {Object.keys(this.state.lights)
          .map((on, index) => {
            return (
              <div
                className={this.state.lights[on] ? "on" : "off"}
                style={{
                  backgroundColor: this.state.lights[on] ? [on] : "black"
                }}
                key={on}
              >
                {on}
              </div>
            );
          })
          .reduce((prev, curr) => [prev, curr])}
      </div>
    );
  }
}

export default TrafficLight;