import React, { PureComponent } from 'react'
//import CountDown from '../countdown/CountDown'
import Navigation from './/Navigation'
import './Cover.css'
import sfb from '../images/SFB.jpg'
import unisa from '../images/UNISA.png'
import uniLogo from '../images/uni_logo.svg.png'

class Cover extends PureComponent {

  render() {
    //const OPTIONS = { endDate: '04/01/2018 09:40 AM'}
    return (
      <div className="Cover">
        <div className="logos">
          <span><img className="logo" src={sfb} alt=""/></span>
          <span><img className="logo" src={unisa} alt=""/></span>
          <span><img className="logo" src={uniLogo} alt=""/></span>
        </div>
        <h2 className="cover-text">Johannes Gutenberg-Universität Mainz presents</h2>
        <h1 className="cover-text conference-head">International summer school in Arithmetic geometry</h1>
        <h2 className="cover-text conference-subhead">hosted by Università degli Studi di Salerno</h2>
        <h4 className="cover-text conference-dates">10-14 September 2018, Salerno</h4>
        <Navigation />
      </div>
    );
  }
}

export default Cover
