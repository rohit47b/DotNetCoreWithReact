import React, { PureComponent } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Calendar extends PureComponent {

    render() {
        return (
            <FullCalendar defaultView="dayGridMonth" plugins={[dayGridPlugin]} />
        )
    }
}
export default Calendar