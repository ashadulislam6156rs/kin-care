"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IoLogOutOutline } from "react-icons/io5";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Logo";
import LogInButton from "./LogInButton";

const Navbar = () => {
  const router = useRouter();
  //   const { isAuthenticated, logout, user } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = { name: "ashadul", email: "ashadulislam6156rs@gmail.com" };

  // ** Active Path
  const pathname = usePathname();

  const menuItems = [
    { title: "Home", url: "/" },
    { title: "Service", url: "/service" },
    { title: "Booking", url: "/booking" },
    { title: "My Booking", url: "/my-booking" },
    { title: "About", url: "/about" },
  ];
  const isActive = (url) => pathname === url;

  const handleNavigation = (url) => {
    router.push(url);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 bg-popover z-50 w-full border-b shadow-md">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-5 md:px-7">
        {/* Logo */}
        <Logo></Logo>

        <div className="flex gap-10 items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.url}
                href={item.url}
                className={`text-sm font-medium transition-colors
    ${
      isActive(item.url)
        ? "text-accent font-semibold border-b-2 border-accent pb-1"
        : "text-gray-700 hover:text-accent"
    }`}
              >
                {item.title}
              </Link>
            ))}
          </nav>
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center  gap-4">
            <LogInButton></LogInButton>
            <Button
              size="sm"
              onClick={() => handleNavigation("/register")}
              className=" cursor-pointer hover:bg-accent text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
        {/* ======> mobile */}
        <div className="md:hidden flex items-center gap-1">
          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-green-600"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] bg-gray-50">
              <SheetHeader>{/* <Logo></Logo> */}</SheetHeader>

              <div className="mt-8 flex flex-col gap-6">
                {/* Mobile Nav */}
                <nav className="flex flex-col gap-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.url}
                      onClick={() => handleNavigation(item.url)}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition
    ${
      isActive(item.url)
        ? "text-secondary font-semibold"
        : "hover:bg-secondary-foreground hover:text-primary"
    }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>

                {/* Mobile Auth */}
                <div className="border-t pt-4 space-y-2 px-2">
                  <LogInButton></LogInButton>
                  <button>LogIn</button>
                  <Button
                    className="w-full hover:bg-accent text-white"
                    onClick={() => handleNavigation("/register")}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
