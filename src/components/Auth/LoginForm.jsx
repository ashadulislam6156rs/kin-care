"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MailIcon, LockKeyhole, Eye, EyeOff, LogIn } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");

    // NextAuth signIn function
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    });
    if (res?.ok) {
      alert("Login successful");
    }

    if (res?.error) {
      setError("Invalid email or password!");
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto ">
      <div className="m-5 md:bg-gradient-to-br overflow-hidden md:from-slate-50 md:via-emerald-50 md:to-teal-50 shadow-2xl rounded-2xl flex flex-col lg:flex-row items-center justify-center font-sans">
        <title>Create Account | SmartGarden</title>
        {/* Right Side: Visual Section */}
        <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center relative p-8">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 dark:bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 dark:bg-purple-500/10 blur-3xl"></div>

          <div className="z-10 text-center">
            <div className="avatar mb-6">
              <div className="w-64 h-64 rounded-xl shadow-2xl dark:shadow-gray-950/50 ring ring-primary dark:ring-blue-500 ring-offset-base-100 dark:ring-offset-gray-800 ring-offset-2 overflow-hidden mx-auto">
                <img
                  src="https://i.pinimg.com/736x/f5/8b/a7/f58ba7997d773b6897a1110f2d3479f9.jpg"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-400 mb-3 tracking-tight">
                Grow Your Joy!
              </h2>

              <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto text-sm leading-relaxed">
                Sign in to access your <strong>SmartGarden</strong> account,
                track your plant orders, and explore new garden products.
              </p>
            </div>
          </div>
        </div>

        {/* Left Item */}
        <div className="w-full flex-1 mx-auto p-6 bg-white shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Sign In to Account
            </h2>
            <p className="text-gray-500 text-sm">
              Welcome back! Please enter your details to sign in
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {error && (
              <p className="bg-red-50 text-red-500 p-3 rounded-lg text-sm text-center font-medium">
                {error}
              </p>
            )}

            {/* Username/Email Field */}
            <div>
              <Label className="mb-2 block text-sm font-semibold text-gray-700">
                Email
              </Label>
              <InputGroup>
                <InputGroupInput
                  {...register("email", { required: "email is required" })}
                  type="text"
                  placeholder="Enter your email"
                />
                <InputGroupAddon>
                  <MailIcon className="text-emerald-500 w-5 h-5" />
                </InputGroupAddon>
              </InputGroup>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label className="text-sm font-semibold text-gray-700">
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-emerald-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <InputGroup>
                <InputGroupInput
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <InputGroupAddon>
                  <LockKeyhole className="text-emerald-500 w-5 h-5" />
                </InputGroupAddon>
                <InputGroupAddon
                  className="cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  align="inline-end"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </InputGroupAddon>
              </InputGroup>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button
              disabled={loading}
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 h-11"
            >
              {loading ? (
                <Button
                  className="w-full flex items-center bg-transparent gap-2 "
                  size="sm"
                  variant="outline"
                  disabled
                >
                  <Spinner className="text-green-600" />
                  Signing in
                </Button>
              ) : (
                <span className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" /> Sign In
                </span>
              )}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-xs uppercase">
                Or continue with
              </span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 border-gray-200 h-11"
            >
              <FcGoogle className="w-5 h-5" />
              Google
            </Button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-8">
            Don not have an account?{" "}
            <Link
              href="/register"
              className="text-emerald-600 font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
