import React, { PureComponent } from 'react'
import ResearchTalkItem from './ResearchTalkItem'

class ResearchTalkContainer extends PureComponent {

  renderResearchTalk = (researchTalk, index) => {
    return(
      <ResearchTalkItem key={index} researchTalk={researchTalk}/>
    )
  }

  render() {
    return (
      <div className="ResearchTalkContainer block">
        <h1>Research talk speakers</h1>
        <div style={{ boxSizing: 'border-box',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          { this.props.researchTalks.map(this.renderResearchTalk) }
        </div>
      </div>
    );
  }
}

export default ResearchTalkContainer
