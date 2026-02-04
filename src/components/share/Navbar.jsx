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
import { FiUserPlus } from "react-icons/fi";
import useAuth from "@/hooks/useAuth";


const Navbar = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  // ** Active Path
  const pathname = usePathname();

const menuItems = [
  { title: "Home", url: "/", isPrivate: false },
  { title: "Services", url: "/services", isPrivate: false },
  { title: "Booking", url: "/booking", isPrivate: true },
  { title: "My Bookings", url: "/my-bookings", isPrivate: true },
  { title: "About", url: "/about", isPrivate: false },
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
          {isAuthenticated ? (
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
          ) : (
            <nav className="hidden md:flex flex-1 items-center gap-8">
              {menuItems
                .filter((item) => !item.isPrivate)
                .map((item) => (
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
          )}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center  gap-4">
            <LogInButton></LogInButton>
            {isAuthenticated ? (
              ""
            ) : (
              <Button
                size="sm"
                onClick={() => handleNavigation("/register")}
                className=" cursor-pointer btnSecondary text-white"
              >
                <FiUserPlus className="text-xs" />
                Sign Up
              </Button>
            )}
          </div>
        </div>
        {/* ======> mobile */}
        <div className="md:hidden flex items-center gap-1">
          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                size="icon"
                className="text-gray-700 hover:bg-muted-foreground transition-colors duration-500 ease-in-out bg-white hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[280px] bg-gray-50">
              <SheetHeader>
                <Logo></Logo>
              </SheetHeader>

              <div className="mt-8 flex flex-col gap-6">
                {/* Mobile Nav */}
                {isAuthenticated ? (
                  <nav className="flex flex-col gap-1">
                    {menuItems.map((item) => (
                      <button
                        key={item.url}
                        onClick={() => handleNavigation(item.url)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${isActive(item.url) ? "text-secondary font-semibold" : "hover:bg-secondary-foreground hover:text-primary"}`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </nav>
                ) : (
                  <nav className="flex flex-col gap-1">
                    {menuItems
                      .filter((item) => !item.isPrivate)
                      .map((item) => (
                        <button
                          key={item.url}
                          onClick={() => handleNavigation(item.url)}
                          className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${isActive(item.url) ? "text-secondary font-semibold" : "hover:bg-secondary-foreground hover:text-primary"}`}
                        >
                          {item.title}
                        </button>
                      ))}
                  </nav>
                )}

                {/* Mobile Auth */}
                <div className="border-t pt-4 space-y-2 px-2">
                  <LogInButton></LogInButton>
                  {isAuthenticated ? (
                    ""
                  ) : (
                    <Button
                      size="sm"
                      onClick={() => handleNavigation("/register")}
                      className="w-full cursor-pointer btnSecondary text-white"
                    >
                      <FiUserPlus className="text-xs" />
                      Sign Up
                    </Button>
                  )}
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
