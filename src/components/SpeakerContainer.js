import React, { PureComponent } from 'react'
import SpeakerItem from './SpeakerItem'
import './ScheduleContainer.css'

class SpeakerContainer extends PureComponent {

  renderSpeaker = (speaker, index) => {
    return(
      <SpeakerItem key={index} speaker={speaker}/>
    )
  }

  render() {
    return (
      <div className="SpeakerContainer block">
        <h1>Main Speakers</h1>
        <div style={{ boxSizing: 'border-box',
        display: 'inline-flex' }}>
          { this.props.speakers.map(this.renderSpeaker) }
        </div>
      </div>
    );
  }
}

export default SpeakerContainer
