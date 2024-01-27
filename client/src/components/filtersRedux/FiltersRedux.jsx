import { useDispatch, useSelector } from "react-redux";
import {
  filterByContinent,
  orderByPopulation,
  resetFilters,
  orderByAlphabetic,
} from "../../redux/actions";
import CountryList from "../pagination/CountryList";
import Cards from "../cards/Cards";
import "./filters.css";
import { useEffect, useState } from "react";

export const FiltersRedux = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "order") {
      dispatch(orderByPopulation(value));
    } else if (name === "filter") {
      dispatch(filterByContinent(value));
    } else {
      dispatch(orderByAlphabetic(value));
    }
  };

  const handleClick = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="filt">
      <select onChange={handleChange} name="order">
        <option>Filter by population</option>
        <option value="Ascendente">Ascendent</option>
        <option value="Descendente">Descendent</option>
      </select>
      <select onChange={handleChange} name="filter">
        <option>Filter by continent</option>
        <option value="All">All</option>
        <option value="Antarctic">Antartida</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Americas">America</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select onChange={handleChange}>
        <option>Sort alphabetically</option>
        <option value="Desc">A - Z</option>
        <option value="Asc">Z - A</option>
      </select>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
};
