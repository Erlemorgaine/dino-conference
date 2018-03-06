import React, { PureComponent } from 'react'
import './Participants.css'

class Participants extends PureComponent {

  renderParticipant = (participant, index) => {
    return(
      <li className="participant-item" key={index}>
        <span className="participant-name">{participant.name} </span>
        <span>({participant.institute})</span>
      </li>
    )
  }

  render() {
    return (
      <div className="Participants block"  id="participants">
        <h1>Participants</h1>
        <br/>
        <ul className="participants-list">
          { this.props.participants.map(this.renderParticipant) }
        </ul>
      </div>
    );
  }
}

export default Participants
