
import { Home, Search, ShoppingCart, Heart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const MobileNav = () => {
  const location = useLocation();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 md:hidden">
      <div className="flex justify-around items-center py-2">
        <Link to="/">
          <Button 
            variant="ghost" 
            className={`flex flex-col items-center p-1 h-auto min-w-0 ${location.pathname === '/' ? 'text-[#1E88E5]' : 'text-gray-500'}`} 
            aria-label="Home"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
        </Link>
        
        <Button variant="ghost" className="flex flex-col items-center p-1 h-auto min-w-0 text-gray-500" aria-label="Search">
          <Search className="h-5 w-5" />
          <span className="text-xs mt-1">Search</span>
        </Button>
        
        <Link to="/checkout">
          <Button 
            variant="ghost" 
            className={`flex flex-col items-center p-1 h-auto min-w-0 ${location.pathname === '/checkout' ? 'text-[#1E88E5]' : 'text-gray-500'}`} 
            aria-label="Cart"
          >
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-[#febd69] text-black text-xs h-4 w-4 flex items-center justify-center rounded-full font-bold">
                3
              </span>
            </div>
            <span className="text-xs mt-1">Cart</span>
          </Button>
        </Link>
        
        <Button variant="ghost" className="flex flex-col items-center p-1 h-auto min-w-0 text-gray-500" aria-label="Wishlist">
          <Heart className="h-5 w-5" />
          <span className="text-xs mt-1">Wishlist</span>
        </Button>
        
        <Button variant="ghost" className="flex flex-col items-center p-1 h-auto min-w-0 text-gray-500" aria-label="Account">
          <User className="h-5 w-5" />
          <span className="text-xs mt-1">Account</span>
        </Button>
      </div>
    </div>
  );
};
