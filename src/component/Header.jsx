function Search() {
  return (
    <div className="relative">
      <label htmlFor="Search" className="sr-only">
        {" "}
        Search{" "}
      </label>

      <input
        type="text"
        id="Search"
        placeholder="Search features, tutorials, etc."
        className="w-full placeholder:text-[#808080] placeholder:text-[15px] plcaeholder:font-[400px] bg-[#F2F2F2] rounded-md py-2.5 pl-9 pe-10 sm:text-sm"
      />

      <span className="absolute inset-y-0 grid w-10 start-0 place-content-center">
        <button type="button" className="text-gray-600 hover:text-gray-700">
          <span className="sr-only">Search</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </span>
    </div>
  );
}

const Header = () => {
  return (
    <header className="flex bg-white h-16 px-[32px] py-[12px] border-b-[1px] border-solid border-[#D9D9D9] items-center gap-[16px]">
      <div className="flex gap-[16px] w-1/3 items-center">
        <p className="flex items-center h-[22px] text-[#1A181E] text-[15px] font-[400px]">
          Payments
        </p>
        <div className="flex gap-[6px] text-[12px] font-[400px] h-[16px] text-[#4d4d4d] items-center">
          <img src="/assets/query.svg" className="h-[14pxpx]" />{" "}
          <p className="cursor-pointer hover:underline">How it works</p>
        </div>
      </div>
      <div className="w-1/3">
        <Search />
      </div>
      <div className="w-1/3 flex gap-[12px] justify-end">
        <img src="/assets/chat.png" className="cursor-pointer" />
        <img src="/assets/menu.svg" className="cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
