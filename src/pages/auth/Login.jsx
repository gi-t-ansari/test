import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ControlledInput } from "../../common";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../../config";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password too short"),
  });

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log("Login Data", data);
    reset();
  };

  const navigateToRegister = () => {
    navigate(APP_URL.SIGNUP);
  };

  return (
    <div className="h-screen w-screen relative bg-img2 bg-no-repeat bg-cover bg-center bg-fixed ">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="p-4 absolute w-96 top-[50%] left-[20%] -translate-x-[20%] -translate-y-[50%] "
      >
        <h1 className="text-4xl mb-12 text-center text-white font-semibold  ">
          Login
        </h1>
        <ControlledInput
          control={control}
          type={"text"}
          name={"username"}
          placeholder={"Username"}
        />
        <ControlledInput
          control={control}
          type={showPassword ? "text" : "password"}
          name={"password"}
          placeholder={"Password"}
          icon={
            showPassword ? (
              <FaRegEye
                onClick={() => setShowPassword(false)}
                className="cursor-pointer text-lg opacity-50"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShowPassword(true)}
                className="cursor-pointer text-lg opacity-50"
              />
            )
          }
        />
        <span className="text-sm flex justify-end font-bold opacity-55 cursor-pointer mr-2">
          Forgot Password ?
        </span>
        <button className="w-full outline-none mb-4 px-4 mt-4 py-2 rounded-full shadow-xl bg-wooden-primary text-white font-bold  tracking-widest ">
          {isLoading ? (
            <div className="h-6 w-6 rounded-full animate-spin border-white border-y-2"></div>
          ) : (
            "Login"
          )}
        </button>
        <div className="text-sm text-center">
          Don't have an account ?{" "}
          <span
            className="font-semibold cursor-pointer"
            onClick={navigateToRegister}
          >
            Register
          </span>{" "}
          here
        </div>
      </form>
    </div>
  );
};

export default Login;
