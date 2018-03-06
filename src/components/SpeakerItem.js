import React, { PureComponent } from 'react';
import './SpeakerItem.css'

class SpeakerItem extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      show: null,
      hide: null
    }
  }

  setContent = (index) => {
    let show = null
    if (index !== this.state.show) {
      show = index
    }
    this.setState({
      show: show,
    })
  }

  showContent = (content, index) => {
    if (this.state.show === index) {
      return (
        <div className="abstract-content plain-text">
          { content }
        </div>
      )
    }
    return
  }

  render() {
    const { speaker, index } = this.props

    return (
      <div className="speaker text-center">
        { speaker.picture ? <img className="speaker-image" src={ speaker.picture } alt={ speaker.name }/> : ''}
        <div className="name">{ speaker.name }</div>
        <a className="website" href={ speaker.website }>Personal website</a>
        <div className="lecture">{ `"${speaker.lecture}"` }</div>
        <div className="abstract" onClick={() => this.setContent(index)}>Abstract</div>
        { this.showContent(speaker.abstract, index) }
      </div>
    )
  }
}

export default SpeakerItem
