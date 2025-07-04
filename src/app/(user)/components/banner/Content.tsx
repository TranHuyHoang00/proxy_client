"use client";
export const Content = () => {
  return (
    <div className="h-[400px] sm:h-[500px] md:h-[700px] flex items-center justify-center">
      <div className="text-center space-y-[20px] sm:space-y-[30px]">
        <h2 className="text-[40px] sm:text-[50px]">
          <label className="text-[#19304a] font-[700] ">Premium Global </label>
          <span className="gradient-text font-[700] ">Proxy Services</span>
        </h2>
        <div className="text-[#454859cc] text-[16px] sm:text-[18px] ">
          <p>
            Unlock the Full Potential of Global Business with IPFoxy's
            High-Quality Rotating and Dedicated Proxy Services
          </p>
        </div>
        <button className="h-[50px] w-[300px] rounded-full bg-gradient cursor-pointer">
          <span className="text-white font-[600] text-[16px] sm:text-[18px]">
            Start Now
          </span>
        </button>
      </div>
    </div>
  );
};
