import { useState } from "react";
import { BsGraphUp } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { FiInbox } from "react-icons/fi";
import { SiCssdesignawards } from "react-icons/si";
import { TbSpeakerphone } from "react-icons/tb";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import DetailsUserComponent from "./components/DetailsUserComponent";
import HomeTableComponent from "./components/HomeTableComponent";
import TopBarComponent from "./components/TopBarComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex w-full h-screen">
      <div className="sidebar flex flex-col items-center py-2">
        <div className="p-4">
          <SiCssdesignawards className="text-white" size={20} />
        </div>
        <div className="p-4">
          <GoHome className="text-white" size={20}  />
        </div>
        <div className="p-4">
          <FiInbox className="text-white" size={20}  />
        </div>
        <div className="p-4">
          <BsGraphUp className="text-white" size={20}  />
        </div>
        <div className="p-4">
          <FiSettings className="text-white" size={20}  />
        </div>
        <div className="p-4">
          <TbSpeakerphone className="text-white" size={20}  />
        </div>
      </div>
      <div className="content">
        <TopBarComponent />
          <Routes>
            <Route path="/" element={<HomeTableComponent />} />
            <Route path="user" element={<DetailsUserComponent />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
