import { CountryType } from "../App";
import * as actionTypes from "./constants";

export function setCountries(dispatch: any, payload: Array<CountryType>) {
    dispatch({type: actionTypes.SET_COUNTRIES, payload})
    localStorage.setItem("countriesState", JSON.stringify(payload))
}

export function setSearchTerm(dispatch: any, payload: {searchTerm: string}) {
  dispatch({ type: actionTypes.SET_SEARCH_TERM, payload });
}

export function setFilterTerm(dispatch: any, payload: {filterTerm: string}) {
  dispatch({ type: actionTypes.SET_FILTER_TERM, payload });
}

export function filterCountries(dispatch: any) {
  dispatch({ type: actionTypes.FILTER_REGION });
}

export function searchCountries(dispatch: any) {
  dispatch({ type: actionTypes.SEARCH_COUNTRY });
}

export function setCountryCode(dispatch:any, payload:{countryCode:string}) {
    dispatch({type:actionTypes.SET_COUNTRY_CODE, payload})
}

export function getCountryDetail(dispatch:any) {
    dispatch({type: actionTypes.GET_COUNTRY_DETAIL})
}
