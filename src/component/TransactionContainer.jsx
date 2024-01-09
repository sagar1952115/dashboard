import DataTable from "./DataTable";

const TransactionContainer = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <p className="flex items-center text-[#1A181E] text-[20px] font-[500px] h-[28px]">
        Transactions | This Month
      </p>
      <div
        className="p-[12px] pb-[24px] rounded-lg bg-white"
        style={{ boxShadow: "0px 2px 6px 0px rgba(26, 24, 30, 0.04)" }}
      >
        <DataTable />
      </div>
    </div>
  );
};

export default TransactionContainer;
