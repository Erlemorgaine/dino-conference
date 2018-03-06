import React, { PureComponent } from 'react'
import './Registration.css'

class Registration extends PureComponent {

  render() {
    return (
      <div className="Registration" id="registration">
        <h1>Registration</h1>
        <div className="registration-text">
          <p>Registration will close on July 31st.</p>
          <br/>

<p>If you wish to apply for funding please indicate so in the application form, within June 30th.</p>
<br/>

<p className='last-item'>In order to attend the school please fill in this <a className='light-link' href="">form</a>.</p>
        </div>
        <footer>
          <div>Website inspired by the website for GABY2018, see:
          <br/>
           <a className='light-link' href='http://www.matapp.unimib.it/~/gaby/'> http://www.matapp.unimib.it/~/gaby/</a></div>
          <div>Web design by Erle Monfils</div>
          <div>Photos by Paolo Petti</div>
        </footer>
      </div>
    );
  }
}

export default Registration
