import {
  SET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  ORDERPOP,
  ORDERALPH,
  FILTERCONT,
  FILTERACT,
  RESET,
  filterByActivity,
} from "./actions";

const initialState = {
  countries: [], //at '/home' filt
  allCountries: [], //at '/home' all
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALL_COUNTRIES:
      return {
        ...state,
        allCountries: payload,
      };
    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        allCountries: payload,
      };
    case ORDERPOP:
      return {
        ...state,
        countries: [...state.allCountries].slice().sort((a, b) => {
          switch (payload) {
            case "Ascendente":
              return a.population - b.population;
            case "Descendente":
              return b.population - a.population;
            default:
              return 0;
          }
        }),
      };
    case ORDERALPH:
      let orderedCountries = [...state.allCountries];
      console.log(payload);
      switch (payload) {
        case "Asc":
          orderedCountries.sort((a, b) =>
            a.nameCommon.localeCompare(b.nameCommon)
          );
          break;
        case "Desc":
          orderedCountries.sort((a, b) =>
            b.nameCommon.localeCompare(a.nameCommon)
          );
          break;
        default:
          break;
      }

      return {
        ...state,
        allCountries: orderedCountries,
      };
    case FILTERCONT:
      console.log(payload);
      const filteredContinents =
        payload === "All"
          ? { ...state, countries: state.allCountries }
          : {
              ...state,
              countries: state.allCountries.filter(
                (c) => c.continent === payload
              ),
            };
      return filteredContinents;
    case FILTERACT:
      if (payload === "All") return { ...state, countries: state.allCountries };
      const filteract = state.allCountries.filter(
        (c) => c.activity === payload
      );
      return {
        ...state,
        countries: filteract,
      };
    case RESET:
      return {
        ...state,
        countries: state.allCountries,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
