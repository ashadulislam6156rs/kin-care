
import RegisterForm from "@/components/Auth/RegisterForm";
import { ArrowLeftFromLine } from "lucide-react";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className=" max-w-7xl mx-auto md:px-5">
      <Link
        className="px-4 mt-5 ml-5 flex w-fit text-sm items-center gap-2 py-2 btnPrimary text-white cursor-pointer rounded-md"
        href={"/"}
      >
        <ArrowLeftFromLine size={20} />
        Back home
      </Link>
      <div className="m-5 md:bg-gradient-to-br overflow-hidden md:from-slate-50 md:via-emerald-50 md:to-teal-50 shadow-2xl rounded-2xl flex flex-col lg:flex-row items-center justify-center font-sans">
        <title>Create Account | KinCare</title>

        {/* Right Side: Visual Section */}
        <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center justify-center relative p-8">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary/10 dark:bg-blue-500/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 dark:bg-purple-500/10 blur-3xl"></div>

          <div className="z-10 text-center">
            <div className="avatar mb-6">
              <div className="w-64 h-64 rounded-xl shadow-2xl dark:shadow-gray-950/50 ring ring-primary dark:ring-blue-500 ring-offset-base-100 dark:ring-offset-gray-800 ring-offset-2 overflow-hidden mx-auto">
                <img
                  src="https://i.pinimg.com/1200x/33/4d/cd/334dcdf0221e7530719fc1b917814aa4.jpg"
                  alt="Register Illustration"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-accent dark:text-accent mb-2">
              Welcome to KinCare!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm mx-auto">
              Join KinCare to order your favorite plants, flowers, or garden
              products online. Our team will verify your order and ensure timely
              delivery right to your doorstep.
            </p>
          </div>
        </div>
        {/* Left Side: Form Section */}
        <div className="w-full lg:w-1/2 max-w-2xl bg-white p-8 sm:p-10 overflow-hidden mb-8 lg:mb-0">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              Create Account
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm sm:text-base">
              Sign up to start managing your tuition experience seamlessly.
            </p>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
