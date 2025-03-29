import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Newsletter } from "@/components/sections/Newsletter";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Newsletter />
      </main>
    </div>
  );
};

export default Index;
