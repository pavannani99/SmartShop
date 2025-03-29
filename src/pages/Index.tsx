
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

const Index = () => {
  const isMobile = useIsMobile();

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
        </div>
        <Newsletter />
      </main>
      <Footer />
      {isMobile && <MobileNav />}
    </div>
  );
};

export default Index;
