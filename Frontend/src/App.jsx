import React from 'react'
import Left from '../src/home/Leftpart/Left'
import Right from '../src/home/Rightpart/Right'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import { useAuth } from "./context/AuthProvider";
import { Routes, Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Loading from '../components/Loading'


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <div className='flex items-center justify-center border-whiten gap-5 '>
      <Routes>
        <Route path='/' element={authUser ?
          <div className="drawer lg:drawer-open">
                <input
                  id="my-drawer-2"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <ul className="menu w-80 min-h-full bg-black text-base-content">
                    <Left />
                  </ul>
                </div>
              </div> : (<Navigate to={"/login"} />)
        } />
        <Route path='/login' element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />

    </div>

  )
}





export default App