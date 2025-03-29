
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full h-[640px] bg-[#1D2128]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a39d768ebab5a17d80b967bfd715d30bc81c0a52"
        alt="Stylish footwear collection"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute bg-[rgba(23,26,31,0.40)] inset-0" />
      <div className="relative flex flex-col items-center justify-center h-full px-[132px] max-md:px-16 max-sm:px-6">
        <div className="text-center">
          <h1 className="text-white text-[64px] font-bold leading-[84px] mb-6 max-md:text-5xl max-md:leading-[64px] max-sm:text-4xl max-sm:leading-[48px]">
            Step Into Style
          </h1>
          <p className="text-white text-2xl font-normal leading-9 mb-8 max-w-3xl mx-auto max-md:text-xl max-md:leading-[30px] max-sm:text-base max-sm:leading-6">
            Discover the latest collection of trendy footwear designed for comfort
            and elegance. Free shipping on orders over $50.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-[#1E88E5] hover:bg-[#1976D2] text-lg px-8">
              <ShoppingCart className="h-5 w-5 mr-2" />
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8">
              View Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
