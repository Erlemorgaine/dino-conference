import React, { PureComponent } from 'react'
import CountDown from '../countdown/CountDown'
import './Cover.css'

class Cover extends PureComponent {

  render() {
    const OPTIONS = { endDate: '03/01/2018 10:55 AM'}
    return (
      <div className="Cover">
        <h1 className="cover-text">Institute name</h1>
        <h2 className="cover-text">Conference name</h2>
        <div className="cover-text">Dates and place</div>
        <div className="countdown">
          <CountDown options={OPTIONS} />
        </div>
      </div>
    );
  }
}

export default Cover
