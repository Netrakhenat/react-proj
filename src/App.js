import { useEffect, useState } from "react";
import "./App.css";
import LaptopPg from "./pages/LaptopPg";
import PhonePg from "./pages/PhonePg";
import MobNotes from "./components/Notes/MobNotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider} from "./useContext";
import UseContext from "./useContext";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = UseContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);
  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);
  return (
    <Provider>
      <div className="App">
        {screenSize > 500 ? (
          <LaptopPg />
        ) : (
          <Router>
            <Routes>
              <Route path="/" element={<PhonePg />} />
              <Route path="/notes" element={<MobNotes />} />
            </Routes>
          </Router>
        )}
      </div>
    </Provider>
  );
}

export default App;
