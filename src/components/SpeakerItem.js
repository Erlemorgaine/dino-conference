import React, { PureComponent } from 'react';
import './SpeakerItem.css'

class SpeakerItem extends PureComponent {

  render() {

    const { speaker } = this.props
    console.log(speaker.picture)
    return (
      <div className="speaker">
        <img className="speaker-image" src={ speaker.picture } alt={ speaker.name }/>
        <div className="name">{ speaker.name }</div>
        <a className="website" href={ speaker.website }>Personal website</a>
        <div className="lecture">{ `"${speaker.lecture}"` }</div>
        <a className="abstract" href={ speaker.abstract }>Abstract</a>
      </div>
    )
  }
}

export default SpeakerItem
