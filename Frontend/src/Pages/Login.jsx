import { useState } from "react";
import Logo from "../assets/Netflix_Logo.png";
import "../index.css";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";
import Hiding from "../assets/hiding.png";
import Showing from "../assets/showing.png";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState();
  const [userError, setUserError] = useState("");
  const [passError, setPassError] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate(true);

  const togglePassword = () => {
    setShow(!show);
  };

  const validateUser = () => {
    if (!user) {
      setUserError("Please enter a valid email or mobile number.");
    } else {
      setUserError("");
    }
  };

  const validatePass = () => {
    if (!pass) {
      setPassError("Your password must contain between 4 and 60 characters.");
    } else {
      setPassError("");
    }
  };

  const checkUser = (e) => {
    e.preventDefault();
    const datacheck = axios.post(`${import.meta.env.VITE_API_URL}/check`, {
      user: user,
      pass: pass,
    });
    datacheck.then((data) => {
      if (data.data === true) {
        navigate("/netflix");
      } else {
        alert("Your datas are invalid");
      }
    });
  };
  console.log("log",user, pass)

  return (
    <div
      id="container"
      className="mx-auto bg-black md:bg-[url('/src/assets/bg.jpg')] md:bg-cover"
    >
      <img
        id="title"
        className="w-32 h-20 p-2 saturate-150 md:bg-white rounded-3xl"
        src={Logo}
        alt=""
      />
      <div
        id="loginPage"
        className="px-6 md:py-4 md:w-1/3 mx-auto md:bg-black rounded-sm md:bg-opacity-75"
      >
        <h2 className="text-4xl text-white font-bold mt-12">Sign In</h2>
        <div className="my-6 flex flex-col justify-center gap-6">
          <input
            onChange={(e) => setUser(e.target.value)}
            value={user}
            className={`border-2 pl-4 py-3 border-opacity-40 rounded-md bg-inherit
               bg-opacity-50 text-white ${
                 userError
                   ? "border-red-600 border-opacity-100"
                   : "border-gray-600"
               }`}
            type="text"
            placeholder="Email or mobile number"
            onBlur={validateUser}
          />
          {userError && (
            <p className="text-red-600 font-semibold text-sm -my-5">
              <span className="text-xl">&#x24CD; </span>
              {userError}
            </p>
          )}
          <div
            className={` flex border-2 pl-4 py-3 pr-4 items-center border-opacity-40 rounded-md bg-inherit bg-gray-900 
              bg-opacity-50 text-white ${
                passError
                  ? "border-red-600 border-opacity-100"
                  : "border-gray-600"
              }`}
          >
            <input
              className="outline-none bg-transparent w-full"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              type={show ? "password" : "text"}
              placeholder="Password"
              onBlur={validatePass}
            />
            <div onClick={togglePassword} className="h-6 w-6 cursor-pointer">
              <img
                className={`${show ? "block" : "hidden"}`}
                src={Hiding}
                alt="Show"
              />
              <img
                className={`${show ? "hidden" : "block"}`}
                src={Showing}
                alt="Hide"
              />
            </div>
          </div>
          {passError && (
            <p className="text-red-600 font-semibold text-sm -my-5">
              <span className="text-xl">&#x24CD; </span>
              {passError}
            </p>
          )}

          <button
            onClick={checkUser}
            className="bg-[#f50418] py-2 -mb-3 rounded-sm text-white hover:bg-opacity-80 font-semibold"
          >
            Sign In
          </button>
          <p className="text-[#524b4b] bg-opacity-70 font-medium text-center ">
            OR
          </p>
          <button className="bg-[#524b4b] bg-opacity-80 hover:bg-opacity-60 py-2 -mt-3 rounded-sm text-white font-semibold">
            Use a sign-in code
          </button>
          <p className="text-white text-center font-semibold cursor-pointer underline">
            Forgot password?
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="w-5 h-5 cursor-pointer accent-red-600 "
            type="checkbox"
          />
          <span className="text-white font-medium">Remember me</span>
        </div>
        <p className="text-gray-500 font-light text-sm my-3">
          New to Netflix?
          <a className="text-white font-semibold" href="">
            Sign up now
          </a>
        </p>
        <p className="text-gray-500 text-xs">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
        <a className="text-blue-600 text-xs underline" href="">
          Learnmore
        </a>
      </div>
    </div>
  );
};
export default Login;
