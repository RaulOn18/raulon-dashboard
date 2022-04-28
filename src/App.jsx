import "./App.css";
import { MainDash, RightSide, SideBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
