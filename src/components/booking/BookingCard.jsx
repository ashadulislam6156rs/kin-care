import React from "react";
import {
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Timer,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BookingCard = ({ booking }) => {
 console.log(booking);
 

  const getCategoryGradient = (category) => {
    const gradients = {
      "Baby Care": "from-[#657EFF] to-[#9836FF]",
      "Elderly Care": "from-[#9836FF] to-[#221F3F]",
      "Medical Care": "from-[#221F3F] to-[#657EFF]",
    };
    return gradients[category] || "from-[#657EFF] to-[#9836FF]";
  };


  const gradient = getCategoryGradient(booking.category);
  return (
    <div
      className="overflow-hidden shadow-md p-4 rounded-lg transition-all duration-300 
               hover:shadow-brand-lg group"
    >
      <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-5">
        {/* Image Section */}
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={booking.image}
            alt={booking.title}
            width={70}
            height={70}
            className="w-full h-full object-cover 
                     md:group-hover:scale-110 transition-transform duration-500"
          />

          {/* Category */}
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full 
                      bg-gradient-to-r ${gradient} text-white 
                      text-xs sm:text-sm font-semibold shadow`}
          >
            {booking.category}
          </span>
        </div>

        {/* Content Section */}
        <div className=" flex flex-col justify-between gap-6">
          {/* Title & Info */}
          <div>
            <h3
              className="text-lg sm:text-xl lg:text-2xl font-bold 
                       text-foreground mb-3 
                       group-hover:text-accent transition-colors"
            >
              {booking.title.length > 18
                ? booking.title.slice(0, 18) + "..."
                : booking.title}
            </h3>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(booking.selectedDate).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>

              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {booking.selectedTime}
              </div>

              <div className="flex items-center gap-1.5">
                <Timer className="w-4 h-4" />
                {booking.duration} days
              </div>
            </div>
          </div>

          {/* Footer */}
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between 
                        gap-4 pt-4 border-t border-border"
          >
            {/* Cost */}
            <div>
              <p
                className="text-2xl sm:text-3xl font-bold 
                          bg-gradient-to-r from-[#657EFF] to-[#9836FF] 
                          bg-clip-text text-transparent"
              >
                ৳{booking.totalCost.toLocaleString()}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href={`/services/${booking.serviceId}`}
                className="w-full sm:w-auto px-5 py-2.5 
                         bg-gradient-to-r from-[#657EFF] to-[#9836FF] 
                         text-white rounded-lg font-semibold 
                         hover:shadow-brand-lg hover:scale-[1.03] 
                         transition-all"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
