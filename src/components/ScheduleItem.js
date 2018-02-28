import React, { PureComponent } from 'react';
import './ScheduleItem.css'

class ScheduleItem extends PureComponent {

  renderSchedule = (schedule, index) => {
    return(
      <li className="schedule-item" key={index}>
        <div className="time">{ schedule.time }</div>
        <div className="activity">{ schedule.activity }</div>
      </li>
    )
  }

  render() {

    const { schedule } = this.props

    return (
      <div className="timeline">
        <ul className="schedule-list">
        { schedule.map(this.renderSchedule) }
        </ul>
      </div>
    )
  }
}

export default ScheduleItem
