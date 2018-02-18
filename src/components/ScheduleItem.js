import React, { PureComponent } from 'react';
import './ScheduleItem.css'

class ScheduleItem extends PureComponent {

  renderSchedule = (schedule, index) => {
    return(
      <li key={index}>
        { schedule.time } - { schedule.activity }
      </li>
    )
  }

  render() {

    const { schedule } = this.props

    return (
      <div className="timeline">
        <ul>
        { schedule.map(this.renderSchedule) }
        </ul>
      </div>
    )
  }
}

export default ScheduleItem
