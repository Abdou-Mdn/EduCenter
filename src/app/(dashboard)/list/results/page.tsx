import Pagination from "@/components/Pagination"
import TableContent from "@/components/TableContent"
import TableSearch from "@/components/TableSearch"
import { resultsData, role } from "@/lib/data"
import { ArrowDownWideNarrow, Plus, SlidersHorizontal, SquarePen, Trash2 } from "lucide-react"

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
}

const columns = [
  {
    header: "Subject Name", accessor: "name"
  },
  {
    header: "Student", accessor: "student"
  },
  {
    header: "Score", accessor: "score"
  },
  {
    header: "Teacher", accessor: "teacher", className: "hidden md:table-cell"
  },
  {
    header: "Class", accessor: "class", className: "hidden md:table-cell"
  },
  {
    header: "Date", accessor: "date", className: "hidden md:table-cell"
  },
  {
    header: "Actions", accessor: "actions", className: role !== "admin" ? "hidden" : ""
  },
]

const ResultListPage = () => {

  const renderRow = (item:Result) => (
    <tr key={item.id} className="border-b border-border even:bg-background-100 odd:bg-background-200 text-sm hover:bg-border">
      <td className="p-4">{item.subject}</td>
      <td>{item.student}</td>
      <td>{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      { role === "admin" && (
        <td>
          <div className="flex items-center gap-2">
            <button 
              title="edit"
              className="size-8 flex items-center justify-center rounded-full border border-accent bg-accent text-muted-200 cursor-pointer hover:bg-transparent hover:text-accent transition-all"
            >
              <SquarePen className="size-5" />
            </button>
            <button 
              title="delete"
              className="size-8 flex items-center justify-center rounded-full border border-error bg-error text-muted-200 cursor-pointer hover:bg-transparent hover:text-error transition-all"
            >
              <Trash2 className="size-5" />
            </button>
          </div>
        </td>
      )}
    </tr>
  )

  return (
    <div className="bg-background-200 p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h2 className="hidden md:block text-lg font-semibold">All Results</h2>
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
                title="add result"
                className="size-8 flex items-center justify-center rounded-full cursor-pointer border border-text-200 hover:text-primary-200 hover:border-primary-200 transition-colors"
              >
                <Plus className="size-5" />
              </button>
            }
          </div>
        </div>
      </div>

      {/* LIST */}
      <TableContent columns={columns} renderRow={renderRow} data={resultsData} />

      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default ResultListPage