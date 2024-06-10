import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ControlledInput } from "../../common";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { CircularProgress } from "../../common/components";
import { useNavigate } from "react-router-dom";
import { APP_URL } from "../../config";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password too short"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const { handleSubmit, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log("Register Data", data);
    reset();
  };

  const navigateToLogin = () => {
    navigate(APP_URL.LOGIN);
  };

  return (
    <div className="h-screen w-screen relative bg-img2 bg-no-repeat bg-cover bg-center bg-fixed ">
      <form
        onSubmit={handleSubmit(submitForm)}
        className="p-4 absolute w-96 top-[50%] left-[20%] -translate-x-[20%] -translate-y-[50%] "
      >
        <h1 className="text-4xl mb-12 text-center text-white font-semibold  ">
          Register
        </h1>
        <ControlledInput
          control={control}
          type={"email"}
          name={"email"}
          placeholder={"Email"}
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
        <ControlledInput
          control={control}
          type={showConfirmPassword ? "text" : "password"}
          name={"confirmPassword"}
          placeholder={"Confirm Password"}
          icon={
            showPassword ? (
              <FaRegEye
                onClick={() => setShowConfirmPassword(false)}
                className="cursor-pointer text-lg opacity-50"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShowConfirmPassword(true)}
                className="cursor-pointer text-lg opacity-50"
              />
            )
          }
        />
        {/* <span className="text-sm flex justify-end font-bold opacity-55 cursor-pointer mr-2">
          Forgot Password ?
        </span> */}
        <button
          disabled={!isLoading}
          className="w-full outline-none mb-4 px-4 mt-4 py-2 rounded-full shadow-xl bg-wooden-primary text-white font-bold  tracking-widest flex justify-center"
        >
          {isLoading ? (
            <div className="h-6 w-6 rounded-full animate-spin border-white border-y-2"></div>
          ) : (
            "Register"
          )}
        </button>
        <div className="text-sm text-center">
          Have an account ?{" "}
          <span
            className="font-semibold cursor-pointer"
            onClick={navigateToLogin}
          >
            Login
          </span>{" "}
          here
        </div>
      </form>
    </div>
  );
};

export default SignUp;
