import React, { useState } from "react";
import axios from "axios";
import spider from "../assets/spider.jpg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/authActions";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(""); // Pesan kesalahan untuk nama
  const [emailError, setEmailError] = useState(""); // Pesan kesalahan untuk email
  const [passwordError, setPasswordError] = useState(""); // Pesan kesalahan untuk password

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true; // Validasi keseluruhan

    // Validasi nama
    if (name.trim() === "") {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    // Validasi email
    if (email.trim() === "") {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validasi password
    if (password.trim() === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      setPasswordError("Invalid password format");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      const data = { email, password, name };
      dispatch(register(data));
      navigate("/Login");
    }
  };

  return (
    <div className="text-white">
      <div className="lg:grid grid-cols-2">
        <div className="hidden lg:block">
          <img src={spider} className="h-[800px] w-full" alt="Spider" />
        </div>
        <div className="mx-auto grid justify-items-center pt-36">
          <div className="">
            <h1 className="md:text-5xl text-2xl font-bold">
              Create an Account
            </h1>
            <p className="pb-5 lg:pb-7">
              Get started for the best watch film experience with NETPLIG
            </p>
            <form onSubmit={handleSubmit} className="mx-auto">
              <div className="mb-3 lg:mb-7">
                <label htmlFor="name">
                  <p>Name</p>
                </label>
                <input
                  id="name"
                  value={name}
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-1 ml-2 w-full xl:w-[500px] rounded-md pl-2 h-10 text-white text-lg bg-transparent border ${
                    nameError && "border-red-700"
                  }`}
                />
                {nameError && <p className="text-red-700">{nameError}</p>}
              </div>
              <div className="mb-3 lg:mb-7">
                <label htmlFor="email">
                  <p>Email</p>
                </label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 ml-2 w-full xl:w-[500px] rounded-md pl-2 h-10 text-white text-lg bg-transparent border ${
                    emailError && "border-red-700"
                  }`}
                />
                {emailError && <p className="text-red-700">{emailError}</p>}
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
                  className={`mt-1 ml-2 w-full xl:w-[500px] rounded-md pl-2 h-10 text-white text-lg bg-transparent border ${
                    passwordError && "border-red-700"
                  }`}
                />
                {passwordError && <p className="text-red-700">{passwordError}</p>}
              </div>
              <button
                type="submit"
                className="bg-subMain w-full mx-auto py-2 ml-2 mt-3"
              >
                Sign Up
              </button>
              <p className="text-sm ml-2 text-center pt-5">
                You agree to our terms and policies
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
