import Cards from "../cards/Cards";
import { SearchBar } from "../searchBar/SearchBar";
import Pagination from "../pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FiltersRedux } from "../filtersRedux/FiltersRedux";
import {
  setAllCountries,
  filterByContinent,
  orderByPopulation,
  resetFilters,
  orderByAlphabetic,
} from "../../redux/actions";
import "../filtersRedux/filters.css";

const Home = () => {
  // ? ----------------------------------------------------FILTROS

  const dispatch = useDispatch();

  const countriesFilt = useSelector((state) => state.countries);
  const countries = useSelector((state) => state.allCountries);

  const totalCountries = countries.length;
  const totalPagCountries = countriesFilt.length;
  const [countriesPerPage, setCountriesPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;
  const currentCountries = countries.slice(firstIndex, lastIndex);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      dispatch(orderByPopulation(value));
      setCurrentPage(1);
    } else if (name === "filter") {
      dispatch(filterByContinent(value));
      setCurrentPage(1);
    }
  };

  const onSort = (e) => {
    const value = e.target.value;
    dispatch(orderByAlphabetic(value));
    setCurrentPage(1);
  };

  const handleClick = () => {
    dispatch(resetFilters());
    setCurrentPage(1);
  };

  // ? ----------------------------------------------------PAGINADO

  useEffect(() => {
    dispatch(setAllCountries());
  }, [dispatch]);

  return (
    <section className="home container">
      <SearchBar />
      <Pagination
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCountries={totalPagCountries}
      ></Pagination>
      <div className="filt">
        <select onChange={handleChange} name="order">
          <option>Order by population</option>
          <option value="Ascendente">Ascendent</option>
          <option value="Descendente">Descendent</option>
        </select>
        <select onChange={handleChange} name="filter">
          <option>Filter by continent</option>
          <option value="All">All</option>
          <option value="Antarctic">Antarctica</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Americas">America</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select onChange={onSort}>
          <option>Sort alphabetically</option>
          <option value="Asc">A - Z</option>
          <option value="Desc">Z - A</option>
        </select>
        <button onClick={handleClick}>Reset</button>
      </div>
      <Cards countries={countriesFilt}></Cards>
    </section>
  );
};

export default Home;
