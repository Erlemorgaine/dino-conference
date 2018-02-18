import React, { Component } from 'react';
import Cover from './components/Cover.js'
import About from './components/About.js'
import ScheduleContainer from './components/ScheduleContainer.js'
import './App.css'

const weekSchedule = [{
  day: 'Day 1: February 1st',
  schedule: [{
    time: '9:00-10:00',
    activity: 'sth cool'
  }, 
  {
    time: '10:00-10:30',
    activity: 'lots of nice math'},
    {
      time: '11:00-12:30',
      activity: 'being happy'},
      {
        time: '12:30-13:30',
        activity: 'eating lots'}],
  _id: 0
},
{
  day: 'Day 2: February 2nd',
  schedule: [{
    time: '9:00-10:00',
    activity: 'sth more cool'
  }, 
  {
    time: '10:00-10:30',
    activity: 'lots of awesome math'}],
  _id: 1
},
{
  day: 'Day 3: February 3rd',
  schedule: [{
    time: '9:00-10:00',
    activity: 'sth even more cool'
  }, 
  {
    time: '10:00-10:30',
    activity: 'lots of fantastic math'}],
  _id: 2
},
{
  day: 'Day 4: February 4th',
  schedule: [{
    time: '9:00-10:00',
    activity: 'sth awesome'
  }, 
  {
    time: '10:00-10:30',
    activity: 'lots of cool math'}],
  _id: 3
},
{
  day: 'Day 5: February 5th',
  schedule: [{
    time: '9:00-10:00',
    activity: 'the coolest thing'
  }, 
  {
    time: '10:00-10:30',
    activity: 'lots of great math'}],
  _id: 4
}]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cover />
        <About />
        <ScheduleContainer weekSchedule={weekSchedule}/>
        <iframe
          title="map"
          width="640"
          height="450"
          frameBorder="0" style={{border:0}}
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCEmJhLjMoYRrFfYF_oWOSyuCesrINhVLU&q=Mainz+Germany" allowFullScreen>
        </iframe>
      </div>
    );
  }
}

export default App;
