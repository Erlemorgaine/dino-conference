import React, { PureComponent } from 'react'
import ScheduleButton from './ScheduleButton'
import ScheduleItem from './ScheduleItem'
import './ScheduleContainer.css'

class ScheduleContainer extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      day: 0
    }
  }

  renderButton = (day, index) => {
    return(
      <ScheduleButton key={index} onClick={this.setSchedule} {...day}/>
    )
  }

  renderItem = (index) => {
    let schedule = this.props.weekSchedule[index].schedule
    return(
      <ScheduleItem key={index} schedule={schedule}/>
    )
  }

  setSchedule = (id) => {
    this.setState({
      day: id
    })
  }

  render() {
    return (
      <div className="ScheduleContainer block">
        <h1>Schedule Detail</h1>
        <div className="text">Tijdens het Trias, 251 tot 200 miljoen jaar geleden, lag vrijwel alle continentale massa bij elkaar in het supercontinent Pangea. Uit reptielen van de groep der Archosauria — waarvan tegenwoordig alleen nog de krokodillen en de vogels over zijn — ontstonden de eerste dinosauriërs. De meer oorspronkelijke voorouders binnen de archosauriërs waren vermoedelijk kleine jagers die zich op vier poten voortbewogen. De poten stonden recht onder het lichaam in plaats van ernaast, zoals bij eerdere reptielen. Later ontstonden roofdieren die op twee poten rondrenden, de eerste Dinosauromorpha.</div>
        { this.props.weekSchedule.map(this.renderButton) }
        { this.renderItem(this.state.day) }
      </div>
    );
  }
}

export default ScheduleContainer
