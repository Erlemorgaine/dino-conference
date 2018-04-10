import React, { Component } from 'react'
import venueimage from '../images/venueimage.js'
import './Venue.css'

class Venue extends Component {
  render() {
    return (
      <div id="venue" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <iframe
          className="venue-item"
          title="map"
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCEmJhLjMoYRrFfYF_oWOSyuCesrINhVLU&q=Dipartimento+di+Matematica,Strada+Provinciale+24a,+Fisciano,+Salerno,+Italy" allowFullScreen>
        </iframe>
        <div className="block venue-item venue-text" style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${venueimage})`,
          backgroundSize: 'cover',
          textAlign: 'right'}}>
          <h1>Venue > </h1>
          <h2>Facolta di Scienze Matematiche, Fisiche e Naturali
          dell''Università degli studi di Salerno, Salerno, Italy.</h2>
          <br/>
          <h3>Via Giovanni Paolo II, 132 - 84084 - Fisciano (SA)</h3>
          <br/><br/>
          <div>Registration in room: TBA</div>
          <div>Talks in room: TBA</div>
          <div>Questions sessions in room: TBA</div>
        </div>
      </div>
    );
  }
}

export default Venue
