
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

export const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };
  
  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 px-[132px] max-xl:px-16 max-md:px-8 max-sm:px-4">
      <div className="flex items-center justify-between gap-4 max-md:flex-col">
        <div className="flex items-center gap-4 w-full max-w-xl">
          <form onSubmit={handleSearch} className="flex flex-1">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#1E88E5] focus:border-[#1E88E5]"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button type="submit" className="rounded-l-none bg-[#1E88E5] hover:bg-[#1976D2]">
              Search
            </Button>
          </form>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="p-2" aria-label="Wishlist">
            <Heart className="h-5 w-5 text-[#171A1F]" />
          </Button>
          
          <Button variant="ghost" className="p-2 relative" aria-label="Cart">
            <ShoppingCart className="h-5 w-5 text-[#171A1F]" />
            <span className="absolute -top-1 -right-1 bg-[#1E88E5] text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">
              3
            </span>
          </Button>
          
          <Button variant="ghost" className="p-2" aria-label="Account">
            <User className="h-5 w-5 text-[#171A1F]" />
          </Button>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">All Categories</NavigationMenuTrigger>
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
              <NavigationMenuLink href="#" className="text-sm text-gray-600 hover:text-[#1E88E5] px-3 py-2">
                New Arrivals
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-sm text-gray-600 hover:text-[#1E88E5] px-3 py-2">
                Top Sellers
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-sm text-gray-600 hover:text-[#1E88E5] px-3 py-2">
                Today's Deals
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button variant="ghost" className="md:hidden p-2" aria-label="Menu">
          <Menu className="h-5 w-5 text-[#171A1F]" />
        </Button>
        
        <div className="text-sm text-gray-600 max-md:hidden">
          <span className="text-[#1E88E5]">Free shipping</span> on orders over $50
        </div>
      </div>
    </div>
  );
};
