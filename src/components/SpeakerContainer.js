import React, { PureComponent } from 'react'
import SpeakerItem from './SpeakerItem'

class SpeakerContainer extends PureComponent {

  renderSpeaker = (speaker, index) => {
    return(
      <SpeakerItem key={index} speaker={speaker}/>
    )
  }

  render() {
    return (
      <div id='speakers' className="SpeakerContainer block">
        <h1>Mini-course speakers</h1>
        <div style={{ boxSizing: 'border-box',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'flex-start' }}
        >
          { this.props.speakers.map(this.renderSpeaker) }
        </div>
      </div>
    );
  }
}

export default SpeakerContainer
