import React, { Component } from 'react'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className='nav-item'><a className='nav-link' href='#about'>About</a></div>
        <div className='nav-item'><a className='nav-link' href='#speakers'>Speakers</a></div>
        <div className='nav-item'><a className='nav-link' href='#schedule'>Schedule</a></div>
        <div className='nav-item'><a className='nav-link' href='#participants'>Participants</a></div>
        <div className='nav-item'><a className='nav-link' href='#venue'>Venue</a></div>
        <div className='nav-item'><a className='nav-link' href='#faq'>FAQ</a></div>
        <div className='nav-item'><a className='nav-link' href='#registration'>Registration</a></div>
      </div>
    );
  }
}

export default Navigation
