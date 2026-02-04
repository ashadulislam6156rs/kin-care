"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { RxCrossCircled } from "react-icons/rx";
import { toast } from "react-toastify";

const Booking = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const [coverageData, setCoverageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const { user } = useAuth();

  useEffect(() => {
    axios.get("/coverage.json").then((res) => {
      setCoverageData(res.data);
    });
  }, []);

  const { data: service, isLoading } = useQuery({
    queryKey: ["service", params?.bookingId],
    queryFn: async () => {
      const res = await axios.get(`/api/services/${params?.bookingId}`);
      return res.data;
    },
  });

  const divisions = [...new Set(coverageData.map((d) => d.division))];

  const selectedDivision = useWatch({ control, name: "selectedDivision" });
  const durationTime = useWatch({ control, name: "duration" });

  const serviceCharge = 300;

  useEffect(() => {
    if (durationTime) {
      setValue("totalCost", durationTime * serviceCharge);
    }
  }, [durationTime, setValue]);

  const handleDistricts = (division) => {
    if (!division) return [];
    return coverageData
      .filter((r) => r.division === division)
      .map((d) => d.district);
  };

  const bookTime = [
    "Morning (8 AM - 12 PM)",
    "Afternoon (12 PM - 4 PM)",
    "Evening (4 PM - 8 PM)",
    "Night (8 PM - 12 AM)",
  ];

  const handleBookNow = (data) => {
    const bookingData = {
      ...data,
      title: service.title,
      category: service.category,
      features: service.features,
      image: service.image,
      bookingStatus: "Pending",
      createdAt: new Date(),
      email: user?.email,
    };
    setLoading(true);

    axios
      .post("/api/bookings", bookingData)
      .then((res) => {
        if (res.data?.message) {
          toast.success(res.data?.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        toast.error(err.message)
        setLoading(false)
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Service Booking
        </h1>

        <form
          onSubmit={handleSubmit(handleBookNow)}
          className="bg-white shadow-lg rounded-2xl p-6 md:p-10 space-y-6"
        >
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Date */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Select Date
              </label>
              <input
                type="date"
                {...register("selectedDate", { required: true })}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.selectedDate && (
                <div className="flex gap-1 mt-1 items-center text-red-600 text-sm">
                  <RxCrossCircled />
                  <p>Date is require</p>
                </div>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Select Time
              </label>
              <select
                {...register("selectedTime", { required: true })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Choose a time</option>
                {bookTime.map((time, i) => (
                  <option key={i} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.selectedTime && (
                <div className="flex gap-1 mt-1 items-center text-red-600 text-sm">
                  <RxCrossCircled />
                  <p>Time is require</p>
                </div>
              )}
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Duration (hours)
              </label>
              <input
                type="number"
                {...register("duration", {
                  required: true,
                  valueAsNumber: true,
                })}
                placeholder="e.g. 2"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              {errors.duration && (
                <div className="flex gap-1 mt-1 items-center text-red-600 text-sm">
                  <RxCrossCircled />
                  <p>Duration is require</p>
                </div>
              )}
            </div>

            {/* Division */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Division
              </label>
              <select
                {...register("selectedDivision", { required: true })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Choose your division</option>
                {divisions.map((division, i) => (
                  <option key={i} value={division}>
                    {division}
                  </option>
                ))}
              </select>
              {errors.selectedDivision && (
                <div className="flex gap-1 mt-1 items-center text-red-600 text-sm">
                  <RxCrossCircled />
                  <p>Division is require</p>
                </div>
              )}
            </div>

            {/* District */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                District
              </label>
              <select
                {...register("selectedDistrict", { required: true })}
                disabled={!selectedDivision}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none "
              >
                <option value="">Choose division first</option>
                {handleDistricts(selectedDivision).map((district, i) => (
                  <option key={i} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.selectedDistrict && (
                <div className="flex gap-1 mt-1 items-center text-red-600 text-sm">
                  <RxCrossCircled />
                  <p>Districkt is require</p>
                </div>
              )}
            </div>

            {/* Total Cost */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Total Cost (৳)
              </label>
              <input
                type="number"
                {...register("totalCost", { required: true })}
                readOnly
                placeholder="First enter duration.."
                className="w-full px-4 py-2 border rounded-lg font-semibold"
              />
              {errors.totalCost && (
                <div className="flex gap-1 mt-1 items-center text-red-600 text-sm">
                  <RxCrossCircled />
                  <p>Cost is require</p>
                </div>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Service Address
            </label>
            <textarea
              {...register("address", { required: true })}
              className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
              placeholder="House, Road, Area, City"
            />
            {errors.address && (
              <div className="flex gap-1 mt-1 items-center text-red-600 text-sm">
                <RxCrossCircled />
                <p>Address is require</p>
              </div>
            )}
          </div>

          {/* Button */}
          <div className="flex justify-center pt-4">
            {loading ? (
              <Button
                className="px-10 btnSecondary py-6 text-lg rounded-xl"
                disabled
              >
                <Spinner />
                Processing....
              </Button>
            ) : (
              <Button
                type="submit"
                className="px-10 btnSecondary py-6 text-lg rounded-xl"
              >
                Confirm Booking
              </Button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
