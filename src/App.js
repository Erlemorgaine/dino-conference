import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Cover from './components/Cover.js'
import About from './components/About.js'
import ScheduleContainer from './components/ScheduleContainer'
import SpeakerContainer from './components/SpeakerContainer'
import ResearchTalkContainer from './components/ResearchTalkContainer'
import FAQContainer from './components/FAQContainer'
import Participants from './components/Participants'
import Venue from './components/Venue'
import Registration from './components/Registration'
import './App.css'
import weekSchedule from './fixtures/weekSchedule'
import speakers from './fixtures/speakers'
import researchTalks from './fixtures/researchTalks'
import participants from './fixtures/participants'
import faqs from './fixtures/faqs'

class App extends Component {
  render() {

    return (
      <Router>
        <div className="App">
          <Cover />
          <About />
          <SpeakerContainer speakers={speakers}/>
          <ResearchTalkContainer researchTalks={researchTalks}/>
          <ScheduleContainer weekSchedule={weekSchedule}/>
          <Participants participants={participants}/>
          <div id="venue" style={{ display: 'flex', flexWrap: 'wrap', }}>
            <iframe
              title="map"
              width="640"
              height="450"
              frameBorder="0" style={{border:0}}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCEmJhLjMoYRrFfYF_oWOSyuCesrINhVLU&q=Dipartimento+di+Matematica,Strada+Provinciale+24a,+Fisciano,+Salerno,+Italy" allowFullScreen>
            </iframe>
            <Venue />
          </div>
          <FAQContainer faqs={faqs}/>
          <Registration />
        </div>
      </Router>
    );
  }
}

export default App;
