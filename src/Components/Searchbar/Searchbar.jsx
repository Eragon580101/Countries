import React from 'react'
import './Searchbar.scss'

const Searchbar = ({handleFilter, handleSearch, show, filter}) => {
  return (
    <div className="search">
        <form className="search__input" onSubmit={handleSearch}>
          <i className="fas fa-search"></i>
          <input type="text" id="name" placeholder="Search for a country..." />
        </form>
        <div className="search__filter" 
          onClick={handleFilter}
        >
          <div className="filter">{filter || 'Filter by Region'}</div>
          <i className="fas fa-chevron-down"></i>
          {show && <div className="regions">
            <p onClick={handleFilter}>Asia</p>
            <p onClick={handleFilter}>Americas</p>
            <p onClick={handleFilter}>Europe</p>
            <p onClick={handleFilter}>Africa</p>
            <p onClick={handleFilter}>Oceania</p>
          </div>}
        </div>
      </div>
  )
}

export default Searchbar