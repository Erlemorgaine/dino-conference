import React, { PureComponent } from 'react'
//import './FAQContainer.css'

class FAQContainer extends PureComponent {
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
        <div className="faq-content">
          { content }
        </div>
      )
    }
    return
  }

  renderFAQ = (faq, index) => {
    return(
      <div key={ index }>
        <button className="faq-title" onClick={() => this.setContent(index)}>{ faq.title }</button>
        { this.showContent(faq.content, index) }
      </div>
    )
  }

  render() {
    return (
      <div className="FAQContainer block">
        <h1>FAQ</h1>
        <div>
          { this.props.faqs.map(this.renderFAQ) }
        </div>
      </div>
    );
  }
}

export default FAQContainer
