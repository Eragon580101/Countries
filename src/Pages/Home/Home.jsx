import { useContext, useEffect, useState } from "react";
import "./Home.scss";
import FrontListItem from "../../Components/FrontListItem/FrontListItem";
import { useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { ThemeContext } from "../../App";

function Home() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(null);
  const { data } = useContext(ThemeContext);
  const [dataToUse, setDataToUse] = useState(data);
  const darkRef = useRef();

  useEffect(() => {
    setDataToUse(data);
  }, [data]);


  const toggleDarkMode = () => {
    setDarkModeOn(!darkModeOn);
    document.body.classList.toggle("dark");
    darkRef.current.classList.toggle("dark");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.name.value.toLowerCase();
    const filteredData = data.filter((item) =>
      item.name.common.toLowerCase().includes(searchTerm)
    );
    setDataToUse(filteredData);
  };

  const handleFilter = (e) => {
    setShow(!show);
    const region = e.target.innerText;
    if (region === "Filter by Region") return;
    if (e.target.tagName === "DIV") {
      setShow(true);
      return;
    }
    setFilter(region);
    const filteredData = data.filter((item) => item.region === region);
    setDataToUse(filteredData);
    console.log(filteredData)
  };

  return (
    <div to="/detail" className="App">
      <Navbar toggleDarkMode={toggleDarkMode} darkModeOn={darkModeOn} />
      <Searchbar
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        filter={filter}
        show={show}
      />
      <div className="app">
        {dataToUse.map((item) => {
          return (
            <FrontListItem
              ref={darkRef}
              key={item.cca3}
              image={item.flags.png}
              country={item.name.common}
              population={item.population}
              region={item.region}
              capital={item.capital}
              alpha3Code={item.cca3}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
