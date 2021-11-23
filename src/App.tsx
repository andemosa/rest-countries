import { useQuery } from "react-query";
import Spinner from "react-spinkit";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import Index from "./components";
import { setCountries } from "./contexts/countryAction";
import { useCountryDispatch, useCountryState } from "./contexts/CountryContext";
import { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

// Types
export type Params = {
  name: string;
}

export type CountryType = {
  cca3: string;
  borders: Array<string>;
  capital: any;
  currencies: any;
  flags: any;
  languages: any;
  name: any;
  population: number;
  region: string;
  subregion: string;
  tld: Array<string>;
};

const getCountries = async (): Promise<any> =>
  await (await fetch("https://restcountries.com/v3.1/all")).json();

const App = (): JSX.Element => {
  const themeContext = useContext(ThemeContext)
  const dispatch = useCountryDispatch();
  const state = useCountryState()
  const { data, isLoading, error } = useQuery<CountryType[]>(
    "countries",
    getCountries
  );
  
  if (isLoading)
  return (
    <Wrapper>
        <Spinner
          name="folding-cube"
          color="#000070"
          className="spin_kit_icon"
          />
      </Wrapper>
    );
    if (error)
    return (
      <Wrapper>
        <div>Something went wrong ...</div>
      </Wrapper>
    );
    
  if(data?.length !== 0 && state?.countries.length === 0) setCountries(dispatch, data!)

  return (
    <Router>
      <Container style={{
        background: themeContext?.themeStyles.elements,
        color: themeContext?.themeStyles.text,
        transition:"background 3s ease-out"
      }}>
        {
          state?.countries.length !==0 && (
            <Index />
          )
        }
      </Container>
    </Router>
  );
};

export default App;

const Container = styled.div`
  font-family: "Nunito Sans", sans-serif;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
