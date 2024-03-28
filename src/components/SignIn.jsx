import { useState } from "react";
import { Header } from "../components/index";
import { GoEye, GoEyeClosed } from "react-icons/go";
import google from "../assets/google.svg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [password, setPassword] = useState(""); //password
  const [showPassword, setShowPassword] = useState(false); //password
  // password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // Check if passwords match while typing
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };
  return (
    <>
      <Header />
      <div className="w-full h-[800px] lg:h-[100dvh] flex flex-col justify-center bg-blue-900">
        <div className="w-4/5 md:w-3/5 mx-auto p-5 md:px-[10%] md:py-20 flex flex-col gap-5 md:gap-5 bg-white border-black">
          <form action="" className="flex flex-col gap-5">
            <label className="flex flex-col">
              First name
              <input
                type="text"
                name="first_name"
                required
                autoComplete="none"
                placeholder="Enter first name"
                className="bg-transparent rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please input first name here")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
            </label>
            <label className="flex flex-col">
              Email address
              <input
                type="email"
                name="first_name"
                required
                autoComplete="none"
                placeholder="Enter email address"
                className="bg-transparent rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please input first name here")
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
            </label>
            <label className="flex flex-col">
              Password
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  autoComplete="none"
                  placeholder="Enter password here"
                  className="w-full bg-transparent rounded-[4px] border border-black outline-none placeholder:text-xs px-2 py-2"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <span
                  className="absolute top-1 right-3  transform translate-y-1/2 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <GoEye /> : <GoEyeClosed />}
                </span>
              </div>
            </label>
            <div className="flex justify-between">
              <div className="flex flex-row gap-5">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="border border-black"
                />
                Remember me
              </div>
              <p className="font-roboto underline text-blue-900 font-normal">
                <Link>Forget password</Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-1/2 ms-auto bg-blue-900 text-white font-semibold py-2 rounded-[4px] font-roboto leading-normal"
            >
              Sign In
            </button>
          </form>

          <div className="flex flex-col gap-4 items-center">
            <p className="font-inter leading-none text-black">Or Signup with</p>
            <div className="w-full flex flex-row justify-center gap-3 py-2 rounded-md border border-black cursor-pointer">
              <img src={google} alt="google" />
              <p className="text-2xl font-outfit font-medium">Google</p>
            </div>
            <p className="font-roboto font-normal">
              Don`t have an account?{" "}
              <span className="text-violet-950 cursor-pointer">
                <Link to="/signUp" className="cursor-pointer">
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
