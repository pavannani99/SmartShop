
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { SearchBar } from "@/components/layout/SearchBar";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Categories } from "@/components/sections/Categories";
import { Deals } from "@/components/sections/Deals";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: "Your item has been added to the cart",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <Header />
      <SearchBar />
      <main className="flex-1">
        <Hero />
        <div className="max-w-[1480px] mx-auto w-full px-4">
          <Categories />
          <FeaturedProducts />
          <Deals />
          
          {/* Quick checkout button */}
          <div className="fixed bottom-20 right-6 z-30 md:bottom-6">
            <Link to="/checkout">
              <Button 
                onClick={handleAddToCart}
                className="bg-[#1E88E5] hover:bg-[#1976D2] rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
              >
                <ShoppingCart className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
      {isMobile && <MobileNav />}
    </div>
  );
};

export default Index;
