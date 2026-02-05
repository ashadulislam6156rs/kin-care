import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function BookingDetailsDialog({ trigger, booking }) {

  const currentStatus = booking ?  booking.bookingStatus : "Pending";
const statusSteps = ["Pending", "Confirmed", "Completed", "cancelled"];

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Booking Details</DialogTitle>
            <DialogDescription>
              {/* Track line if Pending / Confirmed / Completed / Cancelled */}
              <div className="w-full max-w-md mx-auto mb-2">
                <div className="flex items-center justify-between relative">
                  {/* background line */}
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2" />

                  {/* active line (NOT for Cancelled) */}
                  {currentStatus !== "Cancelled" && (
                    <div
                      className="absolute top-1/2 left-0 h-1 bg-accent -translate-y-1/2 transition-all duration-300"
                      style={{
                        width:
                          currentStatus === "Pending"
                            ? "5%"
                            : currentStatus === "Confirmed"
                              ? "50%"
                              : "100%",
                      }}
                    />
                  )}

                  {/* steps */}
                  {statusSteps.map((step, index) => {
                    const currentIndex = statusSteps.indexOf(currentStatus);
                    const isActive =
                      currentStatus !== "Cancelled" && currentIndex >= index;

                    return (
                      <div
                        key={step}
                        className="relative z-10 flex flex-col items-center"
                      >
                        {/* circle */}
                        <div
                          className={`w-3 h-3 mt-5 rounded-full border-2 transition-all
                ${
                  isActive
                    ? "bg-primary border-primary"
                    : "bg-background border-muted"
                }`}
                        />

                        {/* label */}
                        <span className="text-xs mt-1 text-muted-foreground">
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Cancelled Indicator */}
                {currentStatus === "Cancelled" && (
                  <div className="text-center mt-6">
                    <span
                      className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full 
          bg-destructive/10 text-destructive border border-destructive"
                    >
                      Booking Cancelled
                    </span>
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
          {/* Service */}
          <div>
            {/* Service Info */}
            <div className="flex gap-4">
              <img
                src={booking?.image}
                alt={booking?.title}
                className="w-20 h-20 rounded-lg object-cover shadow-brand"
              />

              <div className="flex-1">
                <h3 className="font-semibold text-sm md:text-base">
                  {booking?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {booking?.category}
                </p>

                <div className="mt-2">
                  <span className="badgePrimary">{currentStatus}</span>
                </div>
              </div>
            </div>

            {/* Booking Meta */}
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="surface p-3">
                <p className="text-muted-foreground">Date</p>
                <p className="font-medium">{booking?.selectedDate}</p>
              </div>

              <div className="surface p-3">
                <p className="text-muted-foreground">Time</p>
                <p className="font-medium">{booking?.selectedTime}</p>
              </div>

              <div className="surface p-3">
                <p className="text-muted-foreground">Location</p>
                <p className="font-medium">
                  {booking?.selectedDistrict}, {booking?.selectedDivision}
                </p>
              </div>

              <div className="surface p-3">
                <p className="text-muted-foreground">Duration</p>
                <p className="font-medium">{booking?.duration} Days</p>
              </div>
            </div>
            {/* Cost */}
            <div className="mt-3 text-center">
              <p className="mb-1 text-muted-foreground">
                Total Cost
              </p>
              <p className="text-2xl font-bold textGradient">
                ৳ {booking?.totalCost}
              </p>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
