"use client";

import axios from "axios";
import React from "react";

const Booking = () => {

  return (
    <div className="max-w-4xl mx-auto px-5 md:px-7">
      <h1>Booking</h1>
      {/* Booking Form */}
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Date
          </label>
          <input
            type="date"
            // value={selectedDate}
            // onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            min={new Date().toISOString().split("T")[0]}
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Time
          </label>
          <select
            // value={selectedTime}
            // onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Choose a time</option>
            <option value="morning">Morning (8 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
            <option value="evening">Evening (4 PM - 8 PM)</option>
            <option value="night">Night (8 PM - 12 AM)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Enter Duration
          </label>
          <input
            type="text"
            // value={selectedDate}
            placeholder="e.g. 8 hours"
            // onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Select Location
          </label>
          <select
            // value={selectedLocation}
            // onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Choose a Location</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Barishal">Barishal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Cumilla">Cumilla</option>
            <option value="Bogura">Bogura</option>
            <option value="Jessore">Jessore</option>
            <option value="Narayanganj">Narayanganj</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Enter Address
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none focus:border-transparent"
            placeholder="e.g. ABC Tower, Road 12, Gulshan 1, Dhaka 1212, Bangladesh"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Booking;
