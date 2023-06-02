import { useState } from "react";
import { useNavigate } from "react-router-dom";
import google from "../assets/google.png"
import spider from "../assets/spider.jpg";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import GoogleLogin from "./Login/GoogleLogin";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = { email, password };

    dispatch(login(data, navigate));
  };

  const handleRegis =()=> {
    navigate("/register")
  }

  return (
    <div className="pt-0 text-white">
      <div className="lg:grid grid-cols-2">
        <div className="hidden lg:block">
          <img src={spider} class="h-[800px] w-full" />
        </div>
        <div className="mx-auto grid justify-items-center pt-36">
          <div className="">
            <h1 className="md:text-5xl text-2xl font-bold">
              Create an Account
            </h1>
            <p className="pb-5 lg:pb-7">
              Get started for best watch film experience with NETPLIG
            </p>
            <form onSubmit={onSubmit} className="mx-auto">
              <div className="mb-3 lg:mb-7">
                <label>
                  <p>Email</p>
                </label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 ml-2 w-full xl:w-[500px] rounded-md pl-2 h-10 text-white text-lg bg-transparent border border-red-700"
                />
              </div>

              <div className="mb-3 lg:mb-7">
                <label htmlFor="password">
                  <p>Password</p>
                </label>
                <input
                  id="password"
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 ml-2 w-full xl:w-[500px] rounded-md pl-2 h-10 text-white text-lg bg-transparent border border-red-700"
                />
              </div>
              <button
                type="submit"
                className="bg-subMain w-full mx-auto py-2 ml-2 mt-3"
              >
                Sign Up
              </button>
              <div>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
                <div className="grid mx-auto justify-center">
                  <GoogleLogin buttonText={"Login with Google"} />
                </div>
              </div>
            </form>
            <p className="text-center mt-7 mb-7">
              Dont have account ?{" "}
              <span
                className="text-subMain"
                onClick={() => handleRegis(Login.i)}
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
