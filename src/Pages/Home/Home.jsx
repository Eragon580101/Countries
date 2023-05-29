import { useEffect, useState } from "react";
import "./Home.scss";
import FrontListItem from "../../Components/FrontListItem/FrontListItem";
import Data from "../../data.json";
import { useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import { Link } from "react-router-dom";

function Home() {
  const [darkModeOn, setDarkModeOn] = useState(false);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(null);
  const [data, setData] = useState(Data);
  const darkRef = useRef();


  const toggleDarkMode = () => {
    setDarkModeOn(!darkModeOn);
    document.body.classList.toggle("dark");
    darkRef.current.classList.toggle("dark");
  };

  const handleSearch = (e) =>{
    e.preventDefault();
    const searchTerm  = e.target.name.value.toLowerCase();
    const filteredData = Data.filter(item => item.name.toLowerCase().includes(searchTerm))
    setData(filteredData)
  }

  const handleFilter = (e) =>{
    setShow(!show)
    const region = e.target.innerText;
    if(region === 'Filter by Region') return;
    if(e.target.tagName === 'DIV') {
      setShow(true)
      return;
    };
    setFilter(region)
    const filteredData = Data.filter(item => item.region === region)
    setData(filteredData)
  }


  return (
    <div to='/detail' className="App">
      <Navbar toggleDarkMode={toggleDarkMode} darkModeOn={darkModeOn}/>
      <Searchbar handleSearch={handleSearch}  handleFilter={handleFilter} filter={filter} show={show}/>
      <div className="app">
        {data.map((item) => {
          return (
            <FrontListItem
              ref={darkRef}
              key={item.numericCode}
              image={item.flags.png}
              country={item.name}
              population={item.population}
              region={item.region}
              capital={item.capital}
              alpha3Code={item.alpha3Code}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
