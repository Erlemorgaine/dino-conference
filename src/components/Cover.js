import React, { PureComponent } from 'react'
//import CountDown from '../countdown/CountDown'
import Navigation from './/Navigation'
import './Cover.css'

class Cover extends PureComponent {

  render() {
    //const OPTIONS = { endDate: '04/01/2018 09:40 AM'}
    return (
      <div className="Cover">
        <h2 className="cover-text">Johann Gutenberg Universität Mainz presents</h2>
        <h1 className="cover-text conference-head">Topics in arithmetic geometry</h1>
        <h2 className="cover-text conference-subhead">A summer school in Salerno</h2>
        <h4 className="cover-text conference-dates">10-14 September 2018, Salerno</h4>
        <Navigation />
      </div>
    );
  }
}

export default Cover
