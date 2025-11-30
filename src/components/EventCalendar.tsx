"use client"
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='flex flex-col gap-4'>
        <Calendar onChange={onChange} value={value} />
        <div className='flex flex-col gap-2 text-text-200'>
            <h3 className='font-medium'>Events</h3>
            {events.map(event => (
                <div className='p-4 rounded-md border-2 border-border border-t-6 odd:border-t-primary-200 even:border-t-accent' key={event.id}>
                    <div className='flex items-center justify-between'>
                        <h4 className='font-semibold'>{event.title}</h4>
                        <span className='text-xs text-text-100'>{event.time}</span>
                    </div>
                    <p className='text-sm text-text-100'>{event.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default EventCalendar