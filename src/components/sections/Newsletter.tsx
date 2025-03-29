import { useState } from "react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="flex flex-col items-center bg-[#FAFAFB] px-[132px] py-24 max-md:px-16 max-sm:px-6">
      <div className="flex flex-col items-center mb-12">
        <div className="mb-[16px]">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" rx="6" stroke="#1E88E5" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.2529 17.6218C28.2861 14.3985 31.4343 12.0799 34.3364 9.94255C34.8014 9.60006 35.2603 9.2622 35.707 8.92609C36.2118 8.54626 36.9209 8.57745 37.3513 9.04093C40.3448 12.2653 42.1739 16.5764 42.1739 21.3126C42.1739 31.302 34.0372 39.3999 24 39.3999C13.9628 39.3999 5.82608 31.302 5.82608 21.3126C5.82608 16.5416 7.68211 12.2021 10.7148 8.97015C11.1467 8.50996 11.854 8.48158 12.3573 8.8613C12.8312 9.21886 13.3189 9.57806 13.8138 9.94255C16.7159 12.0799 19.8642 14.3985 21.8974 17.6218C23.2233 19.7239 24.0751 22.2108 24.0751 25.283C24.0751 22.2108 24.9269 19.7239 26.2529 17.6218ZM24.0751 14.0516C26.411 11.0017 29.3928 8.80927 31.7569 7.071C31.8648 6.99163 31.9715 6.9132 32.0768 6.83571C32.5447 6.49108 32.9874 6.16498 33.4159 5.84263C35.3327 4.40044 38.2598 4.37981 40.1471 6.41265C43.7727 10.3177 46 15.5572 46 21.3126C46 33.4682 36.1104 43.25 24 43.25C11.8896 43.25 2 33.4682 2 21.3126C2 15.5148 4.26021 10.2409 7.93291 6.32696C9.82705 4.3083 12.7448 4.34147 14.6526 5.78103C15.1057 6.12285 15.5753 6.4688 16.0735 6.83571C16.1787 6.9132 16.2854 6.99163 16.3933 7.071C18.7575 8.80927 21.7392 11.0017 24.0751 14.0516Z"
              fill="#1E88E5"
            />
          </svg>
        </div>
        <h2 className="text-[#171A1F] text-[32px] font-bold leading-[48px]">
          ShopSmart
        </h2>
      </div>

      <div className="text-[#323842] text-center text-xl font-bold leading-[30px] mb-6">
        Subscribe to our newsletter
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex gap-2 mb-16 max-sm:flex-col"
      >
        <div className="flex items-center bg-[#EAECEF] px-3 py-[7px] rounded-md">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[16px] mr-[8px]"
          >
            <path
              d="M2.06512 3.17603L7.99998 8.57145L13.9343 3.1766"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
            />
            <path
              d="M13.1429 2.85712L2.85715 2.85712C2.22597 2.85712 1.71429 3.36879 1.71429 3.99997L1.71429 12C1.71429 12.6312 2.22597 13.1428 2.85715 13.1428L13.1429 13.1428C13.774 13.1428 14.2857 12.6312 14.2857 12L14.2857 3.99997C14.2857 3.36879 13.774 2.85712 13.1429 2.85712Z"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
          <input
            type="email"
            placeholder="Input your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent text-[#171A1F] placeholder:text-[#BCC1CA] text-sm font-normal leading-[22px] focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-[#1E88E5] text-white text-sm font-normal leading-[22px] px-[25px] py-[7px] rounded-md hover:bg-[#1976D2] transition-colors"
        >
          Subscribe
        </button>
      </form>

      <div className="grid grid-cols-4 gap-6 mb-12 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="flex flex-col">
          <h3 className="text-[#323842] text-xl font-bold leading-[30px] mb-4">
            Product
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="#features"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              Pricing
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[#323842] text-xl font-bold leading-[30px] mb-4">
            Resources
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="#blog"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              Blog
            </a>
            <a
              href="#guides"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              User guides
            </a>
            <a
              href="#webinars"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              Webinars
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[#323842] text-xl font-bold leading-[30px] mb-4">
            Company
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="#about"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              About us
            </a>
            <a
              href="#contact"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-[#323842] text-xl font-bold leading-[30px] mb-4">
            Plans &amp; Pricing
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="#personal"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              Personal
            </a>
            <a
              href="#startup"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              Start up
            </a>
            <a
              href="#organization"
              className="text-[#323842] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
            >
              Organization
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full max-sm:flex-col max-sm:gap-4">
        <div className="flex items-center gap-2">
          <select className="bg-[#EAECEF] text-[#171A1F] text-sm font-normal leading-[22px] px-3 py-[7px] rounded-md focus:outline-none">
            <option>English</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#424955] text-sm font-normal leading-[22px]">
            © 2024 Brand, Inc.
          </span>
          <span className="text-[#424955] text-[11px] font-normal leading-[18px]">
            •
          </span>
          <a
            href="#privacy"
            className="text-[#424955] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
          >
            Privacy
          </a>
          <span className="text-[#424955] text-[11px] font-normal leading-[18px]">
            •
          </span>
          <a
            href="#terms"
            className="text-[#424955] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
          >
            Terms
          </a>
          <span className="text-[#424955] text-[11px] font-normal leading-[18px]">
            •
          </span>
          <a
            href="#sitemap"
            className="text-[#424955] text-sm font-normal leading-[22px] hover:text-[#1E88E5]"
          >
            Sitemap
          </a>
        </div>
      </div>
    </section>
  );
};
