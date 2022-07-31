import {useState } from "react";
import Navbar from "../Components/Navbar";
import Home from "../Containers/Home";
import { NumberContext } from "../Contexts/NumberContext";

const HomePage = () => {
  const [number, setNumber] = useState(0);

  
  return (
    <div>
      <Navbar />
      <NumberContext.Provider value={{number,setNumber}}>
        <Home />
      </NumberContext.Provider>
    </div>
  );
};

export default HomePage;
