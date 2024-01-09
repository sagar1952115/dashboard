function Profile() {
  return (
    <div className="px-2 flex justify-between items-center gap-[12px] pl-[59px] relative h-[36px] w-full">
      <img
        src="/assets/sidebarTop.png"
        className="absolute -top-[2px] left-1 h-[39px] w-[39px] rounded-lg"
      />
      <div className="flex flex-col justify-center">
        <div className="text-[15px] font-[500px] h-[22px]">Nishyan</div>
        <button className="text-[13px] text-[#FFFFFF99] font-[400px] h-[16px] underline">
          Visit store
        </button>
      </div>
      <img
        src="/assets/ChevronDown.svg"
        className="cursor-pointer h-[20px] w-[20px]"
      />
    </div>
  );
}

const NavOpts = [
  { title: "Home", selected: "False" },
  { title: "Orders", selected: "False" },
  { title: "Products", selected: "False" },
  { title: "Delivery", selected: "False" },
  { title: "Marketing", selected: "False" },
  { title: "Analytics", selected: "False" },
  { title: "Payments", selected: "True" },
  { title: "Tools", selected: "False" },
  { title: "Discounts", selected: "False" },
  { title: "Audience", selected: "False" },
  { title: "Appearance", selected: "False" },
  { title: "Plugins", selected: "False" },
];

// A state can be added to keep track of the active option
function NavList() {
  return (
    <div className="flex flex-col justify-start gap-1">
      {NavOpts.map((opt, i) => {
        return (
          <div
            key={i}
            className={`cursor-pointer hover:bg-[#FFFFFF1A] flex gap-3 items-center py-[8px] px-[16px] rounded-[4px] ${
              opt.selected === "True" && "bg-[#FFFFFF1A]"
            }`}
          >
            <img
              src={`/assets/navOptIcons/Name=${opt.title}, State=${opt.selected}.svg`}
              className="h-[20px] w-[20px]"
            />
            <p className={`${opt.selected !== "True" && "opacity-70"}`}>
              {opt.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Wallet({ credit }) {
  return (
    <div className="flex w-full h-[54px] items-center py-[6px] gap-[10px] px-[12px] rounded-[4px] bg-[#FFFFFF1A]">
      <div className="p-[6px] bg-white bg-opacity-10 rounded-[4px]">
        <img src="/assets/wallet.svg" className="h-[24px]" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="text-[13px] font-[400px] h-[16px] opacity-70">
          Available credit
        </p>{" "}
        <p className="flex items-center text-[16px] font-[500px] h-[24px]">
          {credit}
        </p>
      </div>
    </div>
  );
}

import React from "react";

const Sidebar = () => {
  return (
    <div className="flex relative top-0 bottom-0 flex-col gap-[16px] flex-grow-1 flex-shrink-0 flex-basis-0 bg-[#1E2640] w-[224px] px-[16px] py-[10px] items-center text-[#FFFFFF]">
      <div className="flex  flex-col h-full  gap-[24px] w-[208px]">
        <Profile />
        <div className="flex flex-col justify-between h-full">
          <NavList />
          <Wallet credit={"222.10"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
