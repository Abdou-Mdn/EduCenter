import Announcements from "@/components/Announcements"
import ScheduleCalendar from "@/components/ScheduleCalendar"

const TeacherPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row flex-1">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-4"> 
       <div className="bg-background-200 p-4 rounded-md">
        <h3 className='font-medium'>Schedule</h3>
        <ScheduleCalendar />
       </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-background-200 p-4 rounded h-fit">
          <Announcements />
        </div>
      </div>
    </div>
  )
}

export default TeacherPage