import { Search } from "lucide-react"

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto relative min-w-[250px]">
        <Search className="size-5 ml-1 text-text-100 absolute left-0.5 top-1/2 -translate-y-1/2"/>
        <input type="text" placeholder="Search" className="w-full outline-0 text-text-200 rounded-full p-1 pl-8 ring ring-border focus:ring-primary-400"/>
    </div>
  )
}

export default TableSearch