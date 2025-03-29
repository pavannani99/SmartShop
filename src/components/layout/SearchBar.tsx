
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { useIsMobile } from "@/hooks/use-mobile";

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };
  
  return (
    <div className="w-full bg-[#131921] py-2 px-4 md:py-3 md:px-6 lg:px-8 sticky top-0 z-40">
      <div className="max-w-[1480px] mx-auto flex items-center justify-between gap-2 md:gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
        
        <div className="flex items-center gap-4 flex-1 max-w-4xl">
          <form onSubmit={handleSearch} className="flex flex-1 min-w-0">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-3 pr-4 text-sm border-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#febd69]"
                aria-label="Search"
              />
            </div>
            <Button type="submit" className="rounded-l-none h-10 bg-[#febd69] hover:bg-[#f3a847] text-black">
              <Search className="h-5 w-5" />
              {!isMobile && <span className="ml-1">Search</span>}
            </Button>
          </form>
        </div>
        
        <div className="flex items-center gap-1 md:gap-3">
          <Button variant="ghost" className="hidden md:flex flex-col items-center text-white p-1 h-auto">
            <span className="text-xs">Hello, Sign in</span>
            <span className="text-sm font-bold">Account & Lists</span>
          </Button>
          
          <Button variant="ghost" className="hidden md:flex flex-col items-center text-white p-1 h-auto">
            <span className="text-xs">Returns</span>
            <span className="text-sm font-bold">& Orders</span>
          </Button>
          
          <Button variant="ghost" className="relative p-2 text-white" aria-label="Cart">
            <div className="absolute -top-1 -right-1 bg-[#f3a847] text-black text-xs h-5 w-5 flex items-center justify-center rounded-full font-bold">
              3
            </div>
            <ShoppingCart className="h-6 w-6" />
            {!isMobile && <span className="ml-1 font-bold">Cart</span>}
          </Button>
        </div>
      </div>
      
      <div className="hidden md:flex max-w-[1480px] mx-auto mt-2 items-center">
        <NavigationMenu className="text-white">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-white">All Categories</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex flex-col h-full w-full justify-center items-center rounded-md bg-gradient-to-b from-[#1E88E5]/50 to-[#1976D2]/50 p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-white">
                          New Arrivals
                        </div>
                        <p className="text-sm leading-tight text-white/90">
                          Check out our latest collection fresh from the runway
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Men</div>
                      <p className="text-xs line-clamp-2 text-gray-500">Shoes, clothing, and accessories for men</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Women</div>
                      <p className="text-xs line-clamp-2 text-gray-500">Shoes, clothing, and accessories for women</p>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100">
                      <div className="text-sm font-medium leading-none">Kids</div>
                      <p className="text-xs line-clamp-2 text-gray-500">Shoes, clothing, and accessories for kids</p>
                    </a>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-sm text-white hover:text-[#f3a847] px-3 py-2">
                Today's Deals
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-sm text-white hover:text-[#f3a847] px-3 py-2">
                New Arrivals
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-sm text-white hover:text-[#f3a847] px-3 py-2">
                Customer Service
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-sm text-white hover:text-[#f3a847] px-3 py-2">
                Gift Cards
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="ml-auto text-sm text-white">
          <span className="text-[#f3a847] mr-1">Free delivery</span> on orders over $50
        </div>
      </div>
      
      {isMenuOpen && isMobile && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50">
          <div className="absolute top-0 left-0 h-full w-4/5 max-w-xs bg-white">
            <div className="bg-[#131921] text-white p-4 flex items-center">
              <User className="h-6 w-6 mr-2" />
              <span className="font-bold">Hello, Sign in</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="ml-auto text-white" 
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-xl">&times;</span>
              </Button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-60px)]">
              <div className="p-3 border-b">
                <h3 className="font-bold text-lg mb-2">Shop By Department</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="block py-1">Men</a></li>
                  <li><a href="#" className="block py-1">Women</a></li>
                  <li><a href="#" className="block py-1">Kids</a></li>
                  <li><a href="#" className="block py-1">Sports</a></li>
                  <li><a href="#" className="block py-1">Accessories</a></li>
                </ul>
              </div>
              <div className="p-3 border-b">
                <h3 className="font-bold text-lg mb-2">Help & Settings</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="block py-1">Your Account</a></li>
                  <li><a href="#" className="block py-1">Customer Service</a></li>
                  <li><a href="#" className="block py-1">Sign Out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
