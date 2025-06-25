import React from "react";
import { useForm } from "react-hook-form"
import axios from "axios"
import { useAuth } from "../src/context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
 const [authUser, setAuthUser] = useAuth();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    }

    axios.post("/api/user/login", userinfo).then((response) => {
      if (response.data) {
        toast.success("you are logedIn")
      }
      localStorage.setItem("ChatApp", JSON.stringify(response.data));
      console.log(response.data)
      setAuthUser(response.data);
    }).catch((error) => {
      if (error.response) {
        toast.error("Error:" + error.response.data.error)
      }
    })
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <form action="" onSubmit={handleSubmit(onSubmit)} className=" border border-white px-6 py-2 rounded-md space-y-3 w-100">
          <h1 className="text-2xl text-center ">Chat <span className="text-green-600 font-semibold">App</span></h1>
          <h2 className="text-xl text-white font-bold ">Login</h2> <br></br>
          <label className="input  mx-4"> {/*email*/}
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" {...register("email", { required: true })} />
          </label>
          {errors.email && <span className="text-red-400 text-sm font-semibold px-3">This field is required</span>}
          <label className="input  mx-4" > {/*password*/}
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              placeholder="Password"
              minlength="8"
              {...register("password", { required: true })}
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          {errors.password && <span className="text-red-400 text-sm font-semibold px-3">This field is required</span>}
          <div className="flex justify-between m-2 "> {/* text & button */}
            <p> New user ?<Link to={"/signup"}className="text-blue-500  underline cursor-pointer ml-1 "> SignUp</Link></p>
            <input type="submit" value="Login" className="text-white font-bold text-lg bg-green-600  px-4 py-1 rounded-lg cursor-pointer " />
          </div>
        </form>
      </div>
    </>
  );
};


export default Login;
