import Container from "./component/Container";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full bg-[#FAFAFA]">
        <Header />
        <Container />
      </div>
    </div>
  );
}

export default App;
