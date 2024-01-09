import Overview from "./Overview";
import TransactionContainer from "./TransactionContainer";

const Container = () => {
  return (
    <div className="flex m-[32px] flex-col gap-[32px]">
      <Overview />
      <TransactionContainer />
    </div>
  );
};

export default Container;
