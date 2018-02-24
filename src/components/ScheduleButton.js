import React, { Component } from 'react';
import './ScheduleButton.css'

class ScheduleButton extends Component {

  handleClick = () => {
    this.props.onClick(this.props._id)
  }

  render() {
    return (
      <span className="ScheduleButton">
        <button onClick={ this.handleClick }>{ this.props.day }</button>
      </span>
    );
  }
}

export default ScheduleButton
