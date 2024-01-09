import Filter from "./Filter";
import TableContent from "./TableContent";
import Pagination from "./Pagination";

const DataTable = () => {
  return (
    <div className="flex flex-col gap-[12px]">
      <Filter />
      <TableContent />
      <Pagination />
    </div>
  );
};

export default DataTable;
