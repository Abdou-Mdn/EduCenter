import Pagination from "@/components/Pagination"
import TableContent from "@/components/TableContent"
import TableSearch from "@/components/TableSearch"
import { role, studentsData } from "@/lib/data"
import { ArrowDownWideNarrow, Plus, ScanEye, SlidersHorizontal, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  grade: number;
  class: string;
  phone?: string;
  address: string;
}

const columns = [
  {
    header: "Info", accessor: "info"
  },
  {
    header: "Student ID", accessor: "studentId", className: "hidden md:table-cell"
  },
  {
    header: "Grade", accessor: "grade", className: "hidden md:table-cell"
  },
  {
    header: "Phone", accessor: "phone", className: "hidden lg:table-cell"
  },
  {
    header: "Address", accessor: "address", className: "hidden lg:table-cell"
  },
  {
    header: "Actions", accessor: "actions",
  },
]

const StudentListPage = () => {

  const renderRow = (item:Student) => (
    <tr key={item.id} className="border-b border-border even:bg-background-100 odd:bg-background-200 text-sm hover:bg-border">
      <td className="flex items-center gap-4 p-4">
        <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block size-10 rounded-full object-cover" />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-text-100">{item?.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden lg:table-cell">{item.phone}</td>
      <td className="hidden lg:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button 
              title="view details"
              className="size-8 flex items-center justify-center rounded-full border border-accent bg-accent text-muted-200 cursor-pointer hover:bg-transparent hover:text-accent transition-all"
            >
              <ScanEye className="size-5" />
            </button>
          </Link>
          { role === "admin" && (
            <button 
              title="delete"
              className="size-8 flex items-center justify-center rounded-full border border-error bg-error text-muted-200 cursor-pointer hover:bg-transparent hover:text-error transition-all"
            >
              <Trash2 className="size-5" />
            </button>
          )
          }
        </div>
      </td>
    </tr>
  )

  return (
    <div className="bg-background-200 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h2 className="hidden md:block text-lg font-semibold">All Students</h2>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          {/* BUTTONS */}
          <div className="flex items-center gap-4 self-end">
            <button 
              title="filter"
              className="size-8 flex items-center justify-center rounded-full cursor-pointer border border-text-200 hover:text-primary-200 hover:border-primary-200 transition-colors"
            >
              <SlidersHorizontal className="size-5" />
            </button>
            <button 
              title="sort"
              className="size-8 flex items-center justify-center rounded-full cursor-pointer border border-text-200 hover:text-primary-200 hover:border-primary-200 transition-colors"
            >
              <ArrowDownWideNarrow className="size-5" />
            </button>
            { role === "admin" && 
              <button 
                title="add student"
                className="size-8 flex items-center justify-center rounded-full cursor-pointer border border-text-200 hover:text-primary-200 hover:border-primary-200 transition-colors"
              >
                <Plus className="size-5" />
              </button>
            }
          </div>
        </div>
      </div>

      {/* LIST */}
      <TableContent columns={columns} renderRow={renderRow} data={studentsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default StudentListPage