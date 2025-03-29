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
        <h1 className="text-white text-center text-[64px] font-bold leading-[84px] mb-6 max-md:text-5xl max-md:leading-[64px] max-sm:text-4xl max-sm:leading-[48px]">
          Step Into Style
        </h1>
        <p className="text-white text-center text-2xl font-normal leading-9 mb-6 max-md:text-xl max-md:leading-[30px] max-sm:text-base max-sm:leading-6">
          Discover the latest collection of trendy footwear designed for comfort
          and elegance.
        </p>
        <button className="bg-[#1E88E5] text-white text-lg font-normal leading-7 px-5 py-3 rounded-md">
          Shop Now
        </button>
      </div>
    </section>
  );
};
