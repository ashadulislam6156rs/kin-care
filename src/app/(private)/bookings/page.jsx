"use client";

import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Mail,
  DollarSign,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Package,
  Timer,
  User,
  ChevronDown,
  Filter,
  Search,
} from "lucide-react";
import BookingCard from "@/components/booking/BookingCard";
import Loading from "@/components/Loading/Loading";

const Bookings = () => {
  const { user } = useAuth();
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/api/bookings?email=${user?.email}`);
      return res.data;
    },
  });

 

  const displayBookings = bookings;

  


  if (isLoading) {
    return (
      <Loading></Loading>
    );
  }

  return (
    <div className="bg-background py-8 ">
      <div className="max-w-7xl px-5 md:px-7 mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#657EFF] to-[#9836FF] bg-clip-text text-transparent">
              Bookings
            </span>
          </h1>
          {/* <p className="text-muted-foreground text-lg">
            Manage and track all your care service bookings
          </p> */}
        </div>

        {/* Filters and Search */}
        {/* <div className="cardPrimary mb-8 p-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search bookings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all text-foreground"
              />
            </div>

         
            <div className="flex gap-2 flex-wrap">
              {["all", "Confirmed", "Pending", "Cancelled"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    filterStatus === status
                      ? "bg-gradient-to-r from-[#657EFF] to-[#9836FF] text-white shadow-brand"
                      : "bg-muted text-muted-foreground hover:bg-accent/10"
                  }`}
                >
                  {status === "all" ? "All" : status}
                </button>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bookings Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="cardPrimary p-6 hover:shadow-brand transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#657EFF] to-[#9836FF] flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {displayBookings.length}
                </p>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
              </div>
            </div>
          </div>

          <div className="cardPrimary p-6 hover:shadow-brand transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#657EFF] to-[#9836FF] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {
                    displayBookings.filter(
                      (b) => b.bookingStatus === "Confirmed",
                    ).length
                  }
                </p>
                <p className="text-sm text-muted-foreground">Confirmed</p>
              </div>
            </div>
          </div>

          <div className="cardPrimary p-6 hover:shadow-brand transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#9836FF] to-[#221F3F] flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {
                    displayBookings.filter((b) => b.bookingStatus === "Pending")
                      .length
                  }
                </p>
                <p className="text-sm text-muted-foreground">Pending</p>
              </div>
            </div>
          </div>

          <div className="cardPrimary overflow-hidden p-6 hover:shadow-brand transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#221F3F] to-[#657EFF] flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  $
                  {(
                    displayBookings.reduce(
                      (sum, b) => sum + Number(b.totalCost),
                      0,
                    ) / 122.4
                  ).toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">Total</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        {displayBookings && (
          <div className="grid md:grid-cols-4 gap-6">
            {displayBookings.map((booking, index) => (
              <BookingCard key={index} booking={booking}></BookingCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;
