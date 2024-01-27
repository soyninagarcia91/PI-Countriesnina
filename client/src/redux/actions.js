import axios from "axios";

export const setAllCountries = () => {
  return async function (dispatch) {
    let countries = await axios.get("http://localhost:3002/countries");
    return dispatch({
      type: SET_ALL_COUNTRIES,
      payload: countries.data,
    });
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    let country = await axios.get(
      `http://localhost:3002/countries/name?name=${name}`
    );
    return dispatch({
      type: GET_COUNTRY_BY_NAME,
      payload: country,
    });
  };
};

export const orderByPopulation = (order) => ({
  type: ORDERPOP,
  payload: order,
});

export const orderByAlphabetic = (orderalph) => ({
  type: ORDERALPH,
  payload: orderalph,
});

export const filterByContinent = (continent) => ({
  type: FILTERCONT,
  payload: continent,
});

export const filterByActivity = (activity) => ({
  type: FILTERACT,
  payload: activity,
});

export const resetFilters = () => ({
  type: RESET,
});

export const SET_ALL_COUNTRIES = "SET_ALL_COUNTRIES";
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME";
export const ORDERPOP = "ORDERPOP";
export const ORDERALPH = "ORDERALPH";
export const FILTERCONT = "FILTERCONT";
export const FILTERACT = "FILTERACT";
export const RESET = "RESET";
