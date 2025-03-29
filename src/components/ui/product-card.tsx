
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;
    
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < Math.floor(rating) 
              ? "text-[#f90] fill-[#f90]" 
              : i < rating 
                ? "text-[#f90] fill-[#f90] half-filled" 
                : "text-gray-300"
          }`}
        />
      ));
  };
  
  return (
    <Card 
      className="border hover:border-[#febd69] overflow-hidden transition-shadow hover:shadow-md h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-2 md:p-3 flex flex-col h-full">
        <div className="relative overflow-hidden rounded-md mb-2 md:mb-3 flex-shrink-0">
          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded">
              -{product.discount}%
            </div>
          )}
          <img
            src={product.image}
            alt={product.name}
            className={`w-full aspect-square object-cover transition-transform duration-300 ${isHovered ? "scale-105" : ""}`}
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
              <Button variant="secondary" size="sm" className="bg-white hover:bg-gray-100 shadow-sm">
                Quick view
              </Button>
            </div>
          )}
        </div>
        
        <div className="flex flex-col flex-grow">
          {product.category && (
            <div className="text-[#007185] text-xs mb-1 hover:underline cursor-pointer">
              {product.category}
            </div>
          )}
          
          <h3 className="text-sm md:text-base font-medium line-clamp-2 text-[#131921] mb-1 md:mb-2">
            {product.name}
          </h3>
          
          <div className="flex items-center mb-1 md:mb-2">
            <div className="flex mr-1.5">
              {renderStars(product.rating)}
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
          
          <div className="flex items-baseline gap-1 mb-2">
            {product.discount ? (
              <>
                <span className="text-sm md:text-base font-bold text-red-600">
                  ${discountedPrice.toFixed(2)}
                </span>
                <span className="text-xs text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-sm md:text-base font-bold">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="text-xs text-[#007600] mb-2">In Stock</div>
          
          <div className="mt-auto flex gap-1">
            <Button 
              className="flex-grow text-xs md:text-sm h-8 md:h-9 bg-[#febd69] hover:bg-[#f3a847] text-black"
            >
              <ShoppingCart className="h-3.5 w-3.5 mr-1" />
              Add to Cart
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 md:h-9 w-8 md:w-9 border-gray-300 text-gray-500 hover:text-red-500"
            >
              <Heart className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
