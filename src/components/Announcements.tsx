"use client"

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "2025-11-29",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "2025-11-29",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "2025-11-29",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Announcements = () => {
  return (
    <div className="flex flex-col gap-4 text-text-200">
        <div className="flex items-center justify-between">
            <h3 className='font-medium'>Announcements</h3>
            <span className="text-sm text-primary-200 cursor-pointer hover:text-primary-100 hover:underline">View All</span>
        </div>
        <div className="flex flex-col gap-2">
            {events.map(event => (
                <div className="rounded-md px-4 py-2 border border-border" key={event.id}>
                    <div className="flex items-center justify-between">
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

export default Announcements