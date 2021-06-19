import { useContext } from "react";
import styled from "styled-components";
import {
  filterCountries,
  searchCountries,
  setFilterTerm,
  setSearchTerm,
} from "../contexts/countryAction";
import {
  useCountryDispatch,
  useCountryState,
} from "../contexts/CountryContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Filters = () => {
  const state = useCountryState();
  const dispatch = useCountryDispatch();
  const themeContext = useContext(ThemeContext);

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(dispatch, { searchTerm: e.currentTarget.value });
    searchCountries(dispatch);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterTerm(dispatch, { filterTerm: e.target.value });
    filterCountries(dispatch);
  };

  return (
    <div
      style={{
        background: themeContext?.themeStyles.background,
        color: themeContext?.themeStyles.text,
      }}
    >
      <Container>
        <SearchCon>
          <i className="fas fa-search"></i>
          <input
            style={{
              background: themeContext?.themeStyles.background,
              color: themeContext?.themeStyles.text,
            }}
            value={state?.searchFilter}
            onChange={handleSearch}
            type="text"
            placeholder="Search for a country..."
          />
        </SearchCon>
        <SelectCon>
          <label htmlFor="transactions_page_currency"></label>
          <Select
            name=""
            id=""
            style={{
              background: themeContext?.themeStyles.background,
              color: themeContext?.themeStyles.text,
            }}
            value={state?.regionFilter}
            onChange={handleFilter}
          >
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </Select>
        </SelectCon>
      </Container>
    </div>
  );
};

export default Filters;

const Container = styled.div`
  padding: 1.5em 1em;
  display: flex;
  margin: 0 auto;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    width: 95%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const SearchCon = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px 10px;
  width: 480px;
  & > input {
    border: none;
    outline: none;
    padding: 5px 10px;
    flex: 1;
  }
  @media (max-width: 992px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    width: 250px;
  }
`;
const SelectCon = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 250px;
  &:before {
    content: "";
    display: block;
    border: 5px solid transparent;
    border-top-color: rgb(145, 139, 139);
    position: absolute;
    right: 25px;
    top: calc(50% - 2px);
  }
  @media (max-width: 600px) {
    margin: 1em 0 0;
  }
`;

const Select = styled.select`
  flex: 1;
  display: flex;
  background: #ffffff;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 12px;
  width: 100%;
  appearance: none;
  outline: none;
`;
