import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full h-14 bg-white shadow-[0px_0px_2px_0px_rgba(23,26,31,0.08),0px_0px_1px_0px_rgba(23,26,31,0.05)] flex items-center justify-between px-6">
      <div className="flex items-center gap-2.5">
        <div>
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
        </div>
        <span className="text-black text-[28px] font-normal leading-[42px]">
          ShopSmart
        </span>
      </div>

      <nav className="flex items-center gap-[15px] max-md:hidden">
        <div className="flex items-center">
          <div className="flex h-[52px] items-center">
            <div className="flex h-[52px] flex-col justify-end items-center gap-[11px] bg-[rgba(0,0,0,0)] pt-[15px] rounded-md">
              <span className="text-[#1E88E5] text-sm font-bold leading-[22px] px-6">
                Home
              </span>
              <div className="w-[86px] h-1 bg-[#1E88E5] rounded-sm" />
            </div>
            <a
              href="#catalog"
              className="text-[#565E6C] text-sm font-normal leading-[22px] h-[52px] bg-[rgba(0,0,0,0)] px-6 py-[15px] rounded-md"
            >
              Catalog
            </a>
            <a
              href="#checkout"
              className="text-[#565E6C] text-sm font-normal leading-[22px] h-[52px] bg-[rgba(0,0,0,0)] px-6 py-[15px] rounded-md"
            >
              Checkout
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#1E88E5] text-sm font-normal leading-[22px] border bg-white px-[45px] py-[7px] rounded-[10px] border-[#1E88E5]">
            Sign Up
          </button>
          <button className="text-white text-sm font-normal leading-[22px] border bg-[#1E88E5] px-[47px] py-[7px] rounded-[10px] border-[rgba(0,0,0,0)]">
            Sign In
          </button>
        </div>
      </nav>

      <button
        className="hidden items-center max-md:flex p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[24px] h-[24px]"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 6l16 0"></path>
          <path d="M4 12l16 0"></path>
          <path d="M4 18l16 0"></path>
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-white shadow-md md:hidden">
          <div className="flex flex-col p-4">
            <a href="#" className="py-2 text-[#1E88E5] font-bold">
              Home
            </a>
            <a href="#catalog" className="py-2 text-[#565E6C]">
              Catalog
            </a>
            <a href="#checkout" className="py-2 text-[#565E6C]">
              Checkout
            </a>
            <button className="mt-4 text-[#1E88E5] border border-[#1E88E5] py-2 rounded-[10px]">
              Sign Up
            </button>
            <button className="mt-2 text-white bg-[#1E88E5] py-2 rounded-[10px]">
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
