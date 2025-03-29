
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-[#FAFAFB] pt-16 pb-8 px-[132px] max-xl:px-16 max-md:px-8 max-sm:px-4">
      <div className="grid grid-cols-4 gap-8 mb-12 max-lg:grid-cols-2 max-sm:grid-cols-1">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-2">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="36" stroke="#BCC1CA" />
              <path
                d="M25.5267 19.9991C22.8003 9.18813 8.79811 1.59998 8.79811 1.59998C8.79811 1.59998 0.469256 15.1767 3.51082 25.8931C3.51082 25.9089 3.51082 25.9325 3.5187 25.9483C3.52658 25.9877 3.54235 26.0192 3.5581 26.0586C3.5975 26.1926 3.62902 26.3186 3.66842 26.4526H3.68418C5.52016 32.2205 11.5718 35.5931 17.4815 34.0092C23.3913 32.4254 26.953 26.4762 25.6528 20.5665H25.6686C25.6371 20.4325 25.6055 20.2985 25.5661 20.1646C25.5583 20.1252 25.5504 20.0858 25.5425 20.0543C25.5425 20.0385 25.5267 20.0228 25.5267 19.9991Z"
                fill="#1E88E5"
              />
              <path
                d="M32.8198 25.8931C35.8614 15.1767 27.5326 1.59998 27.5326 1.59998C27.5326 1.59998 13.5303 9.18813 10.804 19.9991C10.804 20.0149 10.7882 20.0306 10.7882 20.0543C10.7803 20.0936 10.7724 20.133 10.7646 20.1646C10.733 20.2985 10.6936 20.4246 10.6621 20.5586H10.6779C9.37773 26.4762 12.9394 32.4254 18.8491 34.0092C24.7589 35.5931 30.8184 32.2205 32.6465 26.4526H32.6623C32.7016 26.3265 32.7332 26.1926 32.7726 26.0665C32.7804 26.0271 32.7962 25.9956 32.812 25.9562C32.812 25.9404 32.812 25.9168 32.8198 25.901V25.8931Z"
                fill="#FF5722"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.1582 8.56592C21.3445 11.6218 24.3859 15.5316 25.5101 19.9893C25.5101 20.0023 25.5149 20.013 25.5192 20.0225C25.5227 20.0303 25.5259 20.0374 25.5259 20.0445C25.5337 20.076 25.5416 20.1154 25.5495 20.1548C25.5889 20.2888 25.6204 20.4227 25.6519 20.5567L25.6362 20.5567C26.8846 26.2316 23.6501 31.9428 18.1582 33.7902C12.6664 31.9428 9.43183 26.2313 10.6803 20.5488H10.6645C10.6803 20.4818 10.698 20.4168 10.7157 20.3518C10.7335 20.2868 10.7512 20.2218 10.767 20.1548C10.7749 20.1233 10.7827 20.0839 10.7906 20.0445C10.7906 20.0315 10.7954 20.0209 10.7997 20.0113C10.8032 20.0035 10.8064 19.9964 10.8064 19.9893C11.9306 15.5316 14.9719 11.6218 18.1582 8.56592Z"
                fill="#1E88E5"
                fillOpacity="0.2"
              />
            </svg>
            <span className="text-black text-2xl font-bold">ShopSmart</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            The ultimate destination for trendy footwear and stylish accessories. Discover comfort, elegance, and the latest fashion trends.
          </p>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1E88E5] hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1E88E5] hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1E88E5] hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09406 12.5922C7.9604 11.7615 8.09206 10.9099 8.47032 10.1584C8.84858 9.40685 9.45418 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#1E88E5] hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Shop</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Men</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Women</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Kids</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Collections</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">New Arrivals</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Sale</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Help</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Customer Service</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">My Account</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Find a Store</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Legal & Privacy</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Contact</a></li>
            <li><a href="#" className="text-gray-600 hover:text-[#1E88E5] transition-colors">Gift Cards</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">Sign up for our newsletter to receive special offers and first look at new products.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#1E88E5] focus:border-[#1E88E5]"
            />
            <Button className="bg-[#1E88E5] hover:bg-[#1976D2]">Subscribe</Button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-8 flex justify-between items-center max-md:flex-col max-md:gap-4">
        <p className="text-gray-500 text-sm">© 2024 ShopSmart. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-[#1E88E5] text-sm">Terms of Service</a>
          <a href="#" className="text-gray-600 hover:text-[#1E88E5] text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-[#1E88E5] text-sm">Cookies Settings</a>
        </div>
        <div className="flex items-center gap-2">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/visa.svg" alt="Visa" className="h-8" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/mastercard.svg" alt="Mastercard" className="h-8" />
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/paypal.svg" alt="PayPal" className="h-8" />
        </div>
      </div>
    </footer>
  );
};
