// your Bomb code here!
import React from 'react';
export default class Bomb extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor(props) {
      super()
      this.state = {
        secondsLeft: props.initialCount
      }
    }
   
    // our increment method makes use of the 'setState' method, which is what we use to alter state
   
    render() {
        let countdown = `${this.state.secondsLeft} seconds left before I go boom!`
        let end = `Boom!`
      return (
        <div>{this.state.secondsLeft === 0 ? end : countdown}</div>
      )
    }
  }

