import React, { Component } from 'react'

export default class Countdown extends Component {
  state = {
    seconds: 5,
  }
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
  }

  startTimer() {
    this.myInterval = setInterval(() => {
      const {seconds} = this.state

        if(seconds > 0) {
          this.setState(({ seconds }) =>({
            seconds: seconds - 1
          }))
        }

      if(seconds === 0) {
        clearInterval(this.myInterval)
      } 
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const {seconds} = this.state

    return (
      <div>
        { seconds === 0
            ? <h1>Começar!</h1>
            : <h1>Contagem regressiva: {seconds < 10 ? `${seconds}` : seconds}</h1>
        } <br/>
        <button onClick={this.startTimer} className="signup-btn"> Começar corrida </button>
      </div>
    )
  }
}