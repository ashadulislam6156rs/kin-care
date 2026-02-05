"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import Loading from "@/components/Loading/Loading";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "react-toastify";
import { BookingDetailsDialog } from "@/components/booking/BookingDetails";

const MyBookings = () => {
  const { user } = useAuth();

  const { data: bookings, isLoading, refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axios.get(
        `/api/bookings/my-bookings?email=${user?.email}`,
      );
      return res.data;
    },
  });



  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "confirmed":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "completed":
        return "bg-accent/10 text-accent border-accent/30";
      case "cancelled":
        return "bg-destructive/10 text-destructive border-destructive/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleCancelBooking = async (bookingId) => {
    const updateInfo = {
      bookingId,
      bookingStatus: "Cancelled",
    };

    await axios
      .patch(`/api/bookings/my-bookings?email=${user?.email}`, updateInfo)
      .then(() => {
        toast.success("Booking Cancelled Successfully");
        refetch();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">My Bookings</h1>
        <p className="text-muted-foreground">
          View and manage all your service bookings
        </p>
      </div>

      {/* Desktop View - Table */}
      <div className="hidden lg:block bg-card rounded-lg shadow-sm border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="font-semibold text-foreground">
                Service
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Schedule
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Location
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Duration
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Amount
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Status
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookings?.length > 0 ? (
              bookings.map((booking, index) => (
                <TableRow
                  key={index}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <TableCell>
                    <div className="flex items-start gap-3">
                      <img
                        src={booking.image}
                        alt={booking.title}
                        className="w-16 h-16 rounded-lg object-cover border border-border"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          {booking.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {booking.category}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground">
                          {formatDate(booking.selectedDate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{booking.selectedTime}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-foreground">
                          {booking.selectedDistrict}, {booking.selectedDivision}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground ml-6">
                        {booking.address}
                      </p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm font-medium text-foreground">
                      {booking.duration} mins
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="font-semibold text-lg text-primary">
                      ৳{booking.totalCost?.toLocaleString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`${getStatusColor(booking.bookingStatus)} border`}
                    >
                      {booking.bookingStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2 items-center">
                      <BookingDetailsDialog
                        booking={booking}
                        trigger={
                          <Button
                            className="bg-secondary text-white cursor-pointer"
                            size="xs"
                            variant="ghost"
                          >
                            Details
                          </Button>
                        }
                      />

                      {booking.bookingStatus === "Cancelled" ? (
                        <Button
                          className={`bg-destructive opacity-50 text-white cursor-not-allowed`}
                          size="xs"
                          variant="goast"
                        >
                          Cancel
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleCancelBooking(booking._id)}
                          className={`bg-destructive text-white cursor-pointer`}
                          size="xs"
                          variant="goast"
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-12 text-muted-foreground"
                >
                  No bookings found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          {bookings?.length > 0 && (
            <TableFooter>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableCell
                  colSpan={5}
                  className="font-semibold text-foreground"
                >
                  Total Bookings
                </TableCell>
                <TableCell className="font-bold text-lg text-primary">
                  ৳
                  {bookings
                    .reduce((sum, booking) => sum + (booking.totalCost || 0), 0)
                    .toLocaleString()}
                </TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {bookings.length} booking(s)
                </TableCell>
              </TableRow>
            </TableFooter>
          )}
        </Table>
      </div>

      {/* Mobile View - Cards */}
      <div className="lg:hidden block space-y-4">
        {bookings.length > 0 ? (
          bookings.map((booking, index) => (
            <Card
              key={index}
              className="overflow-hidden border-border shadow-sm"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <img
                      src={booking.image}
                      alt={booking.title}
                      className="w-20 h-20 rounded-lg object-cover border border-border"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">
                        {booking.title}
                      </CardTitle>
                      <CardDescription>{booking.category}</CardDescription>
                    </div>
                  </div>
                  <Badge
                    className={`${getStatusColor(booking.bookingStatus)} border shrink-0`}
                  >
                    {booking.bookingStatus}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">
                      {formatDate(booking.selectedDate)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-foreground">
                      {booking.selectedTime}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-foreground">
                      {booking.selectedDistrict}, {booking.selectedDivision}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {booking.address}
                    </p>
                  </div>
                </div>

                {booking.features && booking.features.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Features:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {booking.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full border border-accent/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {booking.duration} minutes
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground mb-0.5">
                      Total Amount
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      ${booking.totalCost?.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="pt-2 text-xs text-muted-foreground border-t border-border/50">
                  Booked on {formatDate(booking.createdAt)}
                </div>

                <div>
                  <TableCell>
                    <div className="flex gap-2 items-center">
                      <BookingDetailsDialog
                        booking={booking}
                        trigger={
                          <Button
                            className="bg-secondary text-white cursor-pointer"
                            size="sm"
                            variant="ghost"
                          >
                            Details
                          </Button>
                        }
                      />
                      {booking.bookingStatus === "Cancelled" ? (
                        <Button
                          className={`bg-destructive opacity-50 text-white cursor-not-allowed`}
                          size="sm"
                          variant="goast"
                        >
                          Cancel
                        </Button>
                      ) : (
                        <Button
                          onClick={() => handleCancelBooking(booking._id)}
                          className={`bg-destructive text-white cursor-pointer`}
                          size="sm"
                          variant="goast"
                        >
                          Cancel
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="py-12 text-center text-muted-foreground">
              No bookings found
            </CardContent>
          </Card>
        )}

        {/* Mobile Footer */}
        <Card className="bg-muted/30 border-2 border-accent/20">
          <CardContent className="py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Bookings</p>
                <p className="text-lg font-semibold text-foreground">
                  {bookings.length} booking(s)
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="text-2xl font-bold text-primary">
                  $
                  {bookings
                    .reduce((sum, booking) => sum + (booking.totalCost || 0), 0)
                    .toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MyBookings;
