import "./App.css";
import { MainDash, SideBar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <SideBar />
        <MainDash />
        <div></div>
      </div>
    </div>
  );
}

export default App;
