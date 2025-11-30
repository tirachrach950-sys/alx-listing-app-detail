import { PropertyProps } from "@/interfaces/index";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Beach House",
    rating: 4.5,
    address: { city: "Miami", country: "USA" },
    image: "/assets/images/beach-house-1.jpg",
    images: [
      "/assets/images/beach-house-1.jpg",
      "/assets/images/beach-house-2.jpg",
      "/assets/images/beach-house-3.jpg",
    ],
    description: "A beautiful beach house with stunning ocean views.",
    category: ["WiFi", "Parking", "Pool", "Air Conditioning"],
    price: 120,
    reviews: [
      {
        name: "John Doe",
        avatar: "/assets/images/user1.jpg",
        rating: 5,
        comment: "Amazing stay, highly recommend!"
      },
      {
        name: "Jane Smith",
        avatar: "/assets/images/user2.jpg",
        rating: 4,
        comment: "Very comfortable and clean."
      }
    ]
  },
];

