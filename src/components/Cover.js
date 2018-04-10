import React, { PureComponent } from 'react'
//import CountDown from '../countdown/CountDown'
import './Cover.css'
import sfb from '../images/SFB.jpg'
import unisa from '../images/unisa.js'
import unilogo from '../images/JGU.png'

class Cover extends PureComponent {

  render() {
    return (
      <div className="Cover">
        <div className="logos">
          <span><img className="logo sfb" src={sfb} alt=""/></span>
          <span><img className="logo mainz" src={unilogo} alt=""/></span>
          <span><img className="logo unisa" src={ unisa } alt=""/></span>
        </div>
        <div className="cover-items">
          <h2 className="cover-text conference-intro">Johannes Gutenberg-Universität Mainz presents</h2>
          <h1 className="cover-text conference-head">International summer school on Arithmetic geometry</h1>
          <h2 className="cover-text conference-subhead">hosted by Università degli Studi di Salerno</h2>
          <h4 className="cover-text conference-dates">10-14 September 2018, Salerno</h4>
        </div>
      </div>
    );
  }
}

export default Cover
