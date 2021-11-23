import { CountryType } from "../App";
import * as actionTypes from "./constants";

let countries = localStorage.getItem("countriesState")
  ? JSON.parse(localStorage.getItem("countriesState") || "{}")
  : "";
let shownCountries = localStorage.getItem("countriesState")
  ? JSON.parse(localStorage.getItem("countriesState") || "{}")
  : "";

export type stateType = {
  countries: Array<CountryType>;
  shownCountries: Array<CountryType>;
  countryDetail: CountryType | undefined;
  countryCode: string;
  searchFilter: string;
  regionFilter: string;
};

export const initialState = {
  countries: countries,
  shownCountries: shownCountries,
  countryDetail: undefined,
  countryCode: "",
  searchFilter: "",
  regionFilter: "",
};

const filterRegion = (state: stateType) => {
  switch (state.regionFilter) {
    case "":
      return state.countries;
    default:
      return state.countries.filter(
        (country) =>
          country.region.toLowerCase() === state.regionFilter.toLowerCase()
      );
  }
};

export const CountryReducer = (
  state: stateType = initialState,
  action: any
) => {
  switch (action.type) {
    case actionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: [...action.payload],
        shownCountries: [...action.payload],
      };
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        searchFilter: action.payload.searchTerm,
        regionFilter: "",
      };
    case actionTypes.SET_FILTER_TERM:
      return {
        ...state,
        regionFilter: action.payload.filterTerm,
        searchFilter: "",
      };
    case actionTypes.FILTER_REGION:
      return {
        ...state,
        shownCountries: filterRegion(state),
      };
    case actionTypes.SEARCH_COUNTRY:
      return {
        ...state,
        shownCountries: state.countries.filter((country) => {
          const regex = new RegExp(state.searchFilter, "gi");
          return country.name.common.match(regex);
        }),
      };
    case actionTypes.SET_COUNTRY_CODE:
      return {
        ...state,
        countryCode: action.payload.countryCode,
      };
    case actionTypes.GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: state.countries.find(
          (country) =>
            country.cca3.toLowerCase() === state.countryCode.toLowerCase()
        ),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
