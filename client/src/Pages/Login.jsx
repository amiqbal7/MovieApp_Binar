import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-button";
import spider from "../assets/spider.jpg";
import { gapi } from "gapi-script";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  
    dispatch(login(email, password, navigate));
  };
  const handleClickRegister = () => {
    navigate("/Register");
  };
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  // const navigate = useNavigate();


  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   axios
  //     .post("http://localhost:4000/login", {
  //       email: email,
  //       password: password,
  //     })
  //     .then((response) => {
  //       if (response.data.login) {
  //         localStorage.setItem("token", response.data.token);
  //         navigate(`/Home`);
  //         console.log(response.data)
  //       } else {
  //         setLoginStatus(response.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoginStatus("User not found");
  //     });
  // };

  // gapi.load("client:auth2", () => {
  //   gapi.client.init({
  //     clientId:
  //       "244079299803-s1muptkgn4u2ubr43gge4o122r2aaph4.apps.googleusercontent.com",
  //     plugin_name: "chat",
  //   });
  // });
  // const [loginSuccess, setLoginSuccess] = useState(false);
  // const [loginError, setLoginError] = useState(false);

  // const onSuccess = (response) => {
  //   const token = response.getAuthResponse().id_token;
  //   localStorage.setItem("token", token);
  //   console.log("SUKSES", response);
  //   setTimeout(() => {
  //     navigate("/Home");
  //   }, 1000);
  // };

  // const onFailure = (response) => {
  //   console.log("FAILED", response);
  // };

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
            {/* {loginSuccess && (
              <div className="login-message text-white mt-2 pl-2 py-1 rounded-sm bg-green-500">
                <p className="opacity-100">Login Success</p>
              </div>
            )}
            {loginError && (
              <div className="login-messageerror text-red-500 font-medium mt-2">
                Login Failed
              </div>
            )} */}
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
              {/* <h1 className="text-red-600 py-3 text-center">{loginStatus}</h1> */}
              <div>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                  </p>
                </div>
                {/* <div className="">
                  <GoogleLogin
                    clientId="244079299803-s1muptkgn4u2ubr43gge4o122r2aaph4.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <GoogleButton
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                      >
                        Sign in with Google
                      </GoogleButton>
                    )}
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    className=""
                  />
                </div> */}
              </div>
            </form>
            <p className="text-center mt-28 mb-7">
              Dont have account ?{" "}
              <span
                className="text-subMain"
                onClick={() => handleClickRegister(Login.i)}
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
