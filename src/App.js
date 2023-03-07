import { useSelector } from "react-redux";
import "./App.css";
import BgColor from "./components/BgColor/BgColor";
import BgImg from "./components/BgImg/BgImg";
import Counter from "./components/Counter/Counter";

function App() {
  const { bgColor, setBgImg } = useSelector((state) => state);

  return (
    <div
      style={{
        backgroundImage: `URL(${setBgImg})`,
        backgroundColor: bgColor,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Counter />
      <BgColor />
      <BgImg />
    </div>
  );
}

export default App;
