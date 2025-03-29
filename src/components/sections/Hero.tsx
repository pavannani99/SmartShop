
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/a39d768ebab5a17d80b967bfd715d30bc81c0a52",
      title: "Step Into Style",
      description: "Discover the latest collection of trendy footwear designed for comfort and elegance. Free shipping on orders over $50.",
      buttonText: "Shop Now"
    },
    {
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      title: "Summer Collection",
      description: "Beat the heat with our exclusive summer collection. Lightweight, breathable, and stylish.",
      buttonText: "Explore Collection"
    },
    {
      image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2225&q=80",
      title: "Exclusive Deals",
      description: "Limited time offers on premium brands. Up to 50% off on selected items.",
      buttonText: "View Deals"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-[#1D2128] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute bg-[rgba(23,26,31,0.40)] inset-0" />
          <div className="relative flex flex-col items-center justify-center h-full px-4 sm:px-16 md:px-32 lg:px-[132px]">
            <div className="text-center">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight mb-2 sm:mb-4 md:mb-6">
                {slide.title}
              </h1>
              <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl font-normal mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto">
                {slide.description}
              </p>
              <div className="flex gap-4 justify-center">
                <Button size="lg" className="bg-[#febd69] hover:bg-[#f3a847] text-black text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8">
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  {slide.buttonText}
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8">
                  View Catalog
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#febd69]" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
