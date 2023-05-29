import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const ThemeContext  = createContext()
function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const {data} = await axios.get("https://restcountries.com/v3.1/all");
      setData(data);
    };
    getCountries();
  }, []);
  
  useEffect(() => {
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (userPrefersDark) {
      document.body.classList.add("dark");
      setDarkModeOn(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{darkModeOn, data, setDarkModeOn}}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail/:code" element={<Detail/>}/>
        </Routes>
    </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export {ThemeContext}

export default App;
