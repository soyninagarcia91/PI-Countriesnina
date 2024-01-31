import {
  SET_ALL_COUNTRIES,
  GET_COUNTRY_BY_NAME,
  ORDERPOP,
  ORDERALPH,
  FILTERCONT,
  POST_ACTIVITIES,
  GET_ACTIVITIES,
  FILTERACT,
  RESET,
} from "./actions";

const initialState = {
  countries: [], //at '/home' filt
  allCountries: [], //at '/home' all
  activities: [], //filt
  allActivities: [],
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
        countries: payload,
      };
    case ORDERPOP:
      let pop;
      if (state.countries.length === 0) {
        pop = [...state.allCountries];
      } else {
        pop = [...state.countries];
      }

      return {
        ...state,
        countries: pop.slice().sort((a, b) => {
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
      let orderedCountries;
      if (state.countries.length === 0) {
        orderedCountries = [...state.allCountries];
      } else {
        orderedCountries = [...state.countries];
      }

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
        countries: orderedCountries,
      };

    case FILTERCONT:
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

    case POST_ACTIVITIES:
      return {
        ...state,
        allActivities: [...state.allActivities, payload],
      };

    case GET_ACTIVITIES:
      console.log(payload);
      return {
        ...state,
        allActivities: payload,
      };

    case FILTERACT:
      let filteredActivities;
      filteredActivities =
        payload === "All"
          ? { ...state, activities: state.allActivities }
          : {
              ...state,
              activities: state.allActivities.filter(
                (activity) => activity.name === payload
              ),
            };
      console.log(filteredActivities);
      return { ...state, ...state.activities };

    case RESET:
      return {
        ...state,
        countries: [],
        activities: [],
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
