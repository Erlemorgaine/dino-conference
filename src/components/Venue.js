import React, { Component } from 'react'

class Venue extends Component {
  render() {
    return (
      <div className="block" style={{ color: 'white', backgroundColor: 'rgb(103, 33, 10)', textAlign: 'left', width: 640,
      height: 450 }}>
        <h1>Venue > </h1>
        <h2>Some university building</h2>
        <br/>
        <h3>Some address in Germany</h3>
        <br/><br/>
        <div>Lectures and seminars will take place in some room of the Department of Mathematics, on some floor of some Building.</div>
      </div>
    );
  }
}

export default Venue
