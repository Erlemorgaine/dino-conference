import React, { PureComponent } from 'react';
import './ResearchTalkItem.css'

class ResearchTalkItem extends PureComponent {
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
        <div className="abstract-content">
          { content }
        </div>
      )
    }
    return
  }

  render() {
    const { researchTalk, index } = this.props

    return (
      <div className="researchTalk">
        { researchTalk.picture ? <img className="researchTalk-image" src={ researchTalk.picture } alt={ researchTalk.name }/> : ''}
        <div className="name">{ researchTalk.name }</div>
        <a className="website" href={ researchTalk.website }>Personal website</a>
        <div className="lecture">{ `"${researchTalk.lecture}"` }</div>
        <div className="abstract" onClick={() => this.setContent(index)}>Abstract</div>
        { this.showContent(researchTalk.abstract, index) }
      </div>
    )
  }
}

export default ResearchTalkItem
