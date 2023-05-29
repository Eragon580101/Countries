import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import { createContext, useEffect, useState } from "react";

const ThemeContext  = createContext()
function App() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  
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
    <ThemeContext.Provider value={{darkModeOn, setDarkModeOn}}>
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
