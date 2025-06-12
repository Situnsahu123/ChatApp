import React from 'react'

const UserData = () => {
  return (
      <div className=" flex  space-x-4 px-6 py-3 hover:bg-slate-700 duration-300   ">
        <div className="avatar avatar-online">
          <div className="w-14 rounded-full ">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <div>
            <h1>Situn</h1>
            <span>Situn@gmail.com</span>
        </div>
      </div>
  )
}

export default UserData