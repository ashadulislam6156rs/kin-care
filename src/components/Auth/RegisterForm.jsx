"use client";

import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  User,
  MailIcon,
  LockKeyhole,
  Eye,
  EyeOff,
  Phone,
  ImageIcon,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { FiCheckCircle } from "react-icons/fi";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";


import axios from "axios";
import { Spinner } from "../ui/spinner";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { IoCloudUploadOutline } from "react-icons/io5";



const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // compatible password validation
  const passwordValidation = {
    required: "Password is required",
    minLength: { value: 6, message: "Password must be at least 6 characters!" },
    validate: {
      hasUpper: (v) =>
        /[A-Z]/.test(v ?? "") || "Must include at least 1 uppercase letter!",
      hasLow: (v) =>
        /[a-z]/.test(v ?? "") || "Must include at least 1 lowercase letter!",
      hasNum: (v) =>
        /\d/.test(v ?? "") || "Must include at least 1 number!",
    },
  };
  

  const handleUserRegister = async (data) => {

    setLoading(true);

    try {
      let finalPhotoURL = "";

      if (data.photoURL) {
        const formData = new FormData();
        formData.append("image", data.photoURL);

        const imgResponse = await axios.post(
          `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API_KEY}`,
          formData,
        );
        finalPhotoURL = imgResponse.data.data.url;
       
      }

      const userData = {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        phone: data.phone,
        photoURL: finalPhotoURL,
      };

        const response = await axios.post("/api/users", userData);
        
        if (response) {
          toast.success("Registration Successful!");
          setLoading(false);
      }

      // User direct login
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: "/",
      });
      if (res?.error) {
        toast.error("Invalid email or password!");
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        toast.error("Registration failed:");
      } else {
        toast.error("An unknown error occurred");
      }
    }
  };

  
  const handleImageChange = (file) => {
    setValue("photoURL", file);
    if (file) {
      setPreview(file.name);
    }
  };

  


  return (
    <>
      {/* Google Sign Up */}
      <div className="flex justify-center items-center mb-3">
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          variant="outline"
          className="w-full max-w-sm hover:bg-gray-200 cursor-pointer flex items-center justify-center gap-2"
        >
          <FcGoogle className="w-5 h-5" />
          Sign up with Google
        </Button>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="text-gray-500 font-medium">OR</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <form onSubmit={handleSubmit(handleUserRegister)} className="space-y-3">
        <div className="flex flex-col md:flex-row justify-center gap-5">
          {/* Left Side */}
          <div className="grid w-full max-w-sm gap-3">
            {/* Full Name */}
            <div>
              <Label className="mb-2 text-sm font-semibold text-gray-700">
                Full name
              </Label>
              <InputGroup>
                <InputGroupInput
                  {...register("fullName", { required: true })}
                  type="text"
                  placeholder="Enter full name"
                />
                <InputGroupAddon>
                  <User className="text-accent" />
                </InputGroupAddon>
              </InputGroup>
              {errors.fullName && (
                <p className="text-red-500 pt-2 text-sm font-medium">
                  Full Name is required
                </p>
              )}
            </div>
          </div>

          {/* Right Side */}
          <div className="grid w-full max-w-sm gap-3">
            {/* Email */}
            <div>
              <Label className="mb-2 text-sm font-semibold text-gray-700">
                Email
              </Label>
              <InputGroup>
                <InputGroupInput
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                />
                <InputGroupAddon>
                  <MailIcon className="text-accent" />
                </InputGroupAddon>
              </InputGroup>
              {errors.email && (
                <p className="text-red-500 pt-2 text-sm font-medium">
                  Email is required
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Password */}
        <div>
          <Label className="mb-2 text-sm font-semibold text-gray-700">
            Password
          </Label>
          <InputGroup>
            <InputGroupInput
              {...register("password", passwordValidation)}
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
            />
            <InputGroupAddon>
              <LockKeyhole className="text-accent" />
            </InputGroupAddon>
            <InputGroupAddon
              className="cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              align="inline-end"
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </InputGroupAddon>
          </InputGroup>
          {errors.password && (
            <p className="text-red-500 pt-2 text-sm font-medium">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <Label className="mb-2 text-sm font-semibold text-gray-700">
            Phone
          </Label>
          <InputGroup>
            <InputGroupInput
              type="tel"
              {...register("phone", { required: true })}
              placeholder="+880.."
            />
            <InputGroupAddon>
              <Phone className="text-accent" />
            </InputGroupAddon>
          </InputGroup>
          {errors.phone && (
            <p className="text-red-500 pt-2 text-sm font-medium">
              Phone number is required
            </p>
          )}
        </div>

        {/* Upload Image */}
        <div>
          <Label className="block w-full text-sm font-semibold text-gray-700 mb-2">
            Upload Image (Optional)
          </Label>

          <label
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              const file = e.dataTransfer.files[0];
              handleImageChange(file);
            }}
            className="inline-block w-full"
          >
            <div className="flex justify-center items-center gap-2 btnPrimary text-white px-2 py-2 rounded-lg cursor-pointer">
              {preview ? (
                <p className="flex gap-2 text-sm md:text-base items-center text-white">
                  <FiCheckCircle /> Image selected successfully
                </p>
              ) : (
                <>
                  <IoCloudUploadOutline />
                  <span className="text-[10px] md:text-base">
                    Upload Image (Click or Drag & Drop)
                  </span>
                </>
              )}

              <input
                type="file"
                accept="image/*"
                className="hidden"
                {...register("photoURL")}
                onChange={(e) => handleImageChange(e.target.files[0])}
              />
            </div>
          </label>

          {/* Preview */}
          {preview && (
            <div className="mt-2 hidden md:block">
              <p className="text-green-600">{preview}</p>
            </div>
          )}
        </div>

        {/* Submit */}
        {loading ? (
          <Button
            className="w-full md:h-11 justify-center btnSecondary text-white flex items-center"
            size="sm"
            variant="outline"
            disabled
          >
            <Spinner />
            Submit
          </Button>
        ) : (
          <Button
            type="submit"
            className="w-full mt-1 btnSecondary md:mt-6 md:h-11 text-sm font-semibold"
          >
            Create Account
          </Button>
        )}
      </form>

      {/* Already have account */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <Link
          href={"/login"}
          className="text-accent font-bold hover:underline transition-colors"
        >
          Sign In
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
