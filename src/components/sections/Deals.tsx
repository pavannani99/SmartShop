
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
    <section className="py-16 px-[132px] max-xl:px-16 max-md:px-8 max-sm:px-4 bg-white">
      <div className="bg-gradient-to-r from-[#1E88E5] to-[#1976D2] rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="p-10 md:w-3/5 flex flex-col justify-center">
            <h2 className="text-white text-4xl font-bold mb-4">Flash Sale</h2>
            <p className="text-white/80 text-lg mb-6">
              Get up to 50% off on the season's hottest styles. Limited time offer!
            </p>
            
            <div className="flex space-x-4 mb-8 max-sm:flex-wrap max-sm:space-x-2 max-sm:space-y-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-white text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-white/80 text-sm">Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-white text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-white/80 text-sm">Hours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-white text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-white/80 text-sm">Minutes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center min-w-[80px]">
                <div className="text-white text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-white/80 text-sm">Seconds</div>
              </div>
            </div>
            
            <Button className="bg-white text-[#1E88E5] hover:bg-white/90 hover:text-[#1976D2] max-w-[200px]">
              Shop Now
            </Button>
          </div>
          
          <div className="md:w-2/5 relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1d1d1?width=500&height=400"
              alt="Flash sale products"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full font-bold">
              -50%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
