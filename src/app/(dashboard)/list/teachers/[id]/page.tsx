import Announcements from "@/components/Announcements";
import Performance from "@/components/Performance";
import ScheduleCalendar from "@/components/ScheduleCalendar";
import { CalendarDays, Droplet, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TeacherDetailsPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-[70%]">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* TEACHER INFO CARD */}
          <div className="py-6 px-4 rounded-md flex-1 flex items-center gap-4 bg-primary-100">
            <div className="w-[35%]">
              <Image
                src="https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={128}
                height={128}
                className="size-32 rounded-full object-cover shrink-0"
              />
            </div>
            <div className="w-[55%] flex flex-col justify-between gap-4 text-fixed-200">
              <h2 className="text-lg font-bold">Dean Guerrero</h2>
              <p className="text-sm font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Droplet className="size-5" />
                  <span>A+</span>
                </li>
                <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <CalendarDays className="size-5" />
                  <span>January 2025</span>
                </li>
                <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Mail className="size-5" />
                  <span>teacher@example.com</span>
                </li>
                <li className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Phone className="size-5" />
                  <span>+123 456 7891</span>
                </li>
              </ul>
            </div>
          </div>
          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <div className="bg-background-200 text-text-200 p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[47%] xl:w-[47%]">
              <Image
                src="/singleAttendance.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <div className="">
                <h3 className="text-xl font-semibold">90%</h3>
                <span className="text-text-100 text-sm">Attendance</span>
              </div>
            </div>
            <div className="bg-background-200 text-text-200 p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[47%] xl:w-[47%]">
              <Image
                src="/singleBranch.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <div className="">
                <h3 className="text-xl font-semibold">2</h3>
                <span className="text-text-100 text-sm">Branches</span>
              </div>
            </div>
            <div className="bg-background-200 text-text-200 p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[47%] xl:w-[47%]">
              <Image
                src="/singleLesson.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <div className="">
                <h3 className="text-xl font-semibold">10</h3>
                <span className="text-text-100 text-sm">Lessons</span>
              </div>
            </div>
            <div className="bg-background-200 text-text-200 p-4 rounded-md flex items-center gap-4 w-full md:w-[48%] lg:w-[47%] xl:w-[47%]">
              <Image
                src="/singleClass.png"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              <div className="">
                <h3 className="text-xl font-semibold">4</h3>
                <span className="text-text-100 text-sm">Classes</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-background-200 p-4 rounded-md h-[800px]">
          <h2 className="text-text-200 font-semibold">Teacher&apos;s Schedule</h2>
          <ScheduleCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-[30%]">
        {/* SHORTCUTS */}
        <div className="bg-background-200 p-4 rounded-md">
          <h3 className="font-medium text-text-200">Shortcuts</h3>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-fixed-100">
            <Link href="/" className=" p-2 rounded-md bg-class-1">Teacher&apos;s Classes</Link>
            <Link href="/" className=" p-2 rounded-md bg-class-2 ">Teacher&apos;s Students</Link>
            <Link href="/" className=" p-2 rounded-md bg-class-3 ">Teacher&apos;s Lessons</Link>
            <Link href="/" className=" p-2 rounded-md bg-class-4 ">Teacher&apos;s Exams</Link>
            <Link href="/" className=" p-2 rounded-md bg-class-5 ">Teacher&apos;s Assignments</Link>
          </div>
        </div>

        {/* PERFORMANCE */}
        <Performance />

        {/* ANNOUNCEMENTS */} 
        <div className="bg-background-200 mt-4 p-4 rounded h-fit">
          <Announcements />
        </div>


      </div>
    </div>
  );
};

export default TeacherDetailsPage;
