import React, { Component } from 'react';
import Cover from './components/Cover.js'
import About from './components/About.js'
import ScheduleContainer from './components/ScheduleContainer.js'
import SpeakerContainer from './components/SpeakerContainer.js'
import './App.css'
import weekSchedule from './fixtures/weekSchedule'
import speakers from './fixtures/speakers'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Cover />
        <About />
        <ScheduleContainer weekSchedule={weekSchedule}/>
        <SpeakerContainer speakers={speakers}/>
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
