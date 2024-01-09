function Stats() {
  return (
    <div className="border flex gap-[20px] w-full">
      <StatCard title={"Online Orders"} value={"231"} />
      <StatCard title={"Amount received"} value={"₹23,92,312.19"} />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function StatCard({ title, value }) {
  return (
    <div
      className="flex flex-col gap-[16px] p-[20px] h-[118px] w-1/2 bg-white rounded-lg"
      style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
    >
      <h3 className="text-[#4D4D4D] text-[16px] font-[400] h-[24px]">
        {title}
      </h3>
      <h1 className="text-[#1A181E] text-[32px] font-[500px] h-[38px]">
        {value}
      </h1>
    </div>
  );
}

import React from "react";

const Overview = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <header>
        <div className="flex items-center justify-between">
          <p className="flex items-center text-[#1A181E] text-[20px] font-[500px] h-[28px]">
            Overview
          </p>
          <p className="flex cursor-pointer bg-white items-center justify-center py-[6px] px-[14px] w-[137px] h-[36px] rounded-[4px] text-[#4D4D4D] font-[400px] text-[16px] border border-solid border-[#D9D9D9] gap-[7px]">
            <p>Last Month</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                fill="#4D4D4D"
              />
            </svg>
          </p>
        </div>
      </header>
      <Stats />
    </div>
  );
};

export default Overview;
