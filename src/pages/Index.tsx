
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { SearchBar } from "@/components/layout/SearchBar";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Categories } from "@/components/sections/Categories";
import { Deals } from "@/components/sections/Deals";
import { Newsletter } from "@/components/sections/Newsletter";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <SearchBar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Deals />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
