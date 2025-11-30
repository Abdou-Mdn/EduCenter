"use client"
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { calendarEvents } from '@/lib/data'
import { useState } from 'react'

const localizer = momentLocalizer(moment)

const ScheduleCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);
    
    const handleChangeView = (selectedView : View) => {
        setView(selectedView);
    }

    return (
        <Calendar
            localizer={localizer}
            events={calendarEvents}
            startAccessor="start"
            endAccessor="end"
            views={["work_week", "day"]}
            view={view}
            style={{ height: 750, paddingTop: 10, paddingBottom: 10 }}
            onView={handleChangeView}
            min={new Date(2025,1,1,8,0,0)}
            max={new Date(2025,1,1,17,0,0)}
        />
    )
}

export default ScheduleCalendar