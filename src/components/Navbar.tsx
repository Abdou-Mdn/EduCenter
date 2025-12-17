import { Megaphone, MessageCircleMore, Search } from "lucide-react"
import Image from "next/image"
import ThemeToggler from "./ThemeToggler"
import { role } from "@/lib/data"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      {/* SEARCH BAR */}
      <div className="hidden lg:block relative min-w-[250px]">
        <Search className="size-5 ml-1 text-text-100 absolute left-0.5 top-1/2 -translate-y-1/2"/>
        <input type="text" placeholder="Search" className="w-full outline-0 text-text-200 rounded-full p-1 pl-8 ring ring-border focus:ring-primary-400"/>
      </div>

      {/* Icons and Users */}
      <div className="flex items-center justify-end gap-4 w-full">
        <div className="p-1 rounded-full relative cursor-pointer hover:bg-primary-100  transition-colors">
          <MessageCircleMore className="size-6" />
          <div className="bg-primary-200 size-2.5 rounded-full absolute top-1 right-0.5" />
        </div>
        <div className="p-1 rounded-full relative cursor-pointer hover:bg-primary-100  transition-colors">
          <Megaphone className="size-6" />
          <div className="bg-primary-200 size-2.5 rounded-full absolute top-0.5 right-0" />
        </div>

        <ThemeToggler />

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex flex-col">
            <span className="text-sm leading-3 font-medium text-text-200">John Doe</span>
            <span className="text-xs text-text-100 text-right capitalize">{role}</span>
          </div>
          <Image src="/avatar.svg" alt="" width={32} height={32} className="rounded-full ring-2 ring-border" />
        </div>
      </div>
    </div>
  )
}

export default Navbar