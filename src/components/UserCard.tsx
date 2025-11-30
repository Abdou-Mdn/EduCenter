
const UserCard = ({type}: {type:string}) => {
  return (
    <div className="odd:bg-primary-200 even:bg-accent rounded-2xl p-4 flex-1 flex flex-col min-w-[130px]">
        <span className="text-xs bg-background-200 px-2 py-1 rounded-full text-success w-fit">2025/26</span>
        <span className="text-2xl font-semibold my-4 text-text-200">1,234</span>
        <span className="capitalize text-sm font-medium text-muted-200">{type}s</span>
    </div>
  )
}

export default UserCard