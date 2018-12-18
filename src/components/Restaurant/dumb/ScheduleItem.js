import React from 'react'
import Day from './Day'
import Time from './Time'

const ScheduleItem = (props) => {

    // console.log('MenuItem props\n',props)
    return (
        <li className="schedule_item">
            <Day day={props.item[0]} />
            <Time time={props.item[1]} />
        </li>
    )
}

export default ScheduleItem
