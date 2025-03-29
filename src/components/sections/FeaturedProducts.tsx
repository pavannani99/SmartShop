
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

export const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "Nike Air Max 270",
      price: 150,
      rating: 4.5,
      reviews: 120,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1f1f1?width=400&height=300",
      discount: 10,
      category: "Running"
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 180,
      rating: 4.7,
      reviews: 183,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f2f2f2?width=400&height=300",
      category: "Running"
    },
    {
      id: 3,
      name: "Puma RS-X",
      price: 120,
      rating: 4.3,
      reviews: 98,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3f3f3?width=400&height=300",
      discount: 15,
      category: "Casual"
    },
    {
      id: 4,
      name: "New Balance 990",
      price: 175,
      rating: 4.6,
      reviews: 145,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f4f4f4?width=400&height=300",
      category: "Running"
    },
    {
      id: 5,
      name: "Converse Chuck Taylor",
      price: 60,
      rating: 4.4,
      reviews: 210,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f5f5f5?width=400&height=300",
      category: "Casual"
    },
    {
      id: 6,
      name: "Vans Old Skool",
      price: 65,
      rating: 4.2,
      reviews: 176,
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6f6f6?width=400&height=300",
      category: "Skate"
    }
  ];

  const totalSlides = Math.ceil(featuredProducts.length / 4);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleProducts = featuredProducts.slice(currentSlide * 4, (currentSlide + 1) * 4);

  return (
    <section className="py-16 px-[132px] max-xl:px-16 max-md:px-8 max-sm:px-4 bg-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-[#171A1F]">Featured Products</h2>
        <div className="flex items-center gap-2">
          <button 
            onClick={prevSlide}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>
          <button 
            onClick={nextSlide}
            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-6 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      <div className="mt-10 flex justify-center">
        <Button variant="outline" className="border-[#1E88E5] text-[#1E88E5] hover:bg-[#1E88E5] hover:text-white">
          View All Products
        </Button>
      </div>
    </section>
  );
};
