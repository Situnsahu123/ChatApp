import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const UserData = ({ user }) => {
  const { selectedConversation, setselectedConversation } = useConversation()
  const isSelected = selectedConversation?._id === user._id;
  const { onLineUser } = useSocketContext()
  const isonline = onLineUser.includes(String(user._id));
  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`} onClick={() => setselectedConversation(user)} >
      <div className="flex space-x-4 px-6 py-3 hover:bg-slate-700 duration-300">
        <div className={`${isonline  ? "avatar avatar-online" : "avatar"}`}>
          <div className="w-14 rounded-full ">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <div>
          <h1>
            {user?.fullname || "No name found"}
            {isonline && <span className="ml-2 text-green-500 text-xs">online</span>}
          </h1>
          <span>{user?.email || "No email found"}</span>
        </div>
      </div>
    </div>
  )
}

export default UserData