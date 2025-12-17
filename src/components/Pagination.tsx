import { ChevronLeft, ChevronRight } from "lucide-react"


const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between text-text-100">
        {/* PREVIOUS BUTTON */}
        <button
            title="Previous"
            disabled
            className="p-2 rounded-full border border-border bg-background-100 cursor-pointer hover:border-primary-100 disabled:border-border disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <ChevronLeft className="size-5"/>
        </button>

        {/* PAGE NUMBERS */}
        <div className="flex items-center gap-1 text-xs">
            <button className="px-2 py-1 rounded-sm bg-primary-100 text-muted-200 cursor-pointer">1</button>
            <button className="px-2 py-1 rounded-sm hover:bg-background-100 cursor-pointer">2</button>
            <button className="px-2 py-1 rounded-sm hover:bg-background-100 cursor-pointer">3</button>
            ...
            <button className="px-2 py-1 rounded-sm hover:bg-background-100 cursor-pointer">10</button>
        </div>

        {/* NEXT BUTTON */}
        <button
            title="Next"
            className="p-2 rounded-full border border-border bg-background-100 cursor-pointer hover:border-primary-100 disabled:border-border disabled:opacity-50 disabled:cursor-not-allowed"
        >
            <ChevronRight className="size-5"/>
        </button>
    </div>
  )
}

export default Pagination