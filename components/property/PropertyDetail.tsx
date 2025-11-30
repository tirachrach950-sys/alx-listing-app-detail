import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="lg:col-span-2">
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-500">{property.rating} stars</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {property.images?.map((img, idx) => (
            <img key={idx} src={img} alt={property.name} className={`w-full h-64 object-cover rounded-lg ${idx === 0 ? "col-span-2" : ""}`} />
          ))}
        </div>

        {/* Description */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="mt-2">{property.description}</p>
        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">What this place offers</h2>
          <ul className="flex flex-wrap mt-2 gap-2">
            {property.category.map((amenity, idx) => (
              <li key={idx} className="bg-gray-200 p-2 rounded-md">{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Reviews */}
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* Right Column: Booking */}
      <BookingSection price={property.price} />
    </div>
  );
};

export default PropertyDetail;

