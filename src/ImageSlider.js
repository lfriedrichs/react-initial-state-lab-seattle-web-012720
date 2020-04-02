// your ImageSlider code here!
import React from 'react';
export default class ImageSlider extends React.Component {
 
    // we use the constructor to set the INITIAL STATE
    constructor() {
      super()
      this.state = {
        currentSlideIndex: 0
      }
    }
   
    // our increment method makes use of the 'setState' method, which is what we use to alter state
   
    render() {
      return (
          <div>I am on slide {this.state.currentSlideIndex}</div>
      )
    }
  }
