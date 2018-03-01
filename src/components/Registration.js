import React, { PureComponent } from 'react'
import './Registration.css'

class Registration extends PureComponent {

  render() {
    return (
      <div className="Registration">
        <h1>Registration</h1>
        <div className="registration-text">
          <p>Registration will close on *some date*.</p>
          <br/>

<p>If you wish to apply for funding, to give a talk or to present a poster, please indicate so in the application form, within *some deadline*.
If you are proposing for a talk, please send title and abstract by mail to <a href="">some email address</a> within *some deadline*.</p>
<br/>

<p>In order to attend the school please fill in this <a href="">form</a>.</p>
        </div>
      </div>
    );
  }
}

export default Registration
