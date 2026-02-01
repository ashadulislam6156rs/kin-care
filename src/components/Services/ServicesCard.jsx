import Link from "next/link";

const ServicesCard = ({ service }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition">
      {/* Image */}
      <div className="relative h-44">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover rounded-t-xl"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          {service.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {service.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {service.description}
        </p>

        {/* Info */}
        <div className="flex justify-between text-sm text-gray-600 mb-3">
          <span>{service.duration}</span>
          <span>{service.serviceFor}</span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between border-t pt-3">
          <span className="text-xl font-bold text-blue-600">
            ৳{service.price}
            <span className="text-sm text-gray-500 font-normal">
              /{service.priceType.replace("per ", "")}
            </span>
          </span>

          <Link href={`/services/${service._id}`}>
            <button className="text-sm font-medium text-blue-600 border border-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-600 hover:text-white transition">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
