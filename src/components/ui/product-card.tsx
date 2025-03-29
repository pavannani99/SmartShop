
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlist, setIsWishlist] = useState(false);
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  
  const toggleWishlist = () => {
    setIsWishlist(!isWishlist);
    toast({
      title: isWishlist ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlist ? "removed from" : "added to"} your wishlist`,
    });
  };
  
  return (
    <Card className="overflow-hidden group h-full transition-all duration-300 hover:shadow-md">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
            {product.discount}% OFF
          </div>
        )}
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm"
        >
          <Heart className={`h-4 w-4 ${isWishlist ? "fill-red-500 text-red-500" : "text-gray-400"}`} />
        </button>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <p className="text-sm text-gray-500">{product.category}</p>
          <h3 className="font-medium text-[#171A1F] line-clamp-2 h-12">{product.name}</h3>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
          <span className="mx-1 text-gray-300">|</span>
          <span className="text-sm text-gray-500">{product.reviews} reviews</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <div>
            {product.discount ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg">${(product.price * (1 - product.discount / 100)).toFixed(2)}</span>
                <span className="text-gray-400 line-through text-sm">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-[#1E88E5] hover:bg-[#1976D2] rounded-md"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
