import React from "react";
import "./LaptopPg.css";
import Sidebar from "../../src/components/Sidebar/Sidebar";
import LapHome from "../../src/components/Home/LapHome";
import LapNotes from "../../src/components/Notes/LapNotes";
import UseContext from "../useContext";

function LaptopPg() {
  const { selected } = UseContext();

  return (
    <div className="laptop">
      <Sidebar />
      {selected.length > 0 ? <LapNotes /> : <LapHome />}
    </div>
  );
}

export default LaptopPg;
