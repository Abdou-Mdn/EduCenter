import { role } from "@/lib/data"
import { BookOpenText, CalendarDays, CircleUserRound, ClipboardCheck, ClipboardList, FileCheck, FilePenLine, FileText, GraduationCap, House, LogOut, Megaphone, MessageCircleMore, School, Settings, Users, UsersRound } from "lucide-react"
import Link from "next/link"

const Menu = () => {
  return (
    <div className="mt-2 lg:mt-1 text-sm px-2 pb-2">
        <span className="hidden lg:block text-text-100 my-1">Menu</span>
        <ul className="flex flex-col gap-2 lg:gap-0 text-text-200">
            <li> 
                <Link href="/" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <House className="size-5"/>
                    <span className="hidden lg:block">Home</span>
                </Link>
            </li>
            { ["admin", "teacher"].includes(role) &&   
                <li> 
                    <Link href="/list/teachers" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                        <GraduationCap className="size-5" />
                        <span className="hidden lg:block">Teachers</span>
                    </Link>
                </li>
            }
            { ["admin", "teacher"].includes(role) && 
                <li> 
                    <Link href="/list/students" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                        <UsersRound className="size-5"/>
                        <span className="hidden lg:block">Students</span>
                    </Link>
                </li>
            }
            { ["admin", "teacher"].includes(role) &&   
                <li> 
                    <Link href="/list/subjects" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                        <FileText className="size-5"/>
                        <span className="hidden lg:block">Subjects</span>
                    </Link>
                </li>
            }
            { role === "admin" &&   
                <li> 
                    <Link href="/list/parents" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                        <Users className="size-5"/>
                        <span className="hidden lg:block">Parents</span>
                    </Link>
                </li>
            }
            { ["admin", "teacher"].includes(role) && 
                <li> 
                    <Link href="/list/classes" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                        <School className="size-5"/>
                        <span className="hidden lg:block">Classes</span>
                    </Link>
                </li>
            }
            { ["admin", "teacher"].includes(role) && 
                <li> 
                    <Link href="/list/lessons" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                        <BookOpenText className="size-5"/>
                        <span className="hidden lg:block">Lessons</span>
                    </Link>
                </li>
            }
            <li> 
                <Link href="/list/exams" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <FilePenLine className="size-5"/>
                    <span className="hidden lg:block">Exams</span>
                </Link>
            </li> 
            <li> 
                <Link href="/list/assignments" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <ClipboardList className="size-5"/>
                    <span className="hidden lg:block">Assignments</span>
                </Link>
            </li>
            <li> 
                <Link href="/list/results" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <FileCheck className="size-5"/>
                    <span className="hidden lg:block">Results</span>
                </Link>
            </li>
            <li> 
                <Link href="/list/attendance" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <ClipboardCheck className="size-5"/>
                    <span className="hidden lg:block">Attendance</span>
                </Link>
            </li>
            <li> 
                <Link href="/list/events" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <CalendarDays className="size-5"/>
                    <span className="hidden lg:block">Events</span>
                </Link>
            </li>
            <li> 
                <Link href="/list/messages" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <MessageCircleMore className="size-5"/>
                    <span className="hidden lg:block">Messages</span>
                </Link>
            </li>
            <li> 
                <Link href="/list/announcements" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <Megaphone className="size-5"/>
                    <span className="hidden lg:block">Announcements</span>
                </Link>
            </li>
        </ul>
        <span className="hidden lg:block text-text-100 my-1">Other</span>
        <ul className="flex flex-col gap-2 lg:gap-0 text-text-200">
            <li> 
                <Link href="/profile" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <CircleUserRound className="size-5"/>
                    <span className="hidden lg:block">Profile</span>
                </Link>
            </li>
            <li> 
                <Link href="/settings" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <Settings className="size-5"/>
                    <span className="hidden lg:block">Settings</span>
                </Link>
            </li>
            <li> 
                <Link href="/logout" className="flex items-center justify-center gap-2 lg:justify-start p-2 rounded hover:bg-primary-100 transition-colors">
                    <LogOut className="size-5"/>
                    <span className="hidden lg:block">Logout</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu