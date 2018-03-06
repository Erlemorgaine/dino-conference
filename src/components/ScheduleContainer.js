import React, { PureComponent } from 'react'
import ScheduleButton from './ScheduleButton'
import ScheduleItem from './ScheduleItem'

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
      <div className="ScheduleContainer block color-block"  id="schedule">
        <h1>Schedule</h1>
        { this.props.weekSchedule.map(this.renderButton) }
        { this.renderItem(this.state.day) }
      </div>
    );
  }
}

export default ScheduleContainer
