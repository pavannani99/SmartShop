
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useIsMobile();

  const featuredProducts = [
    {
      id: 1,
      name: "Nike Air Max 270 React ENG - Men's Running Shoes Casual Sneakers",
      price: 150,
      rating: 4.5,
      reviews: 120,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      discount: 10,
      category: "Running"
    },
    {
      id: 2,
      name: "Adidas Ultraboost 21 - High Performance Running Shoe for Everyday Use",
      price: 180,
      rating: 4.7,
      reviews: 183,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Running"
    },
    {
      id: 3,
      name: "Puma RS-X - Casual Sneakers with Bold Design and Comfortable Fit",
      price: 120,
      rating: 4.3,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1608379743498-63cc3f9f673c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      discount: 15,
      category: "Casual"
    },
    {
      id: 4,
      name: "New Balance 990v5 - Premium Made in USA Running Shoe with Superior Comfort",
      price: 175,
      rating: 4.6,
      reviews: 145,
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      category: "Running"
    },
    {
      id: 5,
      name: "Converse Chuck Taylor All Star - Classic Canvas Shoes for Every Outfit",
      price: 60,
      rating: 4.4,
      reviews: 210,
      image: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80",
      category: "Casual"
    },
    {
      id: 6,
      name: "Vans Old Skool - Skateboarding Shoes with Iconic Side Stripe",
      price: 65,
      rating: 4.2,
      reviews: 176,
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2098&q=80",
      category: "Skate"
    }
  ];

  // For mobile view we show 1 product, tablet 2, small desktop 3, large desktop 4
  const productsPerPage = isMobile ? 1 : window.innerWidth < 768 ? 2 : window.innerWidth < 1024 ? 3 : 4;
  const totalSlides = Math.ceil(featuredProducts.length / productsPerPage);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentSlide * productsPerPage;
  const visibleProducts = featuredProducts.slice(startIndex, startIndex + productsPerPage);

  return (
    <section className="py-6 md:py-10 bg-white rounded-md shadow-sm my-4">
      <div className="flex justify-between items-center px-4 mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#131921]">Top Sellers</h2>
        <div className="flex items-center gap-3">
          <Button 
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-300 text-gray-600 hover:text-[#131921]"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-gray-300 text-gray-600 hover:text-[#131921]"
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button variant="link" className="text-[#007185] hover:text-[#c7511f] hover:underline">
            See all
          </Button>
        </div>
      </div>
      
      <div className="px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
