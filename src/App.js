import React, { Component } from 'react';
import Cover from './components/Cover.js'
import About from './components/About.js'
import ScheduleContainer from './components/ScheduleContainer'
import SpeakerContainer from './components/SpeakerContainer'
import FAQContainer from './components/FAQContainer'
import Participants from './components/Participants'
import Venue from './components/Venue'
import Registration from './components/Registration'
import Contact from './components/Contact'
import './App.css'
import weekSchedule from './fixtures/weekSchedule'
import speakers from './fixtures/speakers'
import participants from './fixtures/participants'
import faqs from './fixtures/faqs'

class App extends Component {
  render() {

    return (
      <div className="App">
        <Cover />
        <About />
        <ScheduleContainer weekSchedule={weekSchedule}/>
        <SpeakerContainer speakers={speakers}/>
        <Participants participants={participants}/>
        <div style={{ display: 'flex', flexWrap: 'wrap', }}>
          <iframe
            title="map"
            width="640"
            height="450"
            frameBorder="0" style={{border:0}}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCEmJhLjMoYRrFfYF_oWOSyuCesrINhVLU&q=Mainz+Germany" allowFullScreen>
          </iframe>
          <Venue />
        </div>
        <FAQContainer faqs={faqs}/>
        <Registration />
        <Contact />
      </div>
    );
  }
}

export default App;
