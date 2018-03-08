import React, { Component } from 'react'
import background from '../images/Paolo22.jpg'

class Venue extends Component {
  render() {
    return (
      <div className="block" style={{
        color: 'white',
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})`,
        backgroundSize: '100%',
        minWidth: 640,
        width: '50%',
        textAlign: 'right',
        // width: 640,
        height: 450, }}>
        <h1>Venue > </h1>
        <h2>Facolta di Scienze Matematiche, Fisiche e Naturali
        dell'Università degli studi di Salerno, Salerno, Italy.</h2>
        <br/>
        <h3>Via Giovanni Paolo II, 132 - 84084 - Fisciano (SA)</h3>
        <br/><br/>
        <div>Registration in room: TBA</div>
        <div>Talks in room: TBA</div>
        <div>Questions sessions in room: TBA</div>
      </div>
    );
  }
}

export default Venue
