
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { SearchBar } from "@/components/layout/SearchBar";
import { Footer } from "@/components/layout/Footer";
import { PaymentGateway } from "@/components/checkout/PaymentGateway";
import { MobileNav } from "@/components/layout/MobileNav";
import { useIsMobile } from "@/hooks/use-mobile";

const Checkout = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5]">
      <Header />
      <SearchBar />
      <main className="flex-1 py-8">
        <div className="max-w-[1480px] mx-auto w-full px-4">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Checkout</h1>
            <p className="text-gray-600">Complete your purchase securely</p>
          </div>
          
          <PaymentGateway />
        </div>
      </main>
      <Footer />
      {isMobile && <MobileNav />}
    </div>
  );
};

export default Checkout;
