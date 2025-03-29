
import { useState } from "react";
import { 
  CreditCard, 
  CheckCircle2, 
  PaypalIcon, 
  CreditCardIcon, 
  AppleIcon,
  GooglePayIcon,
  ShieldCheck,
  Lock 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const PaymentMethod = ({ 
  name, 
  icon: Icon, 
  selected, 
  onSelect 
}: { 
  name: string; 
  icon: any; 
  selected: boolean; 
  onSelect: () => void 
}) => {
  return (
    <div 
      className={`flex items-center gap-3 p-4 border rounded-md cursor-pointer ${
        selected ? "border-[#1E88E5] bg-blue-50" : "border-gray-200"
      }`}
      onClick={onSelect}
    >
      <Icon className={`w-5 h-5 ${selected ? "text-[#1E88E5]" : "text-gray-600"}`} />
      <span className="text-sm font-medium">{name}</span>
      {selected && <CheckCircle2 className="w-5 h-5 ml-auto text-[#1E88E5]" />}
    </div>
  );
};

export const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>("credit-card");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cardHolder, setCardHolder] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { toast } = useToast();

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/(.{4})/g, "$1 ")
      .trim()
      .substring(0, 19);
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 2) {
      setExpiryDate(value);
    } else {
      const month = value.substring(0, 2);
      const year = value.substring(2, 4);
      setExpiryDate(`${month}/${year}`);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setCvv(value.substring(0, 3));
  };

  const handlePayment = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      
      toast({
        title: "Payment Successful",
        description: "Your order has been placed successfully!",
      });
      
      // Reset form after short delay
      setTimeout(() => {
        setIsSuccess(false);
        setCardNumber("");
        setCardHolder("");
        setExpiryDate("");
        setCvv("");
      }, 2000);
    }, 1500);
  };

  const isFormValid = cardNumber.length === 19 && cardHolder && expiryDate.length === 5 && cvv.length === 3;

  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 border">
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <Lock className="w-5 h-5" />
        Secure Payment
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <h3 className="text-base font-medium mb-3">Payment Method</h3>
          
          <PaymentMethod
            name="Credit/Debit Card"
            icon={CreditCardIcon}
            selected={paymentMethod === "credit-card"}
            onSelect={() => setPaymentMethod("credit-card")}
          />
          
          <PaymentMethod
            name="PayPal"
            icon={PaypalIcon}
            selected={paymentMethod === "paypal"}
            onSelect={() => setPaymentMethod("paypal")}
          />
          
          <PaymentMethod
            name="Apple Pay"
            icon={AppleIcon}
            selected={paymentMethod === "apple-pay"}
            onSelect={() => setPaymentMethod("apple-pay")}
          />
          
          <PaymentMethod
            name="Google Pay"
            icon={GooglePayIcon}
            selected={paymentMethod === "google-pay"}
            onSelect={() => setPaymentMethod("google-pay")}
          />
        </div>
        
        <div className="space-y-4">
          {paymentMethod === "credit-card" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength={19}
                  className="border-gray-300"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cardHolder">Card Holder Name</Label>
                <Input
                  id="cardHolder"
                  placeholder="John Doe"
                  value={cardHolder}
                  onChange={(e) => setCardHolder(e.target.value)}
                  className="border-gray-300"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiryDate">Expiry Date (MM/YY)</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    maxLength={5}
                    className="border-gray-300"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={cvv}
                    onChange={handleCvvChange}
                    maxLength={3}
                    type="password"
                    className="border-gray-300"
                  />
                </div>
              </div>
            </>
          )}
          
          {paymentMethod !== "credit-card" && (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 text-center">
                You will be redirected to {
                  paymentMethod === "paypal" ? "PayPal" : 
                  paymentMethod === "apple-pay" ? "Apple Pay" : 
                  "Google Pay"
                } to complete your payment.
              </p>
            </div>
          )}
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">$129.99</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">$5.99</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">$11.70</span>
        </div>
        <div className="flex items-center justify-between border-t pt-4">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-lg">$147.68</span>
        </div>
      </div>
      
      <div className="mt-6">
        <Button 
          onClick={handlePayment} 
          disabled={paymentMethod === "credit-card" && !isFormValid || isProcessing}
          className="w-full bg-[#1E88E5] hover:bg-[#1976D2] h-12 text-base"
        >
          {isProcessing ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : isSuccess ? (
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Payment Successful!
            </span>
          ) : (
            `Pay $147.68`
          )}
        </Button>
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
        <ShieldCheck className="w-4 h-4" />
        <span>Your payment details are secure and encrypted</span>
      </div>
    </div>
  );
};
