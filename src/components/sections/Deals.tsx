import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 8,
    minutes: 37,
    seconds: 45
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <section className="py-6 md:py-10 bg-white rounded-md shadow-sm my-4">
      <div className="flex justify-between items-center px-4 mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[#131921]">Today's Deals</h2>
        <Button variant="link" className="text-[#007185] hover:text-[#c7511f] hover:underline">
          See all deals
        </Button>
      </div>
      
      <div className="px-4">
        <div className="bg-gradient-to-r from-[#232f3e] to-[#131921] rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-4 sm:p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
              <div className="bg-[#cc0c39] text-white font-bold text-sm inline-block px-2 py-1 rounded mb-3 w-max">
                Deal of the day
              </div>
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4">Flash Sale</h2>
              <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Get up to 50% off on the season's hottest styles. Limited time offer!
              </p>
              
              <div className="flex space-x-3 mb-4 sm:mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-2 text-center min-w-[50px]">
                  <div className="text-white text-lg font-bold">{timeLeft.days}</div>
                  <div className="text-white/80 text-xs">Days</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-2 text-center min-w-[50px]">
                  <div className="text-white text-lg font-bold">{timeLeft.hours}</div>
                  <div className="text-white/80 text-xs">Hours</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-2 text-center min-w-[50px]">
                  <div className="text-white text-lg font-bold">{timeLeft.minutes}</div>
                  <div className="text-white/80 text-xs">Mins</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded px-3 py-2 text-center min-w-[50px]">
                  <div className="text-white text-lg font-bold">{timeLeft.seconds}</div>
                  <div className="text-white/80 text-xs">Secs</div>
                </div>
              </div>
              
              <Button className="bg-[#febd69] hover:bg-[#f3a847] text-black font-medium w-max">
                Shop Now
              </Button>
            </div>
            
            <div className="md:w-2/5 relative">
              <img
                src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Flash sale products"
                className="h-full w-full object-cover object-center min-h-[200px]"
              />
              <div className="absolute top-4 right-4 bg-[#cc0c39] text-white text-sm font-bold px-3 py-1 rounded">
                -50%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
